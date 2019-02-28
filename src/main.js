import Vue from 'vue'
import App from './App.vue'
import router from './assets/router'
import Scroll from './assets/js/jquery.slimscroll'
import 'vue-tel-input/dist/vue-tel-input.css';
import VueTelInput from 'vue-tel-input';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);
Vue.use(VueTelInput);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use(router)
Vue.use(Scroll)
