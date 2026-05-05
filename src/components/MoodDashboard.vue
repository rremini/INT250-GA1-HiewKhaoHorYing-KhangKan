<template>
  <div class="bg-slate-50 min-h-screen p-3 sm:p-5 md:p-8 text-slate-800">
    <div class="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">

      <!-- Header -->
      <header class="flex items-center justify-between pt-2 sm:pt-4">
        <div>
          <p class="text-[#78C496] text-xs sm:text-sm font-bold uppercase mb-1">เคียงข้างคุณทุกวัน</p>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-[#4A6B8A]">บันทึกอารมณ์ของคุณ</h1>
          <p class="text-slate-500 mt-1 text-sm sm:text-base font-medium">พื้นที่ปลอดภัยสำหรับความรู้สึก</p>
        </div>
        <div class="hidden sm:flex items-center gap-3 bg-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-sm border border-slate-100">
          <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#FCE07C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="text-sm font-semibold text-slate-600">สถิติวันนี้</span>
        </div>
      </header>

      <!-- ส่วนที่ 1: เลือกความรู้สึก (แก้ไข Responsive ใหม่) -->
      <section class="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-slate-100 p-5 sm:p-6 md:p-8">
        <p class="text-center text-[#78C496] font-semibold text-xs sm:text-sm uppercase mb-6 md:mb-10">
          เลือกความรู้สึกของคุณตอนนี้
        </p>

        <div class="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 pb-2">
          <button
            v-for="mood in moodOptions"
            :key="mood.value"
            @click="selectedMood = mood.value"
            class="group focus:outline-none flex flex-col items-center gap-2 md:gap-3 w-[64px] sm:w-[88px]"
          >
            <!-- กล่องไอคอน (ฟิกซ์ขนาดตายตัว ป้องกันการยืดเบี้ยว) -->
            <div 
              class="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-all duration-300 border-2 shrink-0"
              :class="selectedMood === mood.value 
                ? [mood.activeBorder, mood.activeBg, mood.activeText] 
                : ['bg-white border-slate-100 text-slate-300', mood.hoverBorder, mood.hoverText]"
            >
              <svg class="w-7 h-7 sm:w-10 sm:h-10 transition-transform duration-300" :class="selectedMood === mood.value ? 'scale-110' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="mood.svgPath"></path>
              </svg>
            </div>
            
            <!-- ข้อความ -->
            <div class="flex flex-col items-center gap-1.5 h-8">
              <span 
                class="text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 text-center whitespace-nowrap"
                :class="selectedMood === mood.value ? mood.activeText : 'text-slate-400 opacity-100 md:opacity-0 md:group-hover:opacity-100'"
              >
                {{ mood.label }}
              </span>
              <div 
                class="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full transition-all duration-300 hidden md:block"
                :class="selectedMood === mood.value ? 'bg-[#FCE07C] scale-100' : 'bg-transparent scale-0'"
              ></div>
            </div>
          </button>
        </div>
      </section>

      <!-- ส่วนที่ 2: Dashboard แสดงผลย้อนหลัง 7 วัน -->
      <section class="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-slate-100 p-5 sm:p-6 md:p-8">
        <div class="flex items-center gap-3 mb-6 md:mb-8">
          <div class="bg-slate-50 p-2 sm:p-2.5 rounded-xl text-[#8DB4E2]">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div>
            <h2 class="font-bold text-[#4A6B8A] text-base sm:text-lg">ภาพรวมอารมณ์ 7 วันล่าสุด</h2>
            <p class="text-xs sm:text-sm text-slate-500">ติดตามความเปลี่ยนแปลงของตัวคุณ</p>
          </div>
        </div>

        <div class="h-32 sm:h-40 md:h-48 flex items-end justify-between px-1 sm:px-4 md:px-6 gap-1 sm:gap-2">
          <div v-for="(d, i) in days" :key="i" class="flex flex-col items-center gap-2 sm:gap-3 w-full group">
            <div class="w-full max-w-[8px] sm:max-w-[12px] md:max-w-[16px] bg-slate-100 rounded-full h-24 sm:h-32 md:h-36 flex items-end relative transition-all group-hover:bg-slate-200">
              <div
                class="w-full rounded-full transition-all duration-700 ease-out"
                :class="getColor(d.mood)"
                :style="{ height: (d.mood * 20) + '%' }"
              ></div>
            </div>
            <div class="text-center">
              <p class="text-[9px] sm:text-xs font-semibold text-slate-400 mb-0.5 sm:mb-1 group-hover:text-[#4A6B8A] transition-colors">{{ d.label }}</p>
              <div 
                class="h-1 w-1 rounded-full mx-auto transition-all hidden sm:block"
                :class="d.label === 'วันนี้' ? 'bg-[#FCE07C] scale-100' : 'bg-transparent scale-0'"
              ></div>
            </div>
          </div>
        </div>

        <div class="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-slate-100">
          <div class="flex items-center gap-2 mb-3 text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <p class="text-slate-500 font-medium text-xs sm:text-sm">แท็กที่ส่งผลต่ออารมณ์บ่อยที่สุด</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-[10px] sm:text-xs font-semibold text-slate-600 cursor-pointer">
              📚 การเรียน
            </span>
            <span class="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-[10px] sm:text-xs font-semibold text-slate-600 cursor-pointer">
              💰 การเงิน
            </span>
            <span class="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 hover:bg-[#8DB4E2]/10 transition border border-slate-100 rounded-xl text-[10px] sm:text-xs font-semibold text-slate-600 cursor-pointer">
              😴 พักผ่อน
            </span>
          </div>
        </div>
      </section>

      <!-- ส่วนที่ 3: บันทึก Journal -->
      <section class="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-slate-100 p-5 sm:p-6 md:p-8 mb-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
          <div class="w-24 h-24 sm:w-32 sm:h-32 bg-[#FCE07C] rounded-full blur-2xl sm:blur-3xl -mr-8 -mt-8 sm:-mr-10 sm:-mt-10"></div>
        </div>

        <div class="flex items-center gap-3 mb-4 relative z-10">
          <div class="bg-slate-50 p-2 sm:p-2.5 rounded-xl text-[#78C496]">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <h2 class="font-bold text-[#4A6B8A] text-base sm:text-lg">บันทึกส่วนตัว (Journal)</h2>
        </div>

        <textarea
          v-model="note"
          class="w-full h-28 sm:h-36 p-4 sm:p-5 text-sm sm:text-base border border-slate-100 rounded-2xl bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#78C496]/30 focus:border-[#78C496] focus:outline-none transition-all resize-none relative z-10"
          placeholder="มีอะไรอยู่ในใจ? เขียนระบายตรงนี้ได้เลย..."
        ></textarea>

        <!-- ปุ่ม Action -->
        <div class="mt-5 sm:mt-6 flex flex-col items-center gap-3 relative z-10">
          <button 
            @click="saveEntry"
            class="w-full sm:w-auto px-6 py-3.5 sm:px-12 sm:py-4 bg-[#78C496] hover:bg-[#66b385] text-white text-sm sm:text-base font-bold rounded-2xl shadow-lg shadow-[#78C496]/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            บันทึกความรู้สึกวันนี้
          </button>
          
          <div class="h-6 flex items-center justify-center">
            <p v-if="saveStatus" class="text-xs sm:text-sm font-medium text-[#78C496] animate-pulse">
              {{ saveStatus }}
            </p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const selectedMood = ref(null)
const note = ref("")
const saveStatus = ref("")
const days = ref([]) 

const loadDashboard = () => {
  const history = JSON.parse(localStorage.getItem('mood_history') || '[]')
  const last7Days = []
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0] 
    
    let label = d.toLocaleDateString('th-TH', { weekday: 'short' })
    if (i === 0) label = "วันนี้"

    const record = history.find(item => item.date === dateStr)
    last7Days.push({
      label: label,
      mood: record ? record.mood : 0 
    })
  }
  days.value = last7Days
  
  const todayStr = new Date().toISOString().split('T')[0]
  const todayRecord = history.find(item => item.date === todayStr)
  if (todayRecord) {
    selectedMood.value = todayRecord.mood
    note.value = todayRecord.note
  }
}

onMounted(() => {
  loadDashboard()
})

const saveEntry = () => {
  if (!selectedMood.value) {
    alert("กรุณาเลือกอารมณ์ของคุณก่อนบันทึกนะคะ")
    return
  }

  const todayStr = new Date().toISOString().split('T')[0]
  let history = JSON.parse(localStorage.getItem('mood_history') || '[]')
  const existingIndex = history.findIndex(item => item.date === todayStr)

  if (existingIndex > -1) {
    history[existingIndex].mood = selectedMood.value
    history[existingIndex].note = note.value
  } else {
    history.push({
      date: todayStr,
      mood: selectedMood.value,
      note: note.value
    })
  }

  localStorage.setItem('mood_history', JSON.stringify(history))
  loadDashboard()
  
  saveStatus.value = "บันทึกเรียบร้อยแล้วค่ะ ✨"
  setTimeout(() => saveStatus.value = "", 3000)
}

const moodOptions = [
  { 
    value: 1, label: "ดิ่งมาก", 
    activeBg: "bg-rose-50", activeBorder: "border-rose-300", activeText: "text-rose-600",
    hoverBorder: "md:group-hover:border-rose-200", hoverText: "md:group-hover:text-rose-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M16 16s-1.5-2-4-2-4 2-4 2 M6 7l2.5 1.5 M18 7l-2.5 1.5" 
  },
  { 
    value: 2, label: "เศร้า", 
    activeBg: "bg-orange-50", activeBorder: "border-orange-300", activeText: "text-orange-600",
    hoverBorder: "md:group-hover:border-orange-200", hoverText: "md:group-hover:text-orange-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M16 16s-1.5-2-4-2-4 2-4 2" 
  },
  { 
    value: 3, label: "เฉยๆ", 
    activeBg: "bg-slate-100", activeBorder: "border-slate-300", activeText: "text-slate-600",
    hoverBorder: "md:group-hover:border-slate-200", hoverText: "md:group-hover:text-slate-400",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 15h8" 
  },
  { 
    value: 4, label: "รู้สึกดี", 
    activeBg: "bg-[#8DB4E2]/10", activeBorder: "border-[#8DB4E2]", activeText: "text-[#4A6B8A]", 
    hoverBorder: "md:group-hover:border-[#8DB4E2]/50", hoverText: "md:group-hover:text-[#8DB4E2]",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 14s1.5 2 4 2 4-2 4-2" 
  },
  { 
    value: 5, label: "มีความสุข", 
    activeBg: "bg-[#78C496]/10", activeBorder: "border-[#78C496]", activeText: "text-[#3A8B63]", 
    hoverBorder: "md:group-hover:border-[#78C496]/50", hoverText: "md:group-hover:text-[#78C496]",
    svgPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 9h.01 M16 9h.01 M8 13s1.5 3 4 3 4-3 4-3" 
  }
]

const getColor = (mood) => {
  if (mood === 5) return "bg-[#78C496]" 
  if (mood === 4) return "bg-[#8DB4E2]" 
  if (mood === 3) return "bg-[#FCE07C]" 
  if (mood === 2) return "bg-orange-300" 
  if (mood === 1) return "bg-rose-400"
  return "bg-transparent" 
}
</script>