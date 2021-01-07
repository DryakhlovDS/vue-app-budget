import Vue from 'vue';
import App from './App.vue';

import './plugins/elements';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
