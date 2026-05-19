<script setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const props = defineProps({
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore
</script>

<template>
  <button @click="toggleTheme" :class="[
    'relative inline-flex items-center justify-center rounded-xl bg-card border border-border shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:bg-accent transition-all duration-300 focus:outline-none',
    fullWidth ? 'w-full py-2.5 px-4 gap-3 text-muted-foreground hover:text-foreground' : 'w-10 h-10'
  ]" aria-label="Toggle theme">
    <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="text-orange-500 shrink-0">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="text-blue-400 shrink-0">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>

    <span v-if="fullWidth" class="text-sm font-medium">
      {{ theme === 'light' ? 'โหมดสบายตา' : 'โหมดสว่างตา' }}
    </span>
  </button>
</template>