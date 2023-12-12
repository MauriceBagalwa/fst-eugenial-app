import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/auth/SignIn.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AppLayout from "@/layouts/AppLayout.vue";

import Index from "@/views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "auth",
      path: "/",
      component: AuthLayout,
      meta: {
        title: "sigin",
      },
      children: [
        {
          name: "signin",
          path: "/signin",
          component: Login,
          meta: {
            layout: "auth-layout",
          },
        },
      ],
    },
    {
      name: "app",
      path: "/app",
      component: AppLayout,
      meta: {
        layout: "app-layout",
      },
      children: [],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`;
//   next();
// });

export default router;
