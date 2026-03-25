import PageAssessment from "@/pages/PageAssessment.vue";
import PageConsult from "@/pages/PageConsult.vue"
import PageDiary from "@/pages/PageDiary.vue";
import PageHome from "@/pages/PageHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/assessment",
    component: PageAssessment,
  },
  {
    path: "/consult",
    component: PageConsult
  },
  {
    path: "",
    component: PageHome
  },
  {
    path: "/diary",
    component: PageDiary
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
