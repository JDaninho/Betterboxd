import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import WatchlistView from '../views/WatchlistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:movieId',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchlistView
    },
  ]
})

export default router
