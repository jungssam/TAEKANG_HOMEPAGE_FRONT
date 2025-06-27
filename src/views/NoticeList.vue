
<template>
  <div>
    <h3 class="font-bold mb-2">공지사항</h3>
    <ul class="divide-y divide-gray-300 dark:divide-gray-700 custom-bg-soft rounded-lg border border-gray-300 dark:border-gray-700 animate-slide-up">
      <li v-for="notice in notices" :key="notice.id" class="p-3 flex justify-between">
        <span>[{{ notice.createdAt.substring(0, 10) }}]</span>
        <router-link
          :to="noticeDetailUrl(notice.id)"
          class="text-blue-700 hover:underline"
        >{{ notice.title }}</router-link>
      </li>
    </ul>
    <button
      v-if="isAdmin"
      class="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
      @click="goToCreate"
    >등록</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const isAdmin = computed(() => route.path.startsWith('/admintaekang/support'))

const notices = ref([])

const fetchNotices = async () => {
  const res = await fetch('/api/notices')
  notices.value = await res.json()
}
onMounted(fetchNotices)

const noticeDetailUrl = id =>
  isAdmin.value
    ? `/admintaekang/support/notice/${id}`
    : `/support/notice/${id}`

const goToCreate = () => {
  router.push('/admintaekang/support/notice/new')
}
</script>
