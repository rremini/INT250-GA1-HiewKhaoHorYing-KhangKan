<template>
  <div class="bg-slate-50 min-h-screen p-4 md:p-8 text-slate-800">
    <div class="max-w-3xl mx-auto space-y-8">

      <header class="flex items-center justify-between pt-4">
        <div>
          <p class="text-[#78C496] text-sm font-bold uppercase tracking-wider mb-1">เคียงข้างคุณทุกวัน</p>
          <h1 class="text-3xl font-extrabold text-[#4A6B8A] tracking-tight">บันทึกอารมณ์ของคุณ</h1>
          <p class="text-slate-500 mt-1 font-medium">พื้นที่ปลอดภัยสำหรับความรู้สึก</p>
        </div>
        <div class="hidden sm:flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
          <svg class="w-6 h-6 text-[#FCE07C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="text-sm font-semibold text-slate-600">สถิติวันนี้</span>
        </div>
      </header>

      <section class="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
        <p class="text-center text-[#78C496] font-semibold text-sm uppercase tracking-widest mb-8">
          เลือกความรู้สึกของคุณตอนนี้
        </p>

        <div class="flex justify-center gap-4 sm:gap-8">
          <button
            v-for="mood in moodOptions"
            :key="mood.value"
            @click="selectedMood = mood.value"
            class="relative group focus:outline-none"
          >
            <div 
              class="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center transition-all duration-300 border-2"
              :class="selectedMood === mood.value 
                ? [mood.activeBorder, mood.activeBg, mood.activeText] 
                : ['bg-white border-slate-100 text-slate-300', mood.hoverBorder, mood.hoverText]"
            >
              <svg class="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300" :class="selectedMood === mood.value ? 'scale-110' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="mood.svgPath"></path>
              </svg>
            </div>
            
            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 w-full">
              <span 
                class="text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300"
                :class="selectedMood === mood.value ? mood.activeText : 'text-slate-400 opacity-0 group-hover:opacity-100'"
              >
                {{ mood.label }}
              </span>
              <div 
                class="h-1.5 w-1.5 rounded-full transition-all duration-300"
                :class="selectedMood === mood.value ? 'bg-[#FCE07C] scale-100' : 'bg-transparent scale-0'"
              ></div>
            </div>
          </button>
        </div>
      </section>

      <section class="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 mt-4">
        <div class="flex items-center gap-3 mb-8">
          <div class="bg-slate-50 p-2.5 rounded-xl text-[#8DB4E2]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div>
            <h2 class="font-bold text-[#4A6B8A] text-lg">ภาพรวมอารมณ์สัปดาห์นี้</h2>
            <p class="text-sm text-slate-500">ระบบแสดงข้อความแนะนำเบื้องต้นทางสุขภาพจิต</p>
          </div>
        </div>

        <div class="h-48 flex items-end justify-between px-2 sm:px-6 gap-2">
          <div v-for="(d, i) in days" :key="i" class="flex flex-col items-center gap-3 w-full group">
            
            <div class="w-full max-w-[1rem] bg-slate-100 rounded-full h-32 flex items-end relative transition-all group-hover:bg-slate-200">
              <div
                class="w-full rounded-full transition-all duration-700 ease-out"
                :class="getColor(d.mood)"
                :style="{ height: (d.mood * 20) + '%' }"
              ></div>
            </div>

            <div class="text-center">
              <p class="text-xs font-semibold text-slate-400 mb-1 group-hover:text-[#4A6B8A] transition-colors">{{ d.label }}</p>
              <div 
                class="h-1 w-1 rounded-full mx-auto transition-all"
                :class="d.label === 'วันนี้' ? 'bg-[#FCE07C] scale-100' : 'bg-transparent scale-0'"
              ></div>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-slate-100">
          <div class="flex items-center gap-2 mb-3 text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <p class="text-slate-500 font-medium text-sm">แท็กที่ส่งผลต่ออารมณ์บ่อยที่สุด</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-4 py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-xs font-semibold text-slate-600 cursor-pointer">
              📚 การเรียน
            </span>
            <span class="px-4 py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-xs font-semibold text-slate-600 cursor-pointer">
              💰 การเงิน
            </span>
            <span class="px-4 py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-xs font-semibold text-slate-600 cursor-pointer">
              😴 พักผ่อน
            </span>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 mb-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
          <div class="w-32 h-32 bg-[#FCE07C] rounded-full blur-3xl -mr-10 -mt-10"></div>
        </div>

        <div class="flex items-center gap-3 mb-4 relative z-10">
          <div class="bg-slate-50 p-2.5 rounded-xl text-[#78C496]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <h2 class="font-bold text-[#4A6B8A] text-lg">บันทึกส่วนตัว (Journal)</h2>
        </div>

        <textarea
          v-model="note"
          class="w-full h-36 p-5 border border-slate-100 rounded-2xl bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#78C496]/30 focus:border-[#78C496] focus:outline-none transition-all resize-none relative z-10"
          placeholder="มีอะไรอยู่ในใจ? เขียนระบายตรงนี้ได้เลย..."
        ></textarea>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const selectedMood = ref(null)
const note = ref("")


const moodOptions = [
  { 
    value: 1, 
    label: "ดิ่งมาก", 
    activeBg: "bg-rose-50", activeBorder: "border-rose-300", activeText: "text-rose-600",
    hoverBorder: "group-hover:border-rose-200", hoverText: "group-hover:text-rose-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M16 16s-1.5-2-4-2-4 2-4 2 M6 7l2.5 1.5 M18 7l-2.5 1.5" 
  },
  { 
    value: 2, 
    label: "เศร้า", 
    activeBg: "bg-orange-50", activeBorder: "border-orange-300", activeText: "text-orange-600",
    hoverBorder: "group-hover:border-orange-200", hoverText: "group-hover:text-orange-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M16 16s-1.5-2-4-2-4 2-4 2" 
  },
  { 
    value: 3, 
    label: "เฉยๆ", 
    activeBg: "bg-slate-100", activeBorder: "border-slate-300", activeText: "text-slate-600",
    hoverBorder: "group-hover:border-slate-200", hoverText: "group-hover:text-slate-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 15h8" 
  },
  { 
    value: 4, 
    label: "รู้สึกดี", 
    activeBg: "bg-[#8DB4E2]/10", activeBorder: "border-[#8DB4E2]", activeText: "text-[#4A6B8A]", 
    hoverBorder: "group-hover:border-[#8DB4E2]/50", hoverText: "group-hover:text-[#8DB4E2]",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 14s1.5 2 4 2 4-2 4-2" 
  },
  { 
    value: 5, 
    label: "มีความสุข", 
    activeBg: "bg-[#78C496]/10", activeBorder: "border-[#78C496]", activeText: "text-[#3A8B63]", 
    hoverBorder: "group-hover:border-[#78C496]/50", hoverText: "group-hover:text-[#78C496]",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 13s1.5 3 4 3 4-3 4-3" 
  }
]

const days = [
  { label: "จ.", mood: 3 },
  { label: "อ.", mood: 4 },
  { label: "พ.", mood: 3 },
  { label: "พฤ.", mood: 2 },
  { label: "ศ.", mood: 3 },
  { label: "วันนี้", mood: 4 },
  { label: "อา.", mood: 5 }
]

// ปรับสีกราฟให้ล้อไปกับโทนของโลโก้ Khangkan
const getColor = (mood) => {
  if (mood === 5) return "bg-[#78C496]" // Green/Teal (Logo)
  if (mood === 4) return "bg-[#8DB4E2]" // Light Blue (Logo)
  if (mood === 3) return "bg-[#FCE07C]" // Yellow/Gold (Logo Heart)
  if (mood === 2) return "bg-orange-300" // Warning
  return "bg-rose-400" // Danger
}
</script>