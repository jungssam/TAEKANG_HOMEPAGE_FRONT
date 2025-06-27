
<template>
  <div class="custom-bg-soft rounded-lg border border-gray-300 dark:border-gray-700 shadow p-6 max-w-lg animate-slide-up">
    <h3 class="font-bold mb-2">{{ notice.title }}</h3>
    <div class="mb-2 text-sm text-gray-500">{{ notice.createdAt }}</div>
    <div class="mb-4">{{ notice.content }}</div>

    <div class="flex gap-2 mt-4">
      <button
        v-if="isAdmin"
        class="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
        @click="editNotice"
      >수정</button>
      <button
        v-if="isAdmin"
        class="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
        @click="deleteNotice"
      >삭제</button>
      <button
        class="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
        @click="goToList"
      >목록가기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isAdmin = computed(() => route.path.startsWith('/admintaekang/support'))
const notice = ref({})

const fetchNotice = async () => {
  const res = await fetch(`/api/notices/${route.params.id}`)
  notice.value = await res.json()
}
onMounted(fetchNotice)

const editNotice = () => {
  router.push(`/admintaekang/support/notice/${route.params.id}/edit`)
}
const deleteNotice = async () => {
  if (confirm('정말 삭제하시겠습니까?')) {
    await fetch(`/api/notices/${route.params.id}`, { method: 'DELETE' })
    router.push('/admintaekang/support')
  }
}
const goToList = () => {
  router.push(isAdmin.value ? '/admintaekang/support' : '/support')
}
</script>
