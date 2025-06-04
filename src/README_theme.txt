
# 홈페이지 테마 샘플 (다크/라이트, 시스템 연동 + 수동 토글)

## 적용법
- public/index.html <head>에 아래 Pretendard 폰트 CDN을 추가
<link href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" rel="stylesheet" />
- src/assets/styles/common.css로 복사
- App.vue 혹은 레이아웃 컴포넌트에서 <script setup>과 <button class="theme-toggle"> 부분 참고
