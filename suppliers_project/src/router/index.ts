import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // * url
      name: 'home',// * Nom de la "page"
      component: () => import('../views/HomeView.vue') // * Chemin du composant qui doit s'afficher
    },
    {
      path: '/suppliersList',
      name: 'suppliersList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/suppliersList.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../components/map.vue')
    },
  ]
})

export default router
