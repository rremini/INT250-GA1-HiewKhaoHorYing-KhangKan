<script setup lang="ts">
import { cn } from "@/utils/merge";
import { computed } from "vue";

type Variant = "primary" | "secondary" | "outline" | "destructive" | "ghost";

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
  primary: "text-white bg-primary hover:bg-primary/90 shadow-sm",
  secondary: "text-secondary-foreground bg-secondary hover:bg-secondary/80",
  outline: "text-foreground bg-transparent border border-border hover:bg-accent hover:text-accent-foreground",
  destructive: "text-white bg-destructive hover:bg-destructive/90 shadow-sm",
  ghost: "text-foreground bg-transparent hover:bg-accent hover:text-accent-foreground",
};

const buttonClass = computed(() =>
  cn(
    "cursor-pointer flex items-center justify-center py-4 text-lg font-semibold rounded-2xl transition-all duration-200 active:scale-95",
    varaintStyleClassName[props.variant],
    props.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
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
