<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
    &nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="/home" ><img class="icon_home" alt="Vue logo" src="../assets/icon_home.jpg"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">

    <span class="navbar-text">
    <ul class="navbar-nav">
      &nbsp&nbsp&nbsp&nbsp&nbsp
      
      <li class="nav-item">
        <a class="nav-link" href="/live">Ao vivo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/scheduled">Agendados</a>
      </li>
    </ul>
    </span>

    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item navbar-text">
        <a @click="handleSignout" class="nav-link " id="logout" v-if="isLoggedIn">Sair</a>
      </li>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    </ul>
  
  </div>
  </div>
</nav>
  </template>

<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "@/router";

const isLoggedIn = ref(false)

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false           
        }
    })
})

const handleSignout = () => {
    signOut(auth).then(() => {
        router.push("/")
        alert("Conta deslogada")
    })
}
</script>

<style scoped>
.icon_home{
  border-radius: 25%;
  max-width:55px;
    max-height:100px;
    width: auto;
    height: auto;
    right: 10%;
}

nav{
  z-index: 100;
}


#logout{
    cursor: pointer;
}

a:-webkit-any-link:hover{
    color: rgb(0, 0, 0);
}
@media only screen and (max-width: 1024px) {
.icon_home{
  margin-left: 22%;
}
}
</style>