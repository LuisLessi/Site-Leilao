import { createRouter, createWebHistory } from 'vue-router'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import HomePj from '../views/HomePj.vue'
import Live from '../views/LiveAuction.vue'
import LivePj from '../views/LiveAuctionPj.vue'
import Scheduled from '../views/ScheduledAuction.vue'
import ScheduledPj from '../views/ScheduledAuctionPj.vue'
import MyBids from '../views/MyBids.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  

  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,

    meta: {
      requireAuth: true
    },
  },

  {
    path: '/homePj',
    name: 'HomePj',
    component: HomePj,

    meta: {
      requireAuth: true
    },
  },

  {
    path: '/live',
    name: 'Live',
    component: Live,

    meta: {
      requireAuth: true
    },
  },

  {
    path: '/livePj',
    name: 'LivePj',
    component: LivePj,

    meta: {
      requireAuth: true
    },
  },

  {
    path: '/scheduledPj',
    name: 'scheduledPj',
    component: ScheduledPj,
    
    meta: {
      requireAuth: true
    },
  },

  {
    path: '/scheduled',
    name: 'scheduled',
    component: Scheduled,
    
    meta: {
      requireAuth: true
    },
  },

  {
    path: '/myBids',
    name: 'MyBids',
    component: MyBids,
    
    meta: {
      requireAuth: true
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Voc?? n??o tem acesso, entre em uma conta antes")
      next("/")
    }
  } else {
    next();
  }
})

export default router
