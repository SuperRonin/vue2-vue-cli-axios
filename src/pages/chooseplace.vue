<template>
	<div class="chooseplace">
		<Tit></Tit>
		<Search @searchs="search" :cityid="cityid"></Search>
		<Hotcity v-if="show"></Hotcity>
		<div class="searchcity">
			<ul v-for="item in searchs">
				<li @click="backhome($event)" :data-id="item.id">{{item.findname || item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Tit from '../components/title'
	import Search from '../components/search'
	import Hotcity from './hotcity'
	export default {
		name: 'chooseplace',
		data () {
			return {
				show: true,
				hidesearch: false,
				searchs: '', //热搜
				query: '', //地址参数
				cityid: ''
			}
		},
		created: function(){
	    	this.query = this.$route.query;
	    	this.cityid = this.query.departid;
	    },
		methods: {
			search (val) {
				if(val.length !== 0){
					this.show = false
				}else{
					this.show = true
				}
				this.searchs = val;  
			},
			backhome: function (event) {
				if(!this.query.reach){
    				let departname = event.target.innerText;
					let departid = event.target.getAttribute("data-id");
					if(this.query.reachname){
						this.$router.push('/' + "?departname=" + departname + "&departid=" + departid + "&reachname=" + this.query.reachname + "&reachid=" + this.query.reachid);
					}else{
						this.$router.push('/' + "?departname=" + departname + "&departid=" + departid);
					}
					
	    		}else{
	    			let reachname = event.target.innerText;
					let reachid = event.target.getAttribute("data-id");
					if(this.query.departname){
						this.$router.push('/' + "?reachname=" + reachname + "&reachid=" + reachid + "&departname=" + this.query.departname + "&departid=" + this.query.departid);
					}else{
						this.$router.push('/' + "?reachname=" + reachname + "&reachid=" + reachid);
					}
					
	    		}
			}
		},
		components: { Search,Hotcity,Tit }
	}
</script>

<style>
	.chooseplace{
		width: 100%;
	}
	.searchcity{
		width: 100%;
		padding-left: 1rem;
		box-sizing: border-box;
	}
	.searchcity li{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		border-bottom: 1px solid #ccc;
	}

</style>