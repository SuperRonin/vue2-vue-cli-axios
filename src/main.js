// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import home from './pages/home'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.use(vueEventCalendar, {locale: 'en', color: '#1FCC9E'})
Vue.use(Vuex)





Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store({
    state:{
        showback: false,
        msg: '',
        showLoading: false
    }
  }),
  template: '<App/>',
  components: { App }
})


