<script setup>
const props = defineProps({
  blog: {
    type: Object,
    default: () => ({})
  }
})

const getImage = (id) => {
  return new URL(`../../../assets/blog/blog${id}.png`, import.meta.url).href
}
</script>

<template>
  <router-link :to="'/blogs/' + blog.id" class="block group mb-3 sm:mb-4 px-2 sm:px-0 focus:outline-none">
    <div class="flex gap-3 sm:gap-5 p-3 sm:p-4 bg-card rounded-2xl border border-border shadow-sm 
                transition-all duration-300 
                hover:shadow-md hover:border-primary/30
                active:scale-[0.98] active:bg-accent"> <div class="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-xl bg-muted">
        <img 
          :src="getImage(blog.id)" 
          :alt="blog.title" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
      </div>

      <div class="flex flex-col flex-1 min-w-0 justify-between py-0.5">
        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 rounded-md">
              {{ blog.category }}
            </span>
            <div class="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground/60">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ blog.time }}
            </div>
          </div>

          <h2 class=" text-sm sm:text-lg font-bold text-foreground leading-tight sm:leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {{ blog.title }}
          </h2>
        </div>

        <div class="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
          <div class="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-muted flex items-center justify-center border border-border">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span class="truncate font-medium">{{ blog.author }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

</style>