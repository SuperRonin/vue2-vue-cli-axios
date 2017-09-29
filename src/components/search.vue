<template>
	<div>

		<div class="st_in">
			<div class="icon">
				<img src="../assets/find.png">
				<input type="text" id="startplaceput" v-if="showdepartSearch" v-on:input="departSearch" placeholder="北京/beijing/bj">
				<input type="text" id="startplaceput" v-if="showreachSearch"  v-on:input="reachSearch" placeholder="北京/beijing/bj">
			</div>
		</div>
	</div>
</template>



<script>
	import $http from '../http/http'
	export default {
		name: 'st_in',
		data () {
			return {
				showdepartSearch: true,
				showreachSearch: true,
				query: ''
			}
		},
		props: ["cityid"],
		created () {
			window._this = this;
			this.query = this.$route.query; //地址栏参数
			if(this.query.reach){
				this.showdepartSearch= false
			}else{
				this.showreachSearch= false
			}
		},
		methods: {
				departSearch: function (){
					$http.get('/departure0',{
						params: {
							word: document.getElementById('startplaceput').value,
							page: 1,
							departtype: 1,
							rowCount: 100
						}
					})
					  .then(function (response) {
					    if(response && response.length !== 0){
					    	_this.$emit('searchs',response.data)
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					})
				},
				reachSearch: function (){
					$http.get('/schedule/reachstations2/0',{
						params: {
							word: document.getElementById('startplaceput').value,
							page: 1,
							departtype: 2,
							rowCount: 100,
							cityid: _this.cityid
						}
					})
					  .then(function (response) {
					    if(response && response.length !== 0){
					    	_this.$emit('searchs',response.data.data)
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					})
				}
			},
		}
</script>


<style>
	@import url('../assets/reset.css');
	.st_in {
	    width: 100%;
	    height: 3rem;
	    background: #fff;
	    margin-top: 3rem;
	}
	.icon {
	    width: 90%;
	    height: 2rem;
	    background: #f4f4f4;
	    border-radius: 8px;
	    margin-left: 5%;
	    position: relative;
	    top: 0.5rem;
	}
	.icon img {
	    width: 1rem;
	    position: absolute;
	    top: 0.5rem;
	    left: 0;
	    margin-left: 1rem;
	}
	.icon input {
	    width: 80%;

	    border: none;
	    background: #f4f4f4;
	    position: relative;
	    top: 0.25rem;
	    margin-left: 2.5rem;
	    color: #8e8e8e;
	    font-size: 1.2rem;
	    outline: none;
	}
</style>