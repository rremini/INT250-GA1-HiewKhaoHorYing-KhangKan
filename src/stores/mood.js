import { defineStore } from "pinia";

export const useMoodStore = defineStore("mood", {
  state: () => ({ mood: "none" }),
  actions: {
    setMood: (mood) => {
      this.mood = mood;
    },
  },
});
