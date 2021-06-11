import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/main.scss';
import vuetify from './plugins/vuetify'
import axios from 'axios';

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
