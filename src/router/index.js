import { createWebHistory, createRouter } from "vue-router";
import Flowers_shop from "../components/Flowers_shop.vue";
import New_products from "../components/New_products.vue";
import Bestsellers from "../components/Bestsellers.vue";
import Gifts from "../components/Gifts.vue";

const routes = [
  { 
    path: "/",
    name: "Flowers_shop",
    component: Flowers_shop,
  },
  {
    path: "/New_products",
    name: "New_products",
    component: New_products,
  },
  {
    path: "/Bestsellers",
    name: "Bestsellers",
    component: Bestsellers,
  },
  {
    path: "/Gifts",
    name: "Gifts",
    component: Gifts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;