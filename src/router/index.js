import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../pages/HomePage.vue';
import DetailPage from '../pages/DetailPage.vue';
// import AddPage from '../pages/AddPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailPage
  },
  {
    // path: '/add',
    // name: 'Add',
    // component: AddPage
    path: '/add',
    component: () => import('../pages/AddPage.vue')
  },
  {
    path: '/contact',
    component: () => import('../pages/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
