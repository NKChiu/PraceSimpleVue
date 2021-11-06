import Vue from 'vue'
import App from './App.vue'

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router.js';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
