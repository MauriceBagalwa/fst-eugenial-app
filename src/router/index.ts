import Enterprise from "@/components/app/interfaces/settings/enterprise/index.vue";
import Personel from "@/components/app/interfaces/settings/personel/index.vue";
import Service from "@/components/app/interfaces/settings/service/index.vue";
import Others from "@/components/app/interfaces/settings/Others.vue";
import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/components/auth/SignIn.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import DashBord from "@/views/Dashbord.vue";
import Services from "@/views/Services.vue";
import Settings from "@/views/Settings.vue";
import Caisse from "@/views/Caisse.vue";
import Rdv from "@/views/Rdv.vue";

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
      children: [
        {
          name: "dashbord",
          path: "/app/dashbord",
          component: DashBord,
        },
        {
          name: "services",
          path: "/app/services",
          component: Services,
        },
        {
          name: "rdv",
          path: "/app/rdv",
          component: Rdv,
        },
        {
          name: "caisse",
          path: "/app/caisse",
          component: Caisse,
        },
        {
          name: "settings",
          path: "/app/settings",
          component: Settings,
          children: [
            {
              name: "enterprise-profile",
              path: "/app/settings/enterprise-profile",
              component: Enterprise,
            },
            {
              name: "personel",
              path: "/app/settings/personel",
              component: Personel,
            },
            {
              name: "service",
              path: "/app/settings/service",
              component: Service,
            },
            {
              name: "others",
              path: "/app/settings/others",
              component: Others,
            },
          ],
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
