import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCarousel from 'vue-carousel';
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';


Vue.config.productionTip = false;

Vue.use(VueCarousel);
Vue.use(VueSimpleAccordion);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
