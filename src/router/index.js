import PageAssessment from "@/pages/PageAssessment.vue";
import PageConsult from "@/pages/PageConsult.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/assessment",
    component: PageAssessment,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
