<script setup lang="ts">
import { cn } from "@/utils/merge";
import { computed } from "vue";

type Variant = "primary";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    class?: string;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    disabled: false,
  },
);

const emit = defineEmits<{ (e: "click", events: MouseEvent): void }>();

const varaintStyleClassName: Record<Variant, string> = {
  primary: "text-white bg-[#096]",
};

const buttonClass = computed(() =>
  cn(
    "cursor-pointer flex items-center justify-center py-4 text-lg font-semibold rounded-2xl",
    varaintStyleClassName[props.variant],
    props.disabled && "opacity-50 cursor-not-allowed",
    props.class,
  ),
);

const handleClick = (e: MouseEvent) => {
  if (props.disabled) return;
  emit("click", e);
};
</script>

<template>
  <button @click="handleClick" :class="buttonClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>
