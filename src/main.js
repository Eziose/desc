import Vue from 'vue'
import App from './App.vue'
import router from './assets/router'
import Scroll from './assets/js/jquery.slimscroll'



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use(router)
Vue.use(Scroll)
