
<template>
  <div class="custom-bg-soft rounded-lg border border-gray-300 dark:border-gray-700 shadow p-6 max-w-lg animate-slide-up">
    <h3 class="font-bold mb-4">공지사항 등록</h3>
    <form @submit.prevent="createNotice">
      <input v-model="title" type="text" required placeholder="제목" class="input mb-2" />
      <textarea v-model="content" required placeholder="내용" class="input mb-2"></textarea>
      <div class="flex gap-2 mt-4">
        <button type="submit" class="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">등록</button>
        <button type="button" class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" @click="goToList">목록가기</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const content = ref('')

const createNotice = async () => {
  await fetch('/api/notices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title.value, content: content.value })
  })
  router.push('/admintaekang/support')
}

const goToList = () => router.push('/admintaekang/support')
</script>
