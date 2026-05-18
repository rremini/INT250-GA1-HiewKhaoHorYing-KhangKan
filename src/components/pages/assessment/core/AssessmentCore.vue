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
  if (canEvaluate.value) {
    evaluation();
    return;
  }

  function getFirstUnSelectedQuestionIndex(startIdx = 0) {
    const index = questions.findIndex((q, idx) => {
      return idx >= startIdx && !answers.value.has(q.id);
    });
    return index;
  }

  if (questionIndex.value >= questions.length - 1) {
    const firstUnanswered = getFirstUnSelectedQuestionIndex(0);

    if (firstUnanswered !== -1) {
      questionIndex.value = firstUnanswered;
      goTo(firstUnanswered);
      return;
    }
    
    return;
  }

  questionIndex.value++;

  const nextUnanswered = getFirstUnSelectedQuestionIndex();

  if (nextUnanswered === -1) {
    questionIndex.value = nextUnanswered;
  }

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

    const result = levels.find((level) => totalScore >= level.min)!.key;

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
    class="p-6 w-ful flex flex-col border-[0.8px] bg-card border-border rounded-3xl shadow-sm transition-colors duration-300"
  >
    <p class="text-2xl text-center font-bold max-w-xl mx-auto my-12 text-foreground">
      {{ currentQuestion.title }}
    </p>
    <div class="flex flex-col space-y-3">
      <label
        class="flex items-center py-4 px-6 border border-border rounded-2xl font-semibold cursor-pointer transition-all duration-200 hover:bg-accent has-checked:border-primary has-checked:bg-primary/10 text-foreground"
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
          class="ml-auto mr-0 flex items-center justify-center size-5 rounded-full border-2 border-input p-1 peer-checked:border-primary transition-colors"
        >
          <div class="size-2 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
        </span>
      </label>
    </div>
    <div class="flex mt-6 gap-3 w-full max-w-lg mx-auto">
      <Button
        variant="secondary"
        class="flex-1"
        :disabled="questionIndex === 0"
        @click="previous"
        >ย้อนกลับ</Button
      >
      <Button class="flex-2" @click="next()">
        {{ canEvaluate ? "ดูผลลัพธ์" : "ไปยังข้อต่อไป" }}
      </Button>
    </div>
  </div>
</template>
