require("./bootstrap");

import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import router from "@/js/router";
import App from "@/js/views/App";

Vue.use(Vuetify);
Vue.use(Vuex);

const app = new Vue({
    el: "#app",
    router: router,
    vuetify: new Vuetify(),
    render: h => h(App)
});
