<template>
	<div>
		<div class="choosedate">
			<ul class="time">
				<li id="before_day_noclick" @click="ByTransDate(choosedate,1,'-')">前一天</li>
				<li id="nyr" @click="showCalendarFun"><span id="ylval">{{choosedate}}</span>&nbsp;<span id="week">({{week}})</span><img src="../assets/time.png"></li>
				<li id="after_day" @click="ByTransDate(choosedate,1,'+')">后一天</li>
			</ul>
		</div>
		<!-- 日历 -->
		<vue-event-calendar v-show="showCalendar" :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
		<Shade v-show="showCalendar" @ishide="showCalendarFun"></Shade>
	</div>
</template>



<script>
	import Shade from './shade'
	export default {
		name: 'choosedate',
		data (){
			return {
				showCalendar: false,
				demoEvents: [],
				choosedate: '' || this.departdate,
				week: ''
			}
		},
		created () {
			this.week = this.initweek(this.departdate);
		},
		props: ['departdate'],
		components: { Shade },
		methods: {
			showCalendarFun (val) {
				console.log(typeof val)
				if(typeof val == 'boolean'){
					this.showCalendar = val
				}else{
					this.showCalendar = true
				} 
			},
			handleDayChanged (data) {
		    	this.showCalendar = false;
		    	this.choosedate = this.replaceDate(data.date);
		    	this.week = this.initweek(this.choosedate);
		    	this.$emit('choosedateFun',data.date);
		    },
		    handleMonthChanged (data) {
		     
		    },
		    initweek : function(data){
				data = data.indexOf('/') !== -1 ? data.split('/') : data.split('-');;
				let sdate =new Date(data[0],parseInt(data[1]-1),data[2]);   
				let curday = sdate.getDay();
				let weeks = ['周日','周一','周二','周三','周四','周五','周六'];
				return weeks[curday]
			},
		    /*
		    *前一天后一天日期获取
			*日期：dateParameter
			*前num天/后num天 ： num
			*前为+/后为-： way
		    */
		    ByTransDate(dateParameter, num, way){
		    	let translateDate = "";
					// dateString = "",
					// monthString = "";
				
				translateDate = dateParameter.replace("-", "/").replace("-", "/");

				//  日期获取
				let newDate = new Date(translateDate);
				newDate = newDate.valueOf();
				if(way == "+") {
					newDate = newDate + num * 24 * 60 * 60 * 1000;
				} else if(way == "-")(
					newDate = newDate - num * 24 * 60 * 60 * 1000
				);
				newDate = new Date(newDate);
				let monthString;
				//如果月份长度少于2，则前加 0 补位   
				if((newDate.getMonth() + 1).toString().length == 1) {
					monthString = 0 + "" + (newDate.getMonth() + 1).toString();
				} else {
					monthString = (newDate.getMonth() + 1).toString();
				}
				let dayString;
				//如果天数长度少于2，则前加 0 补位   
				if(newDate.getDate().toString().length == 1) {
					dayString = 0 + "" + newDate.getDate().toString();
				} else {
					dayString = newDate.getDate().toString();
				}
				let dateString;
				dateString = newDate.getFullYear() + "-" + monthString + "-" + dayString;
				this.choosedate = dateString;
				this.week = this.initweek(dateString);
				this.$emit('choosedateFun',dateString);
		    }
		}
	}
</script>


<style>
	@import '../assets/reset.css';
	.time {
	    width: 100%;
	    height: 3rem;
	    clear: both;
	    border-bottom: 1px solid #e2e2e2;
	    background: #fcfcfc;
	    margin-top: 3rem;
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 99;
	}
	.time li {
	    width: 25%;
	    height: 3rem;
	    float: left;
	    text-align: center;
	    line-height: 3rem;
	    color: #1FCC9E;
	    font-size: 1rem;
	    font-weight: bold;
	}
	#nyr {
	    width: 49%;
	    border-left: 1px solid #e2e2e2;
	    border-right: 1px solid #e2e2e2;
	    font-size: 1rem;
	    color: #5b5b5b;
	    font-family: arial;
	}
	#nyr img {
	    width: 1rem;
	}
</style>