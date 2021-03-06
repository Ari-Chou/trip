import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home/Home.vue";
import City from "../pages/City/City.vue";
import Detail from "../pages/Detail/Detail.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }
  ]
});
