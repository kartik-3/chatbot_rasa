import Vue from "vue";
import VueRouter from "vue-router";
import FaqChatBox from "../components/FaqChatBox.vue";
import ReflectChatBox from "../components/ReflectChatBox.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "FaqChatBox",
    },
  },
  {
    path: "/faq",
    name: "FaqChatBox",
    component: FaqChatBox,
  },
  {
    path: "/reflect",
    name: "ReflectChatBox",
    component: ReflectChatBox,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
