<script setup lang="ts">
import { ref, watch } from "vue";
import AssessmentIntro from "./AssessmentIntro.vue";
import AssessmentCore, {
  AssessmentResult as Result,
} from "./core/AssessmentCore.vue";
import AssessmentResult from "./AssessmentResult.vue";

type Tab = "intro" | "core" | "result";

const tab = ref<Tab>("intro");
const result = ref<Result | null>(null);

const goTo = (destination: Tab) => (tab.value = destination);
const showResult = (evaluationResult: Result) => {
    console.log(evaluationResult)
  result.value = evaluationResult;
  tab.value = "result";
};
</script>

<template>
  <div class="py-8 px-5">
    <div class="flex items-center space-x-2 text-[#A6A09B]">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_89_1002)">
            <path
              d="M16.5 9H14.64C14.3122 8.9993 13.9932 9.10598 13.7318 9.30373C13.4704 9.50147 13.281 9.7794 13.1925 10.095L11.43 16.365C11.4186 16.4039 11.395 16.4382 11.3625 16.4625C11.33 16.4868 11.2906 16.5 11.25 16.5C11.2094 16.5 11.17 16.4868 11.1375 16.4625C11.105 16.4382 11.0814 16.4039 11.07 16.365L6.93 1.635C6.91864 1.59605 6.89496 1.56184 6.8625 1.5375C6.83004 1.51316 6.79057 1.5 6.75 1.5C6.70943 1.5 6.66996 1.51316 6.6375 1.5375C6.60504 1.56184 6.58136 1.59605 6.57 1.635L4.8075 7.905C4.71935 8.21937 4.53104 8.49639 4.27115 8.69401C4.01126 8.89163 3.69399 8.99907 3.3675 9H1.5"
              stroke="#A6A09B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_89_1002">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <p class="font-bold">แบบประเมินสุขภาพจิต</p>
    </div>
    <div class="max-w-6xl mx-auto py-8 px-5">
      <AssessmentIntro v-if="tab === 'intro'" @start="goTo('core')" />
      <AssessmentCore v-if="tab === 'core'" @result="showResult" />
      <AssessmentResult v-if="tab === 'result'" :result="result" />
    </div>
  </div>
</template>
