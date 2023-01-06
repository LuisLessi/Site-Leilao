<template>
    <div class="container mt-5">
      <br>
    <h1>Leilões Start</h1>
    <div class="container">
      <form @submit.prevent="login">
        <h2 class="mb-3 ">Login</h2>

      <div class="card col-lg-5 ">
      <div class="card-body">
        <div class="input">
          <div></div>
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
            v-model="password"
            class="form-control"
            type="password"
            name="password"
            placeholder="senha123"
          />
        </div>
        </div>
        </div>
        <br>
        <p v-if="errMsg">{{ errMsg }}</p>
        <div class="alternative-option mt-4">
          Não possui uma conta ? <span><a href="/register">Registrar</a></span>
        </div>
        <button @click="login" class="mt-4 btn btn-success" id="login_button">
          Login
        </button>
      </form>
    </div>
  </div>
  </template>
  
  <script setup>
 import {ref} from 'vue'
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
  const password = ref("");
  const router = useRouter()
  const errMsg = ref()

  const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) =>{
      console.log("Cadastrado com sucesso")
      alert("Logado com sucesso, bem vindo !")
      router.push('/home')
    }).catch((err) => {
      console.log(err)
      switch (err.code){
      case "auth/invalid-email":
        errMsg.value = "Email invalido";
        break;
      case "auth/user-not-found":
        errMsg.value = "Nenhuma conta criada nesse email";
        break;
      case "auth/wrong-password":
        errMsg.value = "Senha incorreta";
        break;
      default:
        errMsg.value = "Email ou senha está incorreto";
        break;
      }
    })
  }

  </script>

  <script>
  export default{
    created() {
  document.body.style.backgroundColor = '#cfcfcf'
},
  
  }

  </script>
  
<style scoped>

.card {
        margin: 0 auto; 
        float: none;  
        margin-bottom: 10px;
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

span{
    text-decoration: underline;
}
span:hover{
    cursor: pointer;

}
</style>