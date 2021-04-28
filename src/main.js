import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/global.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    store.commit('initialiseStore');
  },
  render: (h) => h(App),
}).$mount('#app');
