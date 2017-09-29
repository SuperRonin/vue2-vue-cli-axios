<template>
	<div class="buslist">
		<Tit></Tit>
		<Beforeorafterday @choosedateFun="choosedateFun" :departdate="departdate"></Beforeorafterday>
		<Nodata v-if="showNodata"></Nodata>
		<Loading v-if="showLoading"></Loading>
		<div class="buslist" id="shiftlists" v-if="!showNodata">
			<ul class="sl_main" id="shiftul">
				<li class="sl_main_li" v-for="(item,index) in shiftlists" :data-ins="index">
					<ul class="sl_m">
						<li>
							<p></p>
							<div class="cf_tj">{{item.departtime.substring(0, 5)}}</div>
						</li>
						<li>
							<div class="place cf"><span class="icon blue"></span>{{item.busshortname}}</div>
							<div class="place md"><span  class="icon green"></span>{{item.stationname}}</div>
						</li>
						<li>
							<div class="price"><span>￥</span>56</div>
							<div class="yp">余票{{item.residualnumber}}</div>
						</li>
						<li class="gotobuy">
							<div id="buyticket" @click="nowticket">购票</div>
						</li>
					</ul>
					<div class="tjz" @click="showWaystadionFun(index)">
						<div class="text_tjz">点击查看途经站信息</div>
						<div class="imgd"><img src="../assets/tjz.png"/></div>
					</div>
					<div class="viastation" v-show="showWaystadionIndex == index ? showWaystadion : '' ">
						<div class="jkl"><span>班次:{{item.schedulecode}}</span><span class="sdf">状态:{{item.iscansellval}}</span></div>
						<div><span>里程:{{item.rundistance}}</span><span class="sdf">车型/座型：--/普通座</span></div>
						<div>途经站:<span v-for="item in waystadionlist"><span>{{item.stationname + '　'}}</span></span></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $http from '../http/http';
	import utils from '../util/util';
	import Tit from '../components/title';
	import Beforeorafterday from '../components/before_or_afterday';
	import Nodata from '../components/nodata';
	import Loading from '../components/loading';
	export default {
		name: 'shiftlists',
		data () {
			return {
				query: '',
				showWaystadion: false,
				showWaystadionIndex: '',
				showNodata: false,
				showLoading: false,
				shiftlists: '',
				schedulecodes: [],
			    departid: '',
			    waystadionlist: [],
			    departdate: ''
			}
		},
		updated () {
			const changedate = document.getElementById("ylval");
			// console.log(changedate.innerHTML + '==========')
		},
		created () {
			window._this = this;
			this.$store.state.showback = true
			this.query = this.$route.query; //地址栏参数
			this.departdate= this.query.departdate;
			this.shiftlistsAjax();
		},
		components: { Tit,Beforeorafterday,Nodata,Loading },
		methods: {
			shiftlistsAjax: function(){
				this.showLoading = true;
				$http.get('/schedulesearch0',{
					params: {
						departid: this.query.departid,
						departname: this.query.departname,
						departtype: '2',
						destination: this.query.reachname,
						destinationtype: '2',
						departdate: this.departdate,
						showType: '2'
					}
				})
				.then(function (response) {
				    if(response && response.data.schedules.length !== 0){
				    	_this.showNodata = false;
				    	// 班次列表和当前日期下所有班次的departid
				    	_this.shiftlists = response.data.schedules;
				    	_this.departid = response.data.departid;
				    	// 存储所有班次的schedulecode
				    	for(let i = 0;i<_this.shiftlists.length;i++){
				    		_this.schedulecodes.push(_this.shiftlists[i]['schedulecode'])
				    	}
				    	_this.showLoading = false;
				    }else{
				    	_this.showNodata = true;
				    	_this.showLoading = false;
				    }
				  })
				.catch(function (error) {
				    _this.showNodata = true;
				    _this.showLoading = false;
				})
			},
			showWaystadionFun: function(index){
				this.showWaystadion = !this.showWaystadion;
				this.showWaystadionIndex = index;
				this.WaystadionAjax(_this.schedulecodes[index])
			},
			WaystadionAjax: function(schedulecode){
				$http.get('/schedule/routestations',{
					params: {
						stationorgid: _this.departid,
						schedulecode: schedulecode,
						departdate: _this.query.departdate,
						netname: 'cra.bus365.cn',
					}
				})
				.then(function (response) {
				    if(response && response.data.length !== 0){
				    	_this.waystadionlist = response.data;
				    }
				  })
				.catch(function (error) {
				    console.log(error);
				})
			},
			choosedateFun: function(data){
				this.departdate = this.utils.replaceDate(data);
				this.shiftlistsAjax();
			},
			nowticket: function(){
				this.$router.push('/applyorder')
			}
		}
	}
</script>





<style>
	 @import '../assets/reset.css';
	.buslist{
		 margin-top: 6rem;
	}
	.sl_main_li {
	    width: 100%;
	    border-bottom: 1px solid #e2e2e2;
	}
	.sl_m {
	    width: 100%;
	    height: 5rem;
	    border-bottom: 1px dashed #e2e2e2;
	}
	.tjz {
	    height: 2rem;
	    position: relative;
	}
	.viastation {
	    background: #f4f4f4;
	    color: #5B5B5B;
	    padding: 0.25rem 0;
	    font-size: 0.8rem;
	    line-height: 1.2rem;
	}
	.sl_m li {
	    width: 25%;
	    height: 5rem;
	    float: left;
	    text-align: center;
	    position: relative;
	}
	.nojian {
	    margin-top: 3.5rem;
	}
	.cf_tj {
	    font-size: 1.4rem;
	    color: #333333;
	    font-weight: bold;
	    margin-top: 2rem;
	    font-family: arial;
	    position: relative;
	}
	.cf {
	    margin-top: 1rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.md {
	    margin-top: 1rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.place {
	    font-size: 1.2rem;
	    color: #5b5b5b;
	    font-weight: bold;
	    text-align: left;
	}
	.icon {
	    width: 0.8rem;
	    height: 0.8rem;
	    text-align: center;
	    line-height: 0.8rem;
	    display: inline-block;
	    color: #FFFFFF;
	    border-radius: 50%;
	    font-weight: normal!important;
	    font-size: 1rem;
	    position: relative;
	    top: -0.1rem;
	    margin-right: 0.5rem;
	}
	.green {
	    border: 1px solid #3ddbaa;
	}
	.blue {
	    border: 1px solid #62b1fc;
	}
	.price {
	    color: #ff2a00;
	    font-size: 1.4rem;
	    margin-top: 1rem;
	    font-family: arial;
	    font-weight: bold;
	}
	.yp {
	    color: #5b5b5b;
	    font-size: 1rem;
	    margin-top: 1rem;
	}
	.gotobuy div {
	    width: 4rem;
	    height: 2rem;
	    background: #1FCC9E;
	    color: #FFFFFF;
	    font-size: 1.2rem;
	    line-height: 2rem;
	    border-radius: 8px;
	    letter-spacing: 2px;
	    margin: 1.5rem auto;
	}
	.tjz {
	    height: 1rem;
	    position: relative;
	}
	.text_tjz {
	    line-height: 1.2rem;
	    color: #5b5b5b;
	    padding-left: 1rem;
	    font-size: 0.8rem;
	}
	.imgd {
	    position: absolute;
	    left: 50%;
	    bottom: -0.3rem;
	}
	.tjz img {
	    width: 2rem;
	}
	.viastation div {
	    width: 95%;
	    margin: 0 auto;
	}
	.sdf {
    float: right;
}
</style>