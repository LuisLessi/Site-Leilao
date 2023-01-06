import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from '../bootstrap'

//Firebase config

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU2JOKmpJBBxsZHh0kwiY_ZYBzeifA2EI",
  authDomain: "login-auth-7d0f7.firebaseapp.com",
  projectId: "login-auth-7d0f7",
  storageBucket: "login-auth-7d0f7.appspot.com",
  messagingSenderId: "289662621943",
  appId: "1:289662621943:web:df81b4dc463a897f5b5bf2"
};

initializeApp(firebaseConfig);

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

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(bootstrap).use(store).use(router).mount('#app')
