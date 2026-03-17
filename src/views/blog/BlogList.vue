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

                <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />

            </div>

        </div>

    </template>

