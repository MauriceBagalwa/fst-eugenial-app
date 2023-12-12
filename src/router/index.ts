import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/auth/SignIn.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

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
          meta:{
            layout:'auth-layout'
          }
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`;
//   next();
// });

export default router;
