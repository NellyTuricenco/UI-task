import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Main from "../views/Main.vue";
import NotFound from "../views/NotFound.vue";
import "../assets/styles/index.scss";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
