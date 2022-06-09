import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        alias: "/products",
        name: "ListProduct",
        component: () => import("./components/ListProduct")
    },
    {
        path: "/create",
        alias: "/products",
        name: "CreateProduct",
        component: () => import("./components/CreateProduct")
    },
    {
        path: "/edit",
        alias: "/products",
        name: "EditProduct",
        component: () => import("./components/EditProduct")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
