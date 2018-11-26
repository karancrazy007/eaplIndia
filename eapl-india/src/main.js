import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueTable from 'vuetable-2';

// Vue.use(VueTable);
Vue.config.productionTip = false
Vue.component('vue-table', VueTable)
require('./assets/scss/main.scss');

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
