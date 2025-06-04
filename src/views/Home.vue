<template>
  <div class="site-main hero">
    <div class="container animate-fade-in">
        <section class="flex flex-col items-center">
          <img src="@/assets/logo.svg" alt="TKC" class="w-32 mt-6 mb-2" />
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center text-white">IT SI/SM 토탈 솔루션, <span style="color:var(--color-accent2)">태강정보통신</span></h1>
          <p class="text-lg text-gray-200 mb-6 text-center">
            고객과 함께 성장하는 IT 파트너<br />스마트한 SI, 안정적인 SM, 미래지향적 솔루션 전문기업
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
            <router-link to="/service" class="custom-bg-soft rounded-xl shadow p-6 hover:shadow-lg custom-border text-center transition-transform transform hover:-translate-y-1 animate-slide-up">
              <div class="text-2xl mb-2">🚀</div>
              <div class="font-bold mb-1" style="color:var(--color-accent2)">사업분야</div>
              <div class="text-sm text-gray-300">SI/SM/솔루션 역량 소개</div>
            </router-link>
            <router-link to="/support" class="custom-bg-soft rounded-xl shadow p-6 hover:shadow-lg custom-border text-center transition-transform transform hover:-translate-y-1 animate-slide-up">
              <div class="text-2xl mb-2">📣</div>
              <div class="font-bold mb-1" style="color:var(--color-accent2)">공지사항</div>
              <div class="text-sm text-gray-300">고객 공지/문의 바로가기</div>
            </router-link>
            <router-link to="/careers" class="custom-bg-soft rounded-xl shadow p-6 hover:shadow-lg custom-border text-center transition-transform transform hover:-translate-y-1 animate-slide-up">
              <div class="text-2xl mb-2">💼</div>
              <div class="font-bold mb-1" style="color:var(--color-accent2)">채용정보</div>
              <div class="text-sm text-gray-300">채용공고/복지/비전</div>
            </router-link>
          </div>
        </section>
    </div>
  </div>
</template>
