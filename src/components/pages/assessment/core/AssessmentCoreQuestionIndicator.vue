<script setup lang="ts">
import { ref } from "vue";
import { questions } from "@/constants/questions";

type Props = {
  questionIndex?: number;
  selectedIds?: number[];
  totalQuestion: number;
  questions: typeof questions;
};

const props = withDefaults(defineProps<Props>(), { questionIndex: 0 });
const emit = defineEmits<{ (e: "goTo", questionIndex: number) }>();

const handleClick = (index: number) => {
  if (props.questionIndex === index) return;
  emit("goTo", index);
};
</script>
<template>
  <div class="flex flex-wrap gap-4 items-center justify-between">
    <span class="font-semibold text-muted-foreground"
      >คำถามที่ {{ questionIndex + 1 }} จาก {{ totalQuestion }}</span
    >
    <div class="flex items-center space-x-3 relative md:max-w-82 w-full min-w-0">
      <button
        v-for="(item, index) in questions"
        :key="item.id"
        :data-active="selectedIds.some((id) => id === item.id)"
        @click="handleClick(index)"
        class="w-full p-1 h-1.5 rounded-full bg-muted data-[active=true]:bg-primary cursor-pointer transition-colors duration-200"
      ></button>
    </div>
  </div>
</template>
