<template>
        <h1>Bem-Vindo</h1>
    <div class="container-sm">
      <form @submit.prevent="register">
        <h2 class="mb-3">Registrar</h2>
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
        </div>
        <br>
        <p v-if="errMsg">{{ errMsg }}</p>
        <div class="alternative-option mt-4">
          Já tem uma conta ? <span><a href="/">Login</a></span>
        </div>
  
        <button @click="register" id="register_button" class="mt-4 btn btn-success">
          Registrar
        </button>
        
      </form>
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
      console.log("Cadastrado com sucesso")
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
      }
    })
  }
  </script>

<style scoped>
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