import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

import AButton from "@/components/AButton";
import BButton from "@/components/BButton";

Vue.component('a-button', AButton);
Vue.component('b-button', BButton);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
