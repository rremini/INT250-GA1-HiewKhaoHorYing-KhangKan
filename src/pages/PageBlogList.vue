<script setup>
import BlogCard from "../components/pages/blog/BlogCard.vue";
import { blogs } from "../data/blog/blogData.js"
</script>

<template>
    <div class="py-8 px-5 max-w-4xl mx-auto pb-24 md:pb-8">

        <div class="flex items-center space-x-2 text-[#A6A09B] mb-6">
            <span>
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.5 12C1.30109 12 1.11032 11.921 0.96967 11.7803C0.829018 11.6397 0.75 11.4489 0.75 11.25V1.5C0.75 1.30109 0.829018 1.11032 0.96967 0.96967C1.11032 0.829018 1.30109 0.75 1.5 0.75H5.25C6.04565 0.75 6.80871 1.06607 7.37132 1.62868C7.93393 2.19129 8.25 2.95435 8.25 3.75C8.25 2.95435 8.56607 2.19129 9.12868 1.62868C9.69129 1.06607 10.4544 0.75 11.25 0.75H15C15.1989 0.75 15.3897 0.829018 15.5303 0.96967C15.671 1.11032 15.75 1.30109 15.75 1.5V11.25C15.75 11.4489 15.671 11.6397 15.5303 11.7803C15.3897 11.921 15.1989 12 15 12H10.5C9.90326 12 9.33097 12.2371 8.90901 12.659C8.48705 13.081 8.25 13.6533 8.25 14.25C8.25 13.6533 8.01295 13.081 7.59099 12.659C7.16903 12.2371 6.59674 12 6 12H1.5Z"
                        stroke="#A6A09B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        class="w-3 h-3 sm:w-4 sm:h-4" />
                </svg>
            </span>
            <p class="font-bold">คลังความรู้</p>
        </div>


        <div class="flex items-center gap-4 mb-8 mt-8">


            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-sm leading-none"><svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 12C1.30109 12 1.11032 11.921 0.96967 11.7803C0.829018 11.6397 0.75 11.4489 0.75 11.25V1.5C0.75 1.30109 0.829018 1.11032 0.96967 0.96967C1.11032 0.829018 1.30109 0.75 1.5 0.75H5.25C6.04565 0.75 6.80871 1.06607 7.37132 1.62868C7.93393 2.19129 8.25 2.95435 8.25 3.75C8.25 2.95435 8.56607 2.19129 9.12868 1.62868C9.69129 1.06607 10.4544 0.75 11.25 0.75H15C15.1989 0.75 15.3897 0.829018 15.5303 0.96967C15.671 1.11032 15.75 1.30109 15.75 1.5V11.25C15.75 11.4489 15.671 11.6397 15.5303 11.7803C15.3897 11.921 15.1989 12 15 12H10.5C9.90326 12 9.33097 12.2371 8.90901 12.659C8.48705 13.081 8.25 13.6533 8.25 14.25C8.25 13.6533 8.01295 13.081 7.59099 12.659C7.16903 12.2371 6.59674 12 6 12H1.5Z"
                            stroke="#A6A09B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                            class="w-5 h-5 sm:w-6 sm:h-6" />
                    </svg>
                </span>
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