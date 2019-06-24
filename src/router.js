import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Category.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Cart.vue")
    },
    {
      path: "/member",
      name: "member",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Member.vue")
    }
  ]
});
