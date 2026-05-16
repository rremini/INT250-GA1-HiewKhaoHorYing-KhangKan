<script setup lang="ts">
import Button from "@/components/ui/Button.vue";

const emit = defineEmits<{ start: [] }>();
</script>

<template>
  <div class="flex flex-col space-y-6">
    <div
      class="p-6 w-ful flex flex-col border-[0.8px] bg-white border-[#F5F5F4] rounded-3xl shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]"
    >
      <div
        class="flex items-center justify-center size-20 p-2 rounded-full bg-[#ECFDF5] mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M33 18H29.28C28.6245 17.9986 27.9865 18.212 27.4637 18.6075C26.9409 19.0029 26.562 19.5588 26.385 20.19L22.86 32.73C22.8373 32.8079 22.7899 32.8763 22.725 32.925C22.6601 32.9737 22.5811 33 22.5 33C22.4189 33 22.3399 32.9737 22.275 32.925C22.2101 32.8763 22.1627 32.8079 22.14 32.73L13.86 3.27C13.8373 3.19211 13.7899 3.12368 13.725 3.075C13.6601 3.02632 13.5811 3 13.5 3C13.4189 3 13.3399 3.02632 13.275 3.075C13.2101 3.12368 13.1627 3.19211 13.14 3.27L9.615 15.81C9.4387 16.4387 9.06207 16.9928 8.5423 17.388C8.02252 17.7833 7.38798 17.9981 6.735 18H3"
            stroke="#009966"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="text-center self-center my-6">
        <h1 class="text-2xl font-bold">สำรวจใจตัวเอง</h1>
        <p class="text-[#79716B] mt-3 leading-7">
          แบบประเมินนี้อ้างอิงจากหลักจิตวิทยา ใช้เวลาทำเพียง 1-2 นาที
          เพื่อเช็คดูว่าช่วงนี้ใจเราเป็นยังไงบ้าง
        </p>
      </div>
      <div class="flex items-start p-4 px-5 md:p-5 md:px-6 w-full bg-[#F0F9FF] rounded-2xl">
        <div class="size-max flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_89_1015)">
              <path
                d="M16.6668 10.8333C16.6668 15 13.7502 17.0833 10.2835 18.2916C10.102 18.3531 9.90478 18.3502 9.72516 18.2833C6.25016 17.0833 3.3335 15 3.3335 10.8333V4.99997C3.3335 4.77895 3.42129 4.56699 3.57757 4.41071C3.73385 4.25443 3.94582 4.16663 4.16683 4.16663C5.8335 4.16663 7.91683 3.16663 9.36683 1.89997C9.54337 1.74913 9.76796 1.66626 10.0002 1.66626C10.2324 1.66626 10.457 1.74913 10.6335 1.89997C12.0918 3.17497 14.1668 4.16663 15.8335 4.16663C16.0545 4.16663 16.2665 4.25443 16.4228 4.41071C16.579 4.56699 16.6668 4.77895 16.6668 4.99997V10.8333Z"
                stroke="#0084D1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.99992L9.16667 11.6666L12.5 8.33325"
                stroke="#0084D1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_89_1015">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="ml-4">
          <h6 class="md:text-lg font-black text-[#00598A]">
            พื้นที่ปลอดภัยของคุณ
          </h6>
          <p class="text-xs md:text-sm text-[#57534D] mt-1">
            ข้อมูลการประเมินทั้งหมดจะไม่ถูกระบุตัวตนและถูกเก็บเป็นความลับ
            สบายใจได้เลย
          </p>
        </div>
      </div>
    </div>
    <Button variant="primary" @click="emit('start')">เริ่มทำแบบประเมิน</Button>
  </div>
</template>
