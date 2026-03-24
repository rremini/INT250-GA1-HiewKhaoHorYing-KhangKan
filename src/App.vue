<script setup>
import Sidebar from '@/components/shared/Sidebar.vue' 
</script>

<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden relative">
    
    <Sidebar />

    <main class="flex-1 overflow-y-scroll pt-16 pb-18 md:pt-0 md:pb-0">
      
      <RouterView />
      
    </main>
    
  </div>
</template>

<style scoped></style>