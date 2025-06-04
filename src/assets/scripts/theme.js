import { ref, computed, onMounted } from 'vue'

export function useTheme() {
    const theme = ref('system')
    const themeLabel = computed(() =>
        theme.value === 'system' ? '🌗 시스템' :
            theme.value === 'light' ? '☀️ 밝게' : '🌙 어둡게'
    )
    function applyTheme(value) {
        document.body.classList.remove('light', 'dark')
        if (value === 'light' || value === 'dark') {
            document.body.classList.add(value)
        }
    }
    function detectSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    function toggleTheme() {
        if (theme.value === 'system') {
            theme.value = detectSystemTheme() === 'dark' ? 'light' : 'dark'
        } else if (theme.value === 'light') {
            theme.value = 'dark'
        } else if (theme.value === 'dark') {
            theme.value = 'system'
        }
        applyTheme(theme.value)
        localStorage.setItem('theme', theme.value)
    }
    onMounted(() => {
        theme.value = localStorage.getItem('theme') || 'system'
        applyTheme(theme.value)
    })
    return { theme, themeLabel, toggleTheme }
}
