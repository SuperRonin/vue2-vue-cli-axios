<template>

	<div class="loading">
		<Shade></Shade>
		<img class="loadingImg loadingImgIn" src="../assets/busloadding_bus.png">
		<img class="loadingImg outline" v-show="show"  src="../assets/busloadding_yuan.png">
	</div>
</template>


<script>
	import Shade from './shade';
	export default {
		name: 'loading',
		props: ['showLoading'],
		data (){
			return {
				show: true
			}
		},
		created (){
			this.show = this.showLoading;
		},
		components: { Shade }
	}
</script>


<style>
	.loadingImg{
		position: absolute;;
		top: 50%;
		left: 50%;
		width: 5rem;
		transform: translate(-50%,-50%);
		z-index: 999;
	}
	.loadingImgIn{
		width: 3.5rem;
	}
	@keyframes myfirst
    {
        from {transform: rotate(0);}
        to {transform: rotate(36000deg);}
    }

    @-moz-keyframes myfirst /* Firefox */
    {
        from {transform: rotate(0);}
        to {transform: rotate(36000deg);}
    }

    @-webkit-keyframes myfirst /* Safari 和 Chrome */
    {
        from {transform: rotate(0);}
        to {transform: rotate(36000deg);}
    }

    @-o-keyframes myfirst /* Opera */
    {
        from {transform: rotate(0);}
        to {transform: rotate(36000deg);}
    }
    .outline{
        animation-name: myfirst;
        animation-duration: 100s;
        animation-timing-function: linear;
        margin: -9.5%;
    }

</style>