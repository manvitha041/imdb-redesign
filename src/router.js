import Vue from "vue";
import Router from "vue-router";
import Discover from "./views/Discover.vue";
import Movie from "./views/Movie.vue";


Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/",
      name: "Discover",
      component: Discover
    },
    {
      path: "/movie/:id",
      name: "Movie",
      component: Movie
    },
  ]
});
