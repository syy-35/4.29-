import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"home",
    component:()=>import("../views/Home.vue")
  },
  {
    path:"/two",
    name:"two",
    component:()=>import("../views/Two.vue")
  },
  {
    path:"/three",
    name:"three",
    component:()=>import("../views/Three.vue")
  },
  {
    path:"/four",
    name:"four",
    component:()=>import("../views/Four.vue")
  },
  {
    path:"/six",
    name:"six",
    component:()=>import("../views/Six.vue")
  },

];

const router = new VueRouter({
  routes,
});

export default router;
