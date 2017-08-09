<template>
	<div class="hottitlebox">
		<div id="hottitle" class="hottitle">热门城市</div>
		<div id="hotcity" class="hotcity">
			<ul v-for="item in startcity">
				<li @click="backhome($event)" :data-id= "item.id">{{item.findname || item.name}}</li>
			</ul>
		</div>
	</div>
</template>



<script>
	export default {
		name: 'hottitle',
		data () {
	      return {
	        startcity: "",
	        query: ""
	      }
	    },
	    created: function(){
	    	this.query = this.$route.query;
    		var _this = this;
    		if(!this.query.reach){
    			_this.departAjax(_this);
    		}else{
    			_this.reachAjax(_this);
    		}
			
	    },
		methods: {
			backhome: function (event) {
				if(!this.query.reach){
    				let departname = event.target.innerText;
					let departid = event.target.getAttribute("data-id");
					let reachname = this.query.reachname == undefined ? '请选择' : this.query.reachname;
					this.$router.push('/' + "?departname=" + departname + "&departid=" + departid + "&reachname=" + reachname + "&reachid=" + this.query.reachid);
	    		}else{
	    			let reachname = event.target.innerText;
					let reachid = event.target.getAttribute("data-id");
					let departname = this.query.departname == undefined ? '请选择' : this.query.departname;
					this.$router.push('/' + "?reachname=" + reachname + "&reachid=" + reachid + "&departname=" + departname + "&departid=" + this.query.departid);
	    		}
			},
			departAjax: function (_this) {
				axios.get('http://mraw.bus365.cn/schedule/topdepartcitys/0')
				  .then(function (response) {
				    if(response.data && response.data.length !== 0){
				    	_this.startcity = response.data;
				    }
				  })
				  .catch(function (error) {
				    console.log(error);
				})
			},
			reachAjax: function (_this) {
				axios.get('http://mraw.bus365.cn/schedule/reachrecommend/0?cityid=110000000000&page=1&size=100')
				  .then(function (response) {
				    if(response.data && response.data.length !== 0){
				    	_this.startcity = response.data.data;
				    }
				  })
				  .catch(function (error) {
				    console.log(error);
				})
			},

		}
	}
</script>


<style>
	@import url('../assets/reset.css');
	.hottitlebox{
		width: 100%;
	}
	.hottitle {
	    width: 100%;
	    color: #939393;
	    font-size: 1rem;
	    font-family: arial;
	    height: 1.5rem;
	    line-height: 1.5rem;
	    background-color: #eee;
	    padding-left: 1rem;
	    box-sizing: border-box;
	}
	.hotcity{
		width: 100%;
	}
	.hotcity li{
		width: 19%;
		border: 1px solid #eee;
		padding: 0.5rem;
		float: left; 
		margin: 0.5rem 1rem;
		text-align: center;
		border-radius: 0.2rem;
	}
</style>