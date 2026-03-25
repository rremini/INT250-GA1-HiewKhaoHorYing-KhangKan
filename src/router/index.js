import PageAssessment from "@/pages/PageAssessment.vue";
import PageConsult from "@/pages/PageConsult.vue"
import PageHome from "@/pages/PageHome.vue";
import BlogDetail from "@/pages/PageBlogDetail.vue";
import BlogList from "@/pages/PageBlogList.vue";
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
    path: "/blogs",
    name: "blogs",
    component: BlogList
  },
  {
    path: "/blogs/:id",
    name: "blog-detail",
    component: BlogDetail
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
