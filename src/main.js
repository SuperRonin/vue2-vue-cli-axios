// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import home from './pages/home'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it. 
import vueEventCalendar from 'vue-event-calendar'
import VueAwesomeSwiper from 'vue-awesome-swiper'




Vue.use(vueEventCalendar, {locale: 'en', color: '#1FCC9E'}) 
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.prototype.replaceDate = function(data){
	data = data.split('/');
	console.log(data)
	let newDate = data[0] + '-' + data[1] + '-' + data[2]
	return newDate
}
Vue.prototype.initweek = function(data){
	data = data.indexOf('/') !== -1 ? data.split('/') : data.split('-');;
	let sdate =new Date(data[0],parseInt(data[1]-1),data[2]);   
	let curday = sdate.getDay();
	let weeks = ['周日','周一','周二','周三','周四','周五','周六'];
	return weeks[curday]
}