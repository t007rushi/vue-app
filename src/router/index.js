import { createRouter, createWebHistory } from 'vue-router'
import Footer from "../components/Footer.vue"
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Footer',
    component: Footer,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router