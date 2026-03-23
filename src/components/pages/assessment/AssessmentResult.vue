<script setup lang="ts">
import { Component } from "vue";
import { AssessmentResult as Result } from "./core/AssessmentCore.vue";
import { cn } from "@/utils/merge";
import Button from "@/components/ui/Button.vue";

const props = withDefaults(defineProps<{ result: Result | null }>(), {
  result: null,
});

const varaints: Record<
  Result,
  {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    title: string;
    description: string;
    instruct: string;
    icon?: Component;
  }
> = {
  none: {
    colors: {
      primary: "#009966",
      secondary: "#ECFDF5",
      accent: "#A4F4CF",
    },
    title: "ไม่มีอาการซึมเศร้า หรือมีน้อยมาก",
    description: "สุขภาพจิตโดยรวมถือว่าอยู่ในเกณฑ์ปกติครับ",
    instruct:
      "ดูแลสุขภาพตามปกติ พักผ่อนให้เพียงพอ และหากิจกรรมผ่อนคลายความเครียดในชีวิตประจำวัน",
  },
  mild: {
    colors: {
      primary: "#759900",
      secondary: "#F8FDEC",
      accent: "#EBF4A4",
    },
    title: "มีอาการซึมเศร้าระดับน้อย",
    description:
      "เริ่มมีภาวะอารมณ์เศร้าหรือความเครียดรบกวนจิตใจบ้าง แต่ยังรับมือได้",
    instruct:
      "ควรเริ่มสังเกตอารมณ์ตัวเอง หาเวลาพักผ่อน พูดคุยระบายความรู้สึกกับคนที่ไว้ใจ หรือปรับเปลี่ยนไลฟ์สไตล์ หากอาการไม่ดีขึ้นใน 1-2 สัปดาห์ ควรประเมินซ้ำครับ",
  },
  moderate: {
    colors: {
      primary: "#E17100",
      secondary: "#FFFBEB",
      accent: "#FEE78B",
    },
    title: "มีอาการซึมเศร้าระดับปานกลาง",
    description:
      "เป็นจุดตัดที่บ่งบอกว่าความเศร้าเริ่มส่งผลกระทบต่อการใช้ชีวิตประจำวัน (เช่น การเรียน การทำงาน หรือความสัมพันธ์)",
    instruct:
      "ควรเริ่มปรึกษาผู้เชี่ยวชาญ เช่น นักจิตวิทยา หรือจิตแพทย์ เพื่อพูดคุยประเมินอาการและหาแนวทางดูแลจิตใจที่เหมาะสมครับ",
  },
  severe: {
    colors: {
      primary: "#FF6567",
      secondary: "#FFF1F1",
      accent: "#FFCCCD",
    },
    title: "มีอาการซึมเศร้าระดับรุนแรง (ปานกลางค่อนข้างรุนแรง)",
    description: "อาการซึมเศร้าค่อนข้างชัดเจนและรบกวนชีวิตประจำวันอย่างมาก",
    instruct:
      "ควรไปพบจิตแพทย์เพื่อรับการวินิจฉัยอย่างละเอียดครับ ในระดับนี้คุณหมออาจพิจารณาเรื่องการทำจิตบำบัด หรือการใช้ยาเพื่อช่วยปรับสมดุลสารเคมีในสมอง",
  },
  extreme: {
    colors: {
      primary: "#EC003F",
      secondary: "#FFF1F2",
      accent: "#FFCCD2",
    },
    title: "มีอาการซึมเศร้าระดับรุนแรงมาก",
    description:
      "ภาวะซึมเศร้าอยู่ในระดับที่รุนแรงและต้องการความช่วยเหลือทางการแพทย์",
    instruct:
      "ต้องไปพบจิตแพทย์โดยเร็วที่สุด เพื่อรับการรักษาอย่างถูกต้องและทันท่วงทีครับ",
  },
};

const content = varaints[props.result];
</script>
<template>
  <div>
    <div
      :class="
        cn(
          'p-9 w-ful flex flex-col border-2 bg-white border-[#F5F5F4] rounded-3xl shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]',
        )
      "
      :style="{
        backgroundColor: content.colors.secondary,
        borderColor: content.colors.accent,
      }"
    >
      <div
        class="size-24 flex items-center justify-center rounded-full p-2 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] mx-auto"
      >
        <svg
          v-if="result === 'none'"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="#009966"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28"
            stroke="#009966"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 18H18.02"
            stroke="#009966"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 18H30.02"
            stroke="#009966"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-if="result === 'mild'"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="#759900"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 30H32"
            stroke="#759900"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 18H18.02"
            stroke="#759900"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 18H30.02"
            stroke="#759900"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-if="result === 'moderate'"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="#E17100"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 30H32"
            stroke="#E17100"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 18H18.02"
            stroke="#E17100"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 18H30.02"
            stroke="#E17100"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-if="result === 'severe'"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="#FF6467"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 32C32 32 29 28 24 28C19 28 16 32 16 32"
            stroke="#FF6467"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 18H18.02"
            stroke="#FF6467"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 18H30.02"
            stroke="#FF6467"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-if="result === 'extreme'"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="#EC003F"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 32C32 32 29 28 24 28C19 28 16 32 16 32"
            stroke="#EC003F"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 18H18.02"
            stroke="#EC003F"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 18H30.02"
            stroke="#EC003F"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="mx-auto text-center mt-7">
        <h1 class="text-2xl font-bold">{{ content.title }}</h1>
        <p class="text-[#44403B] mt-1">{{ content.description }}</p>
      </div>
      <div
        class="mt-10 rounded-xl bg-white py-3 px-4 w-max mx-auto text-sm font-semibold"
        :style="{ color: content.colors.primary }"
      >
        ระดับความเครียด
      </div>
    </div>
    <div class="mt-4 *:w-full flex flex-col space-y-3">
      <Button v-if="result === 'extreme'" class="bg-[#EC003F]">
        <span class="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.58329 16.6666C8.17377 17.4825 10.0034 17.7035 11.7424 17.2898C13.4814 16.876 15.0154 15.8548 16.0681 14.4101C17.1208 12.9654 17.6228 11.1922 17.4838 9.41009C17.3447 7.62797 16.5738 5.9541 15.3098 4.69012C14.0458 3.42614 12.3719 2.65517 10.5898 2.51614C8.8077 2.37711 7.03452 2.87916 5.58981 3.93183C4.1451 4.9845 3.12387 6.51855 2.71014 8.25755C2.29642 9.99655 2.51741 11.8261 3.33329 13.4166L1.66663 18.3333L6.58329 16.6666Z"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        คุยกับผู้เชี่ยวชาญ
      </Button>
      <Button class="bg-black">อ่านบทความแนะนำ</Button>
      <Button class="bg-white border border-[#E7E5E4] text-[#57534D]"
        >กลับหน้าหลัก</Button
      >
    </div>
  </div>
</template>
