<script setup>
import BlogCard from "../../components/blog/BlogCard.vue";
import { blogs } from "../../data/blog/blogData.js"
</script>

<template>
    <div class="max-w-3xl mx-auto p-6">
        <h1 class="text-2xl font-bold mb-6">
            คลังความรู้
        </h1>

        <div class="space-y-4">
            <template v-if="blogs && blogs.length > 0">
                <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
            </template>

            <div v-else class="text-center py-10 border-2 border-dashed border-gray-200 rounded-lg">
                <p class="text-gray-500">ไม่พบข้อมูลบทความในขณะนี้</p>
            </div>
        </div>
    </div>
</template>