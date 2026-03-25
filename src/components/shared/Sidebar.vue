<script setup>
import { cn } from '@/utils/merge'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeMenu = computed(() => {
    const path = route.path
    if (path.includes('/assessment')) return 'assessment'
    if (path.includes('/consult')) return 'consult'
    if (path.includes('/diary')) return 'diary'
    if (path.includes('/blogs')) return 'blogs'
    return 'home'
})

const menuItems = [
    {
        id: 'home',
        label: 'หน้าแรก',
        mobileLabel: 'หน้าแรก',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M12.5 17.5V10.8333C12.5 10.6123 12.4122 10.4004 12.2559 10.2441C12.0996 10.0878 11.8877 10 11.6667 10H8.33333C8.11232 10 7.90036 10.0878 7.74408 10.2441C7.5878 10.4004 7.5 10.6123 7.5 10.8333V17.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 8.33322C2.49994 8.09078 2.55278 7.85124 2.65482 7.63132C2.75687 7.4114 2.90566 7.21639 3.09083 7.05989L8.92417 2.06073C9.22499 1.80648 9.60613 1.66699 10 1.66699C10.3939 1.66699 10.775 1.80648 11.0758 2.06073L16.9092 7.05989C17.0943 7.21639 17.2431 7.4114 17.3452 7.63132C17.4472 7.85124 17.5001 8.09078 17.5 8.33322V15.8332C17.5 16.2753 17.3244 16.6992 17.0118 17.0117C16.6993 17.3243 16.2754 17.4999 15.8333 17.4999H4.16667C3.72464 17.4999 3.30072 17.3243 2.98816 17.0117C2.67559 16.6992 2.5 16.2753 2.5 15.8332V8.33322Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        id: 'assessment',
        label: 'ประเมินสุขภาพจิต',
        mobileLabel: 'ประเมิน',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M18.3332 10.0001H16.2665C15.9023 9.9993 15.5479 10.1178 15.2574 10.3376C14.967 10.5573 14.7565 10.8661 14.6582 11.2167L12.6998 18.1834C12.6872 18.2267 12.6609 18.2647 12.6248 18.2917C12.5888 18.3188 12.5449 18.3334 12.4998 18.3334C12.4548 18.3334 12.4109 18.3188 12.3748 18.2917C12.3388 18.2647 12.3125 18.2267 12.2998 18.1834L7.69984 1.81675C7.68722 1.77347 7.6609 1.73546 7.62484 1.70841C7.58878 1.68137 7.54491 1.66675 7.49984 1.66675C7.45476 1.66675 7.4109 1.68137 7.37484 1.70841C7.33878 1.73546 7.31246 1.77347 7.29984 1.81675L5.3415 8.78341C5.24356 9.13271 5.03432 9.44051 4.74556 9.66009C4.45679 9.87967 4.10427 9.99904 3.7415 10.0001H1.6665" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        id: 'consult',
        label: 'ปรึกษาผู้เชี่ยวชาญ',
        mobileLabel: 'ปรึกษา',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none"><path d="M5.75016 15.0065C7.34064 15.8223 9.17023 16.0433 10.9092 15.6296C12.6482 15.2159 14.1823 14.1947 15.235 12.75C16.2876 11.3052 16.7897 9.53206 16.6506 7.74994C16.5116 5.96781 15.7406 4.29394 14.4767 3.02996C13.2127 1.76598 11.5388 0.995011 9.7567 0.855982C7.97457 0.716952 6.20139 1.21901 4.75668 2.27167C3.31197 3.32434 2.29074 4.85839 1.87702 6.59739C1.46329 8.3364 1.68428 10.166 2.50016 11.7565L0.833496 16.6731L5.75016 15.0065Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        id: 'diary',
        label: 'บันทึกอารมณ์',
        mobileLabel: 'บันทึก',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M6.6665 1.66675V5.00008" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3335 1.66675V5.00008" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 8.33325H17.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        id: 'blogs',
        label: 'คลังความรู้',
        mobileLabel: 'ความรู้',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M10 5.83325V17.4999" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.49984 15C2.27882 15 2.06686 14.9122 1.91058 14.7559C1.7543 14.5996 1.6665 14.3877 1.6665 14.1667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5H6.6665C7.55056 2.5 8.39841 2.85119 9.02353 3.47631C9.64865 4.10143 9.99984 4.94928 9.99984 5.83333C9.99984 4.94928 10.351 4.10143 10.9761 3.47631C11.6013 2.85119 12.4491 2.5 13.3332 2.5H17.4998C17.7209 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V14.1667C18.3332 14.3877 18.2454 14.5996 18.0891 14.7559C17.9328 14.9122 17.7209 15 17.4998 15H12.4998C11.8368 15 11.2009 15.2634 10.7321 15.7322C10.2632 16.2011 9.99984 16.837 9.99984 17.5C9.99984 16.837 9.73645 16.2011 9.2676 15.7322C8.79876 15.2634 8.16288 15 7.49984 15H2.49984Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
]
</script>

<template>
    <aside class="hidden md:flex w-70 shrink-0 h-screen flex-col bg-[#fafbfc] border-r border-gray-100 px-6 py-8">
        <div class="mb-10 pl-2">
            <img src="../../assets/shared/khangkan-logo.webp" alt="Khangkan-Logo" class="h-15 w-auto" draggable="false">
        </div>

        <h3 class="text-xs font-semibold text-gray-400 mb-4 pl-4 tracking-wide">
            เมนูหลัก
        </h3>

        <nav class="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            <RouterLink v-for="item in menuItems" :key="item.id" :to="item.id === 'home' ? '/' : `/${item.id}`" :class="cn(
                'flex items-center px-4 py-3.5 rounded-2xl text-sm font-medium transition-all border-transparent duration-200 outline-none',
                activeMenu === item.id
                    ? 'bg-white text-[#009b77] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-50'
                    : 'text-gray-500 hover:bg-gray-100/50 hover:text-gray-700'
        )">
                <span class="mr-4 flex items-center justify-center w-6 h-6" v-html="item.icon"></span>
                {{ item.label }}
            </RouterLink>
        </nav>

        <div class="mt-auto pt-6">
            <div class="border-t border-gray-100 pb-6"></div>
            <div
                class="bg-white rounded-2xl p-3 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                <div class="w-10 h-10 bg-[#f4f4f5] rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <div class="overflow-hidden">
                    <p class="text-sm font-bold text-gray-800 truncate">ผู้ใช้งาน</p>
                    <p class="text-[11px] font-medium text-[#009b77] truncate">โหมดไม่ระบุตัวตน</p>
                </div>
            </div>
        </div>
    </aside>

    <header
        class="md:hidden fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-5 z-40 border-b border-gray-100">

        <div class="flex items-center">
            <img src="../../assets/shared/khangkan-logo.webp" alt="Khangkan-Logo" class="h-10 w-auto">
        </div>

        <div
            class="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
        </div>
    </header>

    <nav
        class="md:hidden fixed bottom-0 left-0 right-0 h-18 bg-white border-t border-gray-100 flex justify-around items-center px-2 z-40 pb-safe">
        <RouterLink v-for="item in menuItems" :key="item.id" :to="item.id === 'home' ? '/' : `/${item.id}`" :class="[
            'flex flex-col items-center justify-center w-full h-full relative transition-colors duration-200 focus:outline-none',
            activeMenu === item.id ? 'text-[#009b77]' : 'text-[#79716B]'
        ]">
            <div v-if="activeMenu === item.id" class="absolute top-0 w-8 h-0.75 bg-[#009b77] rounded-b-md"></div>

            <span class="mb-1 flex items-center justify-center w-6 h-6 mt-1" v-html="item.icon"></span>

            <span class="text-[10px] font-medium">{{ item.mobileLabel }}</span>
        </RouterLink>
    </nav>

</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 20px;
}
</style>