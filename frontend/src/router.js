import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});

export default router;