
require('./bootstrap');

window.Vue = require('vue').default;
import store from './store'
import VueToastr from "vue-toastr";

import VueCompositionAPI from '@vue/composition-api'
import { computed, watch } from '@vue/composition-api'
import { define } from '@/define'
import loader from "vue-ui-preloader";

Vue.use(loader);
Vue.use(VueCompositionAPI)
Vue.use(VueToastr, define.toastrOptions);

Vue.config.productionTip = false;

Vue.component('login-component', require('@page/auth/login/LoginComponent.vue').default);
Vue.component('loading-component', require('@other/loading/LoadingComponent.vue').default);

window.addEventListener('load', function () {
    const app = new Vue({
        el: '#app',
        store: store,
        components: {
            "loading-component": require('@other/loading/LoadingComponent.vue').default,
        },
        watch : {
            toastAlert(t){
                if(t.type && t.type == define.statusSuccess){
                    this.$toastr.s(t.message, t.title);
                }else if(t.type && t.type == define.statusError){
                    this.$toastr.e(t.message, t.title);
                }else {
                    return
                }
            }
        },
        setup() {
            const toastAlert = computed(() => store.state.toastAlert)
            return {
                toastAlert
            }
        }
    });
})

