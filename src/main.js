import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from '../bootstrap'

//Firebase config

// Import the functions you need from the SDKs you need
import { initializeApp, initializeAppPj } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB0-7_9M0VNSvi-dMpsvA0REDsxVrggK6Y",
  authDomain: "login-auth-pj.firebaseapp.com",
  projectId: "login-auth-pj",
  storageBucket: "login-auth-pj.appspot.com",
  messagingSenderId: "751265996895",
  appId: "1:751265996895:web:a676c3b9a567114c9a7bea"
};


//FontAwesome config
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, faUserSecret, faFacebook, faInstagram, faLinkedin)

  initializeApp(firebaseConfig);



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(bootstrap).use(store).use(router).mount('#app')
