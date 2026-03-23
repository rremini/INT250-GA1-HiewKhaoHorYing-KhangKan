<script setup lang="ts">
import { computed, ref } from "vue";
import AssessmentCoreQuestionIndicator from "./AssessmentCoreQuestionIndicator.vue";
import { questions } from "@/constants/questions";
import Button from "@/components/ui/Button.vue";

export type AssessmentResult =
  | "none"
  | "mild"
  | "moderate"
  | "severe"
  | "extreme";
type Question = (typeof questions)[number];

const emit = defineEmits<{ result: [AssessmentResult] }>();

const answers = ref(new Map<Question["id"], Question["choices"][number]>());
const answeredIds = computed(() => Array.from(answers.value.keys()));
const currentQuestion = ref<Question>(questions[0]);
const questionIndex = ref<number>(0);

const goTo = (index: number) => {
  questionIndex.value = index;
  const question = questions[index];
  if (question) currentQuestion.value = question;
};

const handleChoiceSelected = (
  id: Question["id"],
  selected: Question["choices"][number],
) => {
  answers.value.set(id, selected);
};

const next = () => {
  if (questionIndex.value >= questions.length - 1) return;
  questionIndex.value++;
  goTo(questionIndex.value);
};

const previous = () => {
  if (questionIndex.value === 0) return;
  questionIndex.value--;
  goTo(questionIndex.value);
};

const evaluation = () => {
  if (answeredIds.value.length === questions.length) {
    const totalScore = Array.from(answers.value.values()).reduce(
      (acc, cur) => acc + cur.value,
      0,
    );

    const levels: { min: number; key: AssessmentResult }[] = [
      { min: 20, key: "extreme" },
      { min: 15, key: "severe" },
      { min: 10, key: "moderate" },
      { min: 5, key: "mild" },
      { min: 0, key: "none" },
    ];

    const result = levels.find((level) => totalScore >= level.min).key;

    emit("result", result ?? "none");
  }
};

const canEvaluate = computed(
  () => answeredIds.value.length === questions.length,
);
</script>
<template>
  <div class="mb-6">
    <AssessmentCoreQuestionIndicator
      :total-question="questions.length"
      :questions="questions"
      :selected-ids="answeredIds"
      :question-index="questionIndex"
      @go-to="goTo"
    />
  </div>
  <div
    class="p-6 w-ful flex flex-col border-[0.8px] bg-white border-[#F5F5F4] rounded-3xl shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]"
  >
    <p class="text-2xl text-center font-bold max-w-xl mx-auto my-12">
      {{ currentQuestion.title }}
    </p>
    <div class="flex flex-col space-y-3">
      <label
        class="flex items-center py-4 px-6 border border-[#E7E5E4] rounded-2xl font-semibold cursor-pointer"
        v-for="choice in currentQuestion.choices"
        :key="`${currentQuestion.id}-${choice.id}`"
      >
        <input
          class="sr-only peer"
          type="radio"
          :name="`choice-${currentQuestion.id}`"
          :checked="answers.get(currentQuestion.id)?.id === choice.id"
          @click="handleChoiceSelected(currentQuestion.id, choice)"
        />
        <span>
          {{ choice.label }}
        </span>
        <span
          class="ml-auto mr-0 flex items-center justify-center size-5 rounded-full border border-[#D6D3D1] p-1 relative before:content-[''] before:size-full before:bg-slate-700 before:rounded-full before:hidden peer-checked:before:block"
        ></span>
      </label>
    </div>
    <div class="flex mt-6 gap-3 w-full max-w-lg mx-auto">
      <Button
        class="flex-1 bg-slate-200 text-black"
        :disabled="questionIndex === 0"
        @click="previous"
        >ย้อนกลับ</Button
      >
      <Button class="flex-2" @click="canEvaluate ? evaluation() : next()">
        {{ canEvaluate ? "ดูผลลัพธ์" : "ไปยังข้อต่อไป" }}
      </Button>
    </div>
  </div>
</template>
