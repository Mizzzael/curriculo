import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { token, username } from "../.env.json";
import { data as certification } from "./assets/js/certifications.json";

// Importando arquivos de css
import "./assets/css/tailwind.compiled.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;

Vue.mixin({
    data() {
        return {
            username,
            token,
            certification
        };
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
