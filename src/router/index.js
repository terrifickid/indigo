import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/why",
    name: "why",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "why" */ "../views/WhyIndigoView.vue");
    },
  },
  {
    path: "/clinical-services",
    name: "Clinical Services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "clinical-services" */ "../views/ClinicalServicesView.vue"
      );
    },
  },
  {
    path: "/meet-our-team",
    name: "Meet Our Team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "meet-our-team" */ "../views/MeetOurTeamView.vue"
      );
    },
  },
  {
    path: "/locations",
    name: "Locations",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "meet-our-team" */ "../views/LocationsView.vue"
      );
    },
  },
  {
    path: "/pricing-help",
    name: "Pricing & Help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "pricing-help" */ "../views/PricingHelpView.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
