import { createRouter, createWebHistory } from 'vue-router'
import BlogList from "./blog/BlogList.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
      path: "/blogs",
      name: "blogs",
      component: BlogList
    },
    {
      path: "/blogs/:id",
      name: "blog-detail",
      // component: BlogDetail
    }
  ]

})

export default router
