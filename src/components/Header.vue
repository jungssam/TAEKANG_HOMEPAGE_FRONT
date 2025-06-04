
<template>
  <header class="custom-header">
    <img src="@/assets/icon.svg" alt="TKC" class="h-8 w-8 mr-2" />
    <div class="logo">(주)태강정보통신</div>
    <nav class="nav-menu">
      <a href="/">홈</a>
      <a href="/about">회사소개</a>
      <a href="/service">사업분야</a>
      <a href="/support">고객지원</a>
      <a href="/download">자료실</a>
      <a href="/careers">채용정보</a>
      <button @click="toggleTheme" class="theme-toggle">
        {{ themeLabel }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { useTheme } from '@/assets/scripts/theme.js'
const { theme, themeLabel, toggleTheme } = useTheme()
</script>

<style scoped>
.logo {
  font-size: 1.8em;
  font-weight: bold;
  padding-right: 24px;
}
.nav-menu {
  display: flex;
  gap: 24px;
  align-items: center;
}
.theme-toggle {
  margin-left: 1.5em;
}
</style>
