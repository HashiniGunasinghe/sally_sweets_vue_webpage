import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'shop',

      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/event',
      name: 'event',

      component: () => import('../views/EventView.vue')
    },
    {
      path: '/signin',
      name: 'signin',

      component: () =>import('../views/SigninView.vue'),
    },

    {
      path: '/register',
      name: 'register',

      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/voucher',
      name: 'voucher',

      component: () => import('../views/Voucher.vue')
    },
    {
      path: '/signout',
      name: 'signout',

      component: () => import('../views/SignoutView.vue')
    },
    {
      path: '/sweetpack',
      name: 'sweetpack',

      component: () => import('../views/Sweetpack.vue')
    },

  ]
})

export default router
