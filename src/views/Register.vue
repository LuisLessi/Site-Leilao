<template>
     <div class="background_mobile">
    <div class="container mt-1">
        <h1>Leilões Start</h1>
    <div class="container-sm">
      <form @submit.prevent="register">
        <h2 class="mb-3">Registrar</h2>

        <img class="background_img" src="http://patrocinados.estadao.com.br/sodresantoro/wp-content/uploads/sites/74/2018/08/Leilao-sodre.png" alt="">
        <img class="dix_img" src="../assets/dix.png" alt="">

     
        <div class="card col-lg-5 ">
      <div class="card-body">
        <div class="input">
          <label for="email">Email</label>
          <input
            v-model="email"
            class="form-control"
            type="text"
            name="email"
            placeholder="email@endereco.com"
          />
        </div>
        <div class="input">
          <label for="password">Senha</label>
          <input
            v-model = "password"
            class="form-control"
            type="password"
            name="password"
            placeholder="senha123"
          />

          <div class="input-block mt-2">
    <label>Selecione o tipo de conta para logar</label><br><br>

    <label>Pessoa Física</label>&nbsp&nbsp<input
    v-model="tipoForm" name="tipoConta" id="contaA" type="radio" value="PF" checked/>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    <input
    v-model="tipoForm" name="tipoConta" id="contaB" type="radio" value="PJ"/>&nbsp&nbsp<label>Pessoa Jurídica</label>
    

      </div>
      <div v-if="tipoForm == 'PF'">
        <br><label for="email">Digite seu CPF</label>
          <input
            class="form-control"
            type="text"
            name="cpf"
            maxlength="11"
            placeholder="12345678999"
          />
        </div>
        <div v-else><br><label for="email">Digite seu CNPJ</label>
          <input
            class="form-control"
            type="text"
            name="cnpj"
            maxlength="14"
            placeholder="12345678999999"
          /></div>
        </div>

        
        
      </div>
      </div>
      
        <p v-if="errMsg">{{ errMsg }}</p>
        <div class="alternative-option mt-4">
          &nbsp&nbsp&nbsp&nbsp&nbsp
          <label style="font-weight: bold">Já tem uma conta ? </label>&nbsp
          <span><a href="/">Login</a></span>
        </div>
  
        <button @click="register" id="register_button" class="mt-4 btn btn-success">
          Registrar
        </button>
        
      </form>
    </div>
  </div>
  </div>
  </template>
  
  <script setup>


  import {ref} from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
  
  const email = ref("");
  const password = ref("");
  const router = useRouter()
  const errMsg = ref()


  const register = () => {
    
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) =>{
      console.log("Cadastrado de pessoa física com sucesso")
      alert("Conta criada com sucesso")
      router.push('/')
    }).catch((err) => {
      console.log(err)
      switch (err.code){

      case "auth/invalid-email":
        errMsg.value = "Email invalido";
        break;
      case "auth/email-already-in-use":
        errMsg.value = "Email já cadastrado";
        break;
        case "auth/weak-password":
        errMsg.value = "Senha deve ser maior que 6 caracteres";
        break;
      }
    })
  }

  
  </script>

  <script>
  export default{
    created() {
      document.body.style.backgroundColor = '#212047'
    },
  data() {
    return {
    tipoForm: "PF",
    }
  }
  }
  </script>

<style scoped>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%; 
  background-color: red;

}
.background_img{
  z-index: -1;
  position: absolute;
  bottom: 0;
  top: 0px;
  left: 26.5%;
  max-width: 73.4%;

  -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  
}
.dix_img{
  z-index: 1;
  position: absolute;
  left: 1%;
  top: 27%;
  max-width: 800px;
 
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.input-block label {
  font-size: 14px;
  color: #000000;
}
.card {
        margin: 0 auto; 
        float: none;  
        margin-bottom: 10px;
}
span{
    text-decoration: underline;
}
span:hover{
    cursor: pointer;

}

@media only screen and (max-width: 1024px) {
  .dix_img{
  z-index: -1;
  display: none;
}
.background_img{
display: none;
  
}
.background_mobile{
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-image: url("http://patrocinados.estadao.com.br/sodresantoro/wp-content/uploads/sites/74/2018/08/Leilao-sodre.png");
  position: absolute;

}
}
</style>