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
  {
    path:"/seven",
    name:"seven",
    component:()=>import("../views/Seven.vue")
  },
  {
    path:"/share",
    name:"share",
    component:()=>import("../views/SevenShare.vue")
  },
  {
    path:"/nine",
    name:"nine",
    component:()=>import("../views/Nine.vue")
  },
  {
    path:"/list",
    name:"list",
    component:()=>import("../views/NineList.vue")
  },
  {
    path:"/ten",
    name:"ten",
    component:()=>import("../views/Ten.vue")
  },

];

const router = new VueRouter({
  routes,
});

export default router;
