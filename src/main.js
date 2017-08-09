// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import home from './pages/home'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it. 
import vueEventCalendar from 'vue-event-calendar'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.use(vueEventCalendar, {locale: 'en', color: '#1FCC9E'}) 
Vue.use(Vuex) 

const  vuex_store = new Vuex.Store({
    state:{
        showback: false
    }
})



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuex_store,
  template: '<App/>',
  components: { App }
})

axios.defaults.baseURL = 'http://mraw.bus365.cn';
Vue.prototype.$axios = axios
Vue.prototype.replaceDate = function(data){
	if(data.indexOf('-') == -1){
		data = data.split('/');
	}else{
		data = data.split('-');
	}
	
	let newDate = data[0] + '-' + (+data[1] < 10 ?　'0' + (+data[1]) : data[1]) + '-' + (+data[2] < 10 ? '0' + (+data[2]) : data[2]);
	return newDate
}
Vue.prototype.initweek = function(data){
	data = data.indexOf('/') !== -1 ? data.split('/') : data.split('-');;
	let sdate =new Date(data[0],parseInt(data[1]-1),data[2]);   
	let curday = sdate.getDay();
	let weeks = ['周日','周一','周二','周三','周四','周五','周六'];
	return weeks[curday]
}