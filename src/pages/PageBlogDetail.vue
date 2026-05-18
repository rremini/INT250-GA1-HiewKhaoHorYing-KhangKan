<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"

import { blogs } from "../data/blog/blogData"

const route = useRoute()

// ใช้ find หา blog ที่ id ตรงกับ parameter ใน url
const blog = computed(() => {
  return blogs.find(b => b.id === parseInt(route.params.id))
})
</script>
<template>
  <div v-if="blog" class="max-w-3xl mx-auto p-6 transition-colors duration-300">
    
    <div class="mb-6">
      <span class="text-primary font-bold text-sm">{{ blog.category }}</span>
    </div>

    <h1 class="text-3xl font-bold text-foreground mb-4">{{ blog.title }}</h1>

    <div class="flex gap-3 text-muted-foreground text-sm mb-8">
      <span>โดย {{ blog.author }}</span>
      <span>•</span>
      <span>ใช้เวลาอ่าน {{ blog.time }}</span>
    </div>

    <p class="text-foreground leading-relaxed text-lg whitespace-pre-line opacity-90">
      {{ blog.content }}
    </p>

  </div>

  <div v-else class="text-center py-20 text-muted-foreground/60">
    ไม่พบบทความที่คุณต้องการ
  </div>
</template>