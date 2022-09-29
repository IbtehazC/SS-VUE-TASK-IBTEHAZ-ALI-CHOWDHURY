import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StaffView from "@/views/StaffView.vue";
import FormView from "@/views/FormView.vue";
import DashboardVue from "@/views/DashboardVue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/staff",
    name: "staff",
    component: DashboardVue,
  },
  {
    path: "/create/:type",
    name: "createForm",
    component: FormView,
    props: true,
  },
  {
    path: "/staff/:id",
    name: "staffDetails",
    component: StaffView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
