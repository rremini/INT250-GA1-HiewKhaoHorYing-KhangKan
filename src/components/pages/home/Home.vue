<script setup>
</script>

<template>
    <div class="py-8 px-5 max-w-5xl mx-auto pb-24 md:pb-8">

        <div class="flex items-center space-x-2 text-[#A6A09B] mb-6">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </span>
            <p class="font-bold text-[15px]">แดชบอร์ดภาพรวม</p>
        </div>

        <div class="relative w-full h-48 md:h-60 rounded-3xl overflow-hidden mb-6 shadow-sm">
            <img src="@/assets/home/welcome-home.png"
                alt="Welcome-Banner" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-r from-black/40 to-transparent"></div>

            <div class="absolute inset-0 p-6 md:p-10 flex flex-col justify-center text-white">

                <div
                    class="bg-white text-gray-800 px-3.5 py-2 rounded-full flex items-center gap-1.5 w-max mb-4 shadow-sm">
                    <svg class="w-4 h-4 text-[#009b77]" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-xs font-bold tracking-wide leading-none pt-0.5">Digital Safe Space</span>
                </div>

                <h2 class="text-2xl md:text-3xl font-bold mb-2">ยินดีต้อนรับสู่พื้นที่ปลอดภัย</h2>
                <p class="text-sm md:text-base text-white/90 font-light">เราพร้อมดูแลสุขภาพจิตของคุณ 24 ชม.</p>
            </div>
        </div>

        <div
            class="bg-[#F0F9FF] border border-[#DFF2FE] rounded-[20px] p-4 flex items-center justify-between mb-6 shadow-sm">
            <div class="flex items-center gap-4">
                <div
                    class="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[#00598A]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h3 class="text-[14px] md:text-[15px] font-bold text-[#00598A]">คุณไม่ได้อยู่ตัวคนเดียวนะ
                        ต้องการความช่วยเหลือหรือเปล่า?</h3>
                    <p class="text-xs text-[#00598A] mt-0.5">หากคุณกำลังมีความคิดทำร้ายตัวเอง
                        หรือต้องการคนคุยด้วยเดี๋ยวนี้ โทร 1323 (ฟรี 24 ชม.)</p>
                </div>
            </div>
            <a href="tel:1323"
                class="w-10 h-10 bg-[#0084D1] hover:bg-[#00598A] rounded-full flex items-center justify-center text-white transition-colors shrink-0 shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <RouterLink to="/assessment"
                class="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md hover:border-[#009b77]/30 transition-all duration-300 group focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                <div
                    class="w-16 h-16 bg-[#e6f5f1] rounded-full flex items-center justify-center text-[#009b77] group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M25.6668 14H22.7735C22.2636 13.9989 21.7674 14.1649 21.3608 14.4725C20.9542 14.7801 20.6595 15.2124 20.5218 15.7034L17.7802 25.4567C17.7625 25.5173 17.7256 25.5705 17.6752 25.6084C17.6247 25.6462 17.5633 25.6667 17.5002 25.6667C17.4371 25.6667 17.3756 25.6462 17.3252 25.6084C17.2747 25.5705 17.2378 25.5173 17.2202 25.4567L10.7802 2.54337C10.7625 2.48279 10.7256 2.42957 10.6752 2.39171C10.6247 2.35384 10.5633 2.33337 10.5002 2.33337C10.4371 2.33337 10.3756 2.35384 10.3252 2.39171C10.2747 2.42957 10.2378 2.48279 10.2202 2.54337L7.4785 12.2967C7.34137 12.7857 7.04844 13.2166 6.64417 13.5241C6.2399 13.8315 5.74637 13.9986 5.2385 14H2.3335"
                            stroke="#009966" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <span class="text-[15px] font-bold text-gray-800">ประเมินใจตอนนี้</span>
            </RouterLink>

            <RouterLink to="/consult"
                class="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md hover:border-[#0084D1]/30 transition-all duration-300 group focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                <div
                    class="w-16 h-16 bg-[#FFFBEB] rounded-full flex items-center justify-center text-[#E17100] group-hover:scale-110 transition-transform duration-300">
                    <svg class="relative left-px -top-px" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                        viewBox="0 0 28 28" fill="none">
                        <path
                            d="M9.21683 23.3333C11.4435 24.4756 14.0049 24.785 16.4395 24.2058C18.8741 23.6265 21.0218 22.1968 22.4955 20.1742C23.9693 18.1516 24.6722 15.6692 24.4775 13.1742C24.2829 10.6792 23.2035 8.33581 21.4339 6.56624C19.6644 4.79667 17.3209 3.71731 14.826 3.52267C12.331 3.32803 9.84855 4.0309 7.82595 5.50463C5.80336 6.97837 4.37364 9.12604 3.79442 11.5606C3.21521 13.9952 3.5246 16.5567 4.66683 18.7833L2.3335 25.6667L9.21683 23.3333Z"
                            stroke="#E17100" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <span class="text-[15px] font-bold text-gray-800">ปรึกษาผู้เชี่ยวชาญ</span>
            </RouterLink>

        </div>

    </div>
</template>