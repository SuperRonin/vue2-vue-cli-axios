<template>
	<div>
		<div class="main" id="choosestadion">
			<div class="cityDes">
				<div class="cityStartDes">出发城市</div>
				<div class="cityEndDes">到达城市</div>
			</div>
			<div class="citySelect">
				<div id="starting">
					<span class="city textmain" id="departA" @click="departnameFun" cid="110000000000" findname="北京市" netname="cra.bus365.cn" deptarttype="1" style="color: rgb(50, 50, 50);">{{departname}}</span>
				</div>
				<div class="divImgCenter" id="convert"><img src="../assets/exchange_pic.png" class="convertImg"> </div>
				<div id="destination" class="destination">
					<span class="city flot_right textmain textmainright" @click="reachnameFun" id="attachB" cid="" findname="北京" netname="cra.bus365.cn" deptarttype="2" style="color: rgb(50, 50, 50);">{{reachname}}</span>
				</div>
			</div>
			<div class="line"></div>
			<div class="dateSelect" id="dateclick" @click="showCalendar = true">
				<div class="dateTime" id="calendar" data-val="2017-07-18">{{choosedate}}</div>
				<div class="dateWeek"><img src="../assets/calendar_arrow.png" class="calendarIcon"> </div>

				<div class="dateWeek">
					<div class="dateWeek" id="week">({{week}})</div>
					<div class="dateWeek" id="lunar">农历六月二十五</div>
				</div>
			</div>
		</div>
		
		<div class="div_btn">
			<div class="find" @click="findschle">查&nbsp;&nbsp;&nbsp;询</div>
		</div>
		<!-- 日历 -->
		<vue-event-calendar v-show="showCalendar" :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
		<!-- 遮罩层 -->
		<Shade v-show="showCalendar" @ishide="ishide"></Shade>	
	</div>
</template>


<script>
	import Shade from '../components/shade'
	let today = new Date();
	export default {
		name: 'choosestadion',
		props: ['departname','departid','reachname','reachid','day-changed'],
		data (){
			return {
					choosedate: '',
					demoEvents: [],
					week: '',
					particular: '',
					showCalendar: false
			    }
		},
		created (){
			// 初始化日期
			let todayYear = new Date().getFullYear();
			let todayMonth = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
			let todayDay = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
			this.choosedate = todayMonth + '月' + todayDay + '日';
			this.week = this.initweek(todayYear + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate());
			console.log((new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1))
			this.particular = todayYear + '-' + todayMonth + '-' + todayDay;
		},
		components: {
			Shade
		},
		methods: {
			ishide (data){
				this.showCalendar = data;
			},
			departnameFun (){
				if(this.reachname != "请选择"){
					this.$router.push('/chooseplace'+ "?reachname=" + this.reachname + "&reachid=" + this.reachid)
				}else{
					this.$router.push('/chooseplace')
				}
			},
			reachnameFun (){
				if(this.departname != "请选择"){
					this.$router.push('/chooseplace?reach=true' + "&departname=" + this.departname + "&departid=" + this.departid)	
				}else{
					this.$router.push('/chooseplace?reach=true')
				}
			},
			handleDayChanged (data) {
		      this.formatDate(data)
		      this.showCalendar = !this.showCalendar;
		    },
		    handleMonthChanged (data) {
		     
		    },
			findschle () {
				this.$router.push('/shiftlists'+ "?departname=" + this.departname + "&departid=" + this.departid + "&reachname=" + this.reachname + "&reachid=" + this.reachid + "&departdate=" + this.particular)
			},
			formatDate (data){
				let curdate = data.date;
				this.week = this.initweek(curdate);
				curdate = curdate.split('/');	
				this.particular = curdate[0] + '-' + (+curdate[1] < 10 ? '0' + JSON.parse(curdate[1]) : curdate[1]) + '-' + (+curdate[2] < 10 ? '0' + JSON.parse(curdate[2]) : curdate[2]);
				let month = +curdate[1] < 10 ? '0' + (+curdate[1]) + '月' : curdate[1] + '月';	
				let day = +curdate[2] < 10 ? '0' + (+curdate[2]) + '日' : curdate[2] + '日';	
				this.choosedate = month + day;
			},
			initweek (data){
				data = data.split('/');
				let sdate =new Date(data[0],parseInt(data[1]-1),data[2]);   
				let curday = sdate.getDay();
				let weeks = ['周日','周一','周二','周三','周四','周五','周六'];
				return weeks[curday]
			}
		}
	}
</script>


<style>
	 @import '../assets/reset.css';
	/*main*/
	.main{
		padding: 0 1rem;
	    background: #FFFFFF;
	    margin-top: 2rem;
	}
	.cityDes {
		width: 100%;
	    color: #9d9d9d;
	    font-size: 1.4rem;
	}
	.cityStartDes {
	    float: left;
	}
	.cityEndDes {
	    float: right;
	    margin-right: 0px;
	}
	.cityDes:after {
	    content: ".";
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	}
	.citySelect {
	    width: 100%;
	    text-align: center;
	    margin-bottom: 0.5rem;
	}
	.citySelect div {
	    width: 33%;
	    min-width: 6rem;
	    display: table-cell;
	    vertical-align: middle;
	    float: left;
	}
	.textmain {
	    word-wrap: break-word;
	    word-break: break-all;
	    display: -webkit-flex;
	    display: flex;
	}
	.destination{
		float: right!important;
		text-align: center;
	}
	.city {
	    font-size: 1.4rem;
	    font-weight: bold;
	    color: #989898;
	    display: inline-block;
	    width: 90%;
	    text-overflow: ellipsis;
	}
	.divImgCenter {
	    text-align: center;
	    width: 20%!important;
	}
	.convertImg {
    	width: 3rem;
    }
	.textmainright {
	    -webkit-align-items: flex-end;
	    align-items: flex-end;
	    -webkit-justify-content: flex-end;
	}
	.textmain {
	    word-wrap: break-word;
	    word-break: break-all;
	    display: -webkit-flex;
	    display: flex;
	    margin-top: 1rem;
	}
	
	.citySelect:after {
	    content: ".";
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	}
	.line {
	    width: 100%;
	    height: 1px;
	    background-color: #E2E2E2;
	}
	.dateSelect {
		width: 100%;
	    font-size: 1rem;
	    margin-top: 1rem;
	    height: 1rem;
	}
	.dateTime {
	    float: left;
	}
	.dateWeek {
	    float: right;
	}
	.calendarIcon {
	    width: 0.5rem;
	    margin-right: 0.2rem;
	}
	#week {
	    margin-right: 0.5rem;
	    color: #1FCC9E;
	}	
	.dateWeek {
	    float: right;
	}
	.div_btn {
		width: 100%;
	    background-color: #fff;
	    margin-top:2rem;
	}
	.find {
	    width: 90%;
	    height: 2.5rem;
	    background: #1FCC9E;
	    text-align: center;
	    line-height: 2.5rem;
	    margin: 1rem 0 0 5%;
	    color: #FFFFFF;
	    font-size: 1.4rem;
	    border-radius: 8px;
	}
</style>