<script setup>
import Sidebar from '@/components/shared/Sidebar.vue'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div class="flex h-screen bg-background overflow-hidden relative transition-colors duration-300">
    
    <Sidebar />

    <main class="flex-1 overflow-y-scroll pt-16 pb-18 md:pt-0 md:pb-0">
      <RouterView />
    </main>
    
  </div>
</template>

<style scoped></style>