<template>
  <header class="custom-header">
    <a href="/">
      <img src="../images/logo1.png" class="h-10 w-auto mr-4 logo-img" />
    </a>
    <button class="menu-toggle" @click="open = !open" aria-label="메뉴 열기" v-if="isMobile">
      &#9776;
    </button>
    <nav :class="['nav-menu', { open }]" v-show="!isMobile || open">
      <a href="/about">회사소개</a>
      <a href="/service">사업분야</a>
      <a href="/support">고객지원</a>
      <a href="/location">오시는길</a>
      <button @click="toggleTheme" class="theme-toggle">{{ themeLabel }}</button>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/assets/scripts/theme.js'

const { theme, themeLabel, toggleTheme } = useTheme()
const open = ref(false)
const isMobile = ref(false)

function updateIsMobile() {
  isMobile.value = window.innerWidth < 700
}
onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<style scoped>
.custom-header {
  position: relative;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 2.1rem;
  color: #fff;
  margin-left: auto;
  margin-right: 1rem;
  display: none;
  cursor: pointer;
}

@media (max-width: 700px) {
  .menu-toggle {
    display: block;
  }
  .nav-menu {
    flex-direction: column;
    position: absolute;
    top: 70px; /* header 높이에 맞게 조정 */
    right: 0;
    width: 100vw;
    background: #1f2937;
    z-index: 999;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    display: none;
    gap: 0;
    align-items: flex-start;
    padding: 1rem 1.5rem 1rem 2rem;
  }
  .nav-menu.open {
    display: flex;
  }
  .nav-menu a, .theme-toggle {
    margin: 10px 0;
    width: 100%;
    text-align: left;
  }
}

@media (min-width: 700px) {
  .nav-menu {
    display: flex !important;
    position: static;
    background: none;
    box-shadow: none;
    width: auto;
    padding: 0;
  }
  .menu-toggle {
    display: none !important;
  }
}
</style>
