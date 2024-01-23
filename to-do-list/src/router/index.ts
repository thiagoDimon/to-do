// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'
import ToDo from '@/views/ToDo.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'toDo',
        name: 'ToDo',
        component: ToDo,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
