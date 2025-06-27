
<template>
  <div class="custom-bg-soft rounded-lg border border-gray-300 dark:border-gray-700 shadow p-6 max-w-lg animate-slide-up">
    <h3 class="font-bold mb-4">공지사항 수정</h3>
    <form @submit.prevent="updateNotice">
      <input v-model="title" type="text" required placeholder="제목" class="input mb-2" />
      <textarea v-model="content" required placeholder="내용" class="input mb-2"></textarea>
      <div class="flex gap-2 mt-4">
        <button type="submit" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">수정</button>
        <button type="button" class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" @click="goToList">목록가기</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const title = ref('')
const content = ref('')

const fetchNotice = async () => {
  const res = await fetch(`/api/notices/${route.params.id}`)
  const data = await res.json()
  title.value = data.title
  content.value = data.content
}
onMounted(fetchNotice)

const updateNotice = async () => {
  await fetch(`/api/notices/${route.params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title.value, content: content.value })
  })
  router.push('/admintaekang/support')
}

const goToList = () => router.push('/admintaekang/support')
</script>
