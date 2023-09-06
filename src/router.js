import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path : "/",
        alias : "/index",
        name : "index",
        component : () => import('./views/Brand.vue')
    },
    {
        path : "/brand",
        name : "brand",
        component : () => import('./views/Brand.vue')
    },
    {
        path : "/brand/:id",
        name : "brandDetail",
        component : () => import('./views/BrandDetail.vue')
    },
    {
        path : "/scooter",
        name : "scooter",
        component : () => import('./views/Scooter.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;