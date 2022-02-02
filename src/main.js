import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCarousel from 'vue-carousel';
import VueSimpleAccordion from 'vue-simple-accordion';
import VueMeta from 'vue-meta'

import 'vue-simple-accordion/dist/vue-simple-accordion.css';

Vue.config.productionTip = false;

Vue.use(VueCarousel);
Vue.use(VueSimpleAccordion);
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
