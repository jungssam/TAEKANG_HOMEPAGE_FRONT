import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Service from '@/views/Service.vue'
import Support from '@/views/Support.vue'
import Download from '@/views/Download.vue'
import Careers from '@/views/Careers.vue'
import Locations from '@/views/Locations.vue'

// 공지사항 children
import NoticeList from '@/views/NoticeList.vue'
import NoticeDetail from '@/views/NoticeDetail.vue'
import NoticeCreate from '@/views/NoticeCreate.vue'
import NoticeEdit from '@/views/NoticeEdit.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/service', component: Service },
  {
    path: '/support',
    component: Support,
    children: [
      { path: '', component: NoticeList }, // /support
      { path: 'notice/:id', component: NoticeDetail }, // /support/notice/1
    ]
  },
  {
    path: '/admintaekang/support',
    component: Support,
    children: [
      { path: '', component: NoticeList },
      { path: 'notice/new', component: NoticeCreate },
      { path: 'notice/:id', component: NoticeDetail },
      { path: 'notice/:id/edit', component: NoticeEdit }
    ]
  },
  { path: '/download', component: Download },
  { path: '/careers', component: Careers },
  { path: '/locations', component: Locations }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
