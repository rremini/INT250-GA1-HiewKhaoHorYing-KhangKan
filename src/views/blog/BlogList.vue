<script setup>
import BlogCard from "../../components/blog/BlogCard.vue";
import { blogs } from "../../data/blog/blogData.js"
</script>

<template>


    <div class="max-w-3xl mx-auto px-6 py-8 mt-1">

        <div class="flex items-center gap-2 text-sm text-gray-400 mb-3 ml-1">
            <span class="text-sm leading-none"><img src="../../assets/blog/book-open-svgrepo-com.svg" alt="" class="w-3 h-3 sm:w-4 sm:h-4"></span>
            <span>คลังความรู้</span>
        </div>

      
        <div class="flex items-center gap-4 mb-8">

           
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-xl leading-none"><img src="../../assets/blog/book-open-svgrepo-com.svg" alt="" class="w-5 h-5 sm:w-6 sm:h-6"></span>
            </div>

          
            <h1 class="text-2xl font-semibold text-gray-800">
                คลังความรู้
            </h1>
        </div>




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