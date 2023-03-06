 import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import create from '../components/create.vue'
import declaration from '../components/declaration.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/auth/sign-in",
    name:"Login",
    component: Login
  },
  {
    path:"/auth/register",
    name:"Register",
    component: Register
  }, {
    path:"/auth/create",
    name:"create",
    component: create
  },
  {
    path:"/auth/declaration",
    name:"declaration",
    component: declaration
  },


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
