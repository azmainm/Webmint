import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TransferPage from '../views/TransferPage.vue'


const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/transferpage',
        name: 'TransferPage',
        component: TransferPage
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),  
    routes
  })
  
  export default router
