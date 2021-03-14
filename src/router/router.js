import Vue from 'vue';
import VueRouter from "vue-router";

import vCatalog from "@/components/vCatalog";
import vCart from "@/components/vCart";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: vCatalog
    },
    {
      path: '/cart',
      name: 'Cart',
      component: vCart,
      props: true
    }
  ],
  mode: "history"
})

export default router;
