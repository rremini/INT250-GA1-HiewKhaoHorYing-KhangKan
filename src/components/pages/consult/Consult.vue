<script setup>
import { ref, computed } from 'vue'

const topics = [
    'ปัญหาครอบครัว',
    'การเรียน/สอบ',
    'การเงิน',
    'ความรัก',
    'ความเครียดทั่วไป',
    'อื่นๆ'
]

const selectedTopic = ref('')
const message = ref('')

const isFormValid = computed(() => {
    return selectedTopic.value !== '' && message.value.trim().length > 0
})

const submitForm = () => {
    if (!isFormValid.value) return

    console.log('ส่งข้อมูล:', {
        topic: selectedTopic.value,
        message: message.value
    })

    alert('ส่งข้อความสำเร็จ! นักจิตวิทยาจะติดต่อกลับในเร็วๆ นี้')
    selectedTopic.value = ''
    message.value = ''
}
</script>

<template>

    <Sidebar current-menu="consult" />

    <div class="py-8 px-5 max-w-4xl mx-auto pb-24 md:pb-8">

        <div class="flex items-center space-x-2 text-[#A6A09B] mb-6">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                        d="M5.925 15C7.35643 15.7343 9.00306 15.9332 10.5682 15.5609C12.1333 15.1885 13.5139 14.2694 14.4613 12.9692C15.4087 11.6689 15.8606 10.0731 15.7354 8.46916C15.6103 6.86524 14.9164 5.35876 13.7789 4.22118C12.6413 3.0836 11.1348 2.38972 9.53088 2.2646C7.92697 2.13947 6.3311 2.59132 5.03086 3.53872C3.73063 4.48612 2.81152 5.86677 2.43917 7.43187C2.06682 8.99697 2.26571 10.6436 3 12.075L1.5 16.5L5.925 15Z"
                        stroke="#A6A09B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <p class="font-bold text-[15px]">ปรึกษาผู้เชี่ยวชาญ</p>
        </div>

        <div class="relative w-full h-48 md:h-56 bg-slate-800 rounded-3xl overflow-hidden mb-8 shadow-sm">
            <img src="@/assets/consult/consult-an-expert.jpg" alt="Consult Banner"
                class="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div class="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>

            <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-center text-white">
                <div
                    class="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm bg-white/30">
                    <svg class="relative left-px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M6.58317 16.6666C8.17365 17.4825 10.0032 17.7035 11.7422 17.2898C13.4812 16.876 15.0153 15.8548 16.068 14.4101C17.1206 12.9654 17.6227 11.1922 17.4837 9.41009C17.3446 7.62797 16.5737 5.9541 15.3097 4.69012C14.0457 3.42614 12.3718 2.65517 10.5897 2.51614C8.80758 2.37711 7.0344 2.87916 5.58969 3.93183C4.14498 4.9845 3.12375 6.51855 2.71002 8.25755C2.2963 9.99655 2.51729 11.8261 3.33317 13.4166L1.6665 18.3333L6.58317 16.6666Z"
                            stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold mb-2 tracking-wide">ฝากเรื่องราวไว้ได้เลย</h2>
                <p class="text-sm md:text-base text-white/90 font-light">นักจิตวิทยาจะเข้ามาตอบภายใน 2-4 ชั่วโมง</p>
            </div>
        </div>

        <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-8">

            <div class="mb-6">
                <h3 class="text-[15px] font-bold text-gray-800 mb-4">เรื่องที่อยากปรึกษาคือเรื่องอะไร?</h3>
                <div class="flex flex-wrap gap-2.5">
                    <button v-for="topic in topics" :key="topic" @click="selectedTopic = topic" :class="[
                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                        selectedTopic === topic
                            ? 'border-[#009b77] bg-[#009b77]/10 text-[#009b77]'
                            : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300'
                    ]">
                        {{ topic }}
                    </button>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-[15px] font-bold text-gray-800 mb-3">เล่าให้เราฟังหน่อย (ไม่ระบุตัวตน):</h3>
                <textarea v-model="message" rows="5"
                    class="w-full border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 bg-[#fbfbfb] focus:bg-white focus:outline-none focus:border-[#009b77] focus:ring-1 focus:ring-[#009b77] transition-all resize-none placeholder-gray-400"
                    placeholder="พิมพ์เรื่องที่รบกวนจิตใจคุณที่นี่... ทุกอย่างจะถูกเก็บเป็นความลับ"></textarea>
            </div>

            <button @click="submitForm" :disabled="!isFormValid" :class="[
                'w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all',
                isFormValid
                    ? 'bg-[#009b77] text-white shadow-md hover:bg-[#008264]'
                    : 'bg-[#f0f0f0] text-gray-400 cursor-not-allowed'
            ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_89_1114)">
                        <path
                            d="M10.9021 16.2645C10.9306 16.3355 10.9801 16.3961 11.0441 16.4381C11.108 16.4802 11.1832 16.5017 11.2597 16.4997C11.3362 16.4978 11.4103 16.4724 11.472 16.4272C11.5337 16.3819 11.58 16.3189 11.6048 16.2465L16.4798 1.99648C16.5039 1.93003 16.5084 1.85811 16.4931 1.78915C16.4777 1.72018 16.443 1.65703 16.393 1.60706C16.3431 1.5571 16.2799 1.5224 16.2109 1.50702C16.142 1.49165 16.0701 1.49623 16.0036 1.52023L1.7536 6.39523C1.68122 6.42005 1.61817 6.46642 1.5729 6.52811C1.52764 6.5898 1.50233 6.66386 1.50037 6.74035C1.49841 6.81684 1.51989 6.8921 1.56194 6.95603C1.60399 7.01995 1.66459 7.06949 1.7356 7.09798L7.6831 9.48298C7.87111 9.55826 8.04194 9.67083 8.18527 9.8139C8.32861 9.95698 8.44148 10.1276 8.5171 10.3155L10.9021 16.2645Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.3905 1.61023L8.18555 9.81448" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_89_1114">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                ส่งข้อความ
            </button>

        </div>

        <div class="bg-[#F0F9FF] border border-[#DFF2FE] rounded-3xl p-6 text-center">
            <div
                class="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-[#00598A]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                    </path>
                </svg>
            </div>
            <h3 class="text-base font-bold text-[#00598A] mb-1">คุณไม่ได้อยู่ตัวคนเดียวนะ ต้องการความช่วยเหลือหรือเปล่า?
            </h3>
            <p class="text-xs md:text-sm text-[#00598A] mb-5">
                หากคุณกำลังมีความคิดทำร้ายตัวเอง หรือต้องการคนคุยด้วยเดี๋ยวนี้ โทร 1323 (ฟรี 24 ชม.)
            </p>

            <a href="tel:1323"
                class="inline-flex items-center justify-center gap-2 bg-[#0084D1] hover:bg-[#00598A] text-white px-8 py-3 rounded-full text-sm font-bold transition-colors shadow-md">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                    </path>
                </svg>
                โทร 1323 ทันที
            </a>
        </div>

    </div>
</template>