import Vue from 'vue'
import App from './App.vue'
import router from './router.js' 
import axios from 'axios'
import './assets/scss/style.scss';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
