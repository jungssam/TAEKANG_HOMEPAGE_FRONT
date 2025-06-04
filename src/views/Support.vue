<template>
  <div class="site-main">
    <div class="container animate-fade-in">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-blue-700">고객지원</h2>
          <div class="mb-8">
            <h3 class="font-bold mb-2">공지사항</h3>
            <ul class="divide-y divide-gray-200 custom-bg-soft rounded-lg custom-border animate-slide-up">
              <li class="p-3 flex justify-between"><span>[2024-05-01]</span><span>홈페이지 리뉴얼 안내</span></li>
              <li class="p-3 flex justify-between"><span>[2024-04-10]</span><span>정보보안 시스템 점검</span></li>
              <li class="p-3 flex justify-between"><span>[2024-03-20]</span><span>IT 파트너사 모집</span></li>
            </ul>
          </div>
          <div class="custom-bg-soft rounded-lg custom-border shadow p-6 max-w-lg animate-slide-up">
            <h3 class="font-bold mb-2">문의하기</h3>
            <form @submit.prevent="alert('문의가 접수되었습니다! (실제 연결X, 목업용)')">
              <input type="text" required placeholder="이름" class="input mb-2" />
              <input type="email" required placeholder="이메일" class="input mb-2" />
              <textarea required placeholder="문의 내용" class="input mb-2"></textarea>
              <button type="submit" class="px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">문의하기</button>
            </form>
          </div>
        </section>
    </div>
  </div>
</template>
<script setup>
const alert = window.alert;
</script>
<style scoped>
.input { display:block; width:100%; padding:8px 12px; border-radius:6px; border:1px solid var(--color-border); margin-bottom:8px; }
</style>
