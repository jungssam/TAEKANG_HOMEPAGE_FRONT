
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Service from '@/views/Service.vue'
import Support from '@/views/Support.vue'
import Download from '@/views/Download.vue'
import Careers from '@/views/Careers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/service', component: Service },
  { path: '/support', component: Support },
  { path: '/download', component: Download },
  { path: '/careers', component: Careers },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
