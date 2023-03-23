import CartView from '@/views/CartView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CollectionView from '../views/CollectionView.vue'
import HomeView from '../views/HomeView.vue'
import OrderTrackingView from '../views/OrderTrackingView.vue'
import PhotosView from '../views/PhotosView.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/photos/:collection_name',
      name: 'collection',
      props: true,
      component: CollectionView
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/order-tracking',
      name: 'order-tracking',
      component: OrderTrackingView
    },
    {
      path: '/shop/:image_path',
      name: 'shop',
      component: ShopView,
      props: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   //component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
