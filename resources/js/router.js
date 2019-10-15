import Vue from "vue";
import Router from "vue-router";
import Home from "@/js/views/Home";
import Areas from "@/js/views/Areas";
import Equipos from "@/js/views/Equipos";
import Desarrollos from "@/js/views/Desarrollos";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/areas",
            component: Areas
        },
        {
            path: "/equipos",
            component: Equipos
        },
        {
            path: "/desarrollos",
            component: Desarrollos
        }
    ]
});
