<template>

	<div class="loading">
		<Shade></Shade>
		<img class="loadingImg loadingImgIn" src="../assets/busloadding_bus.png">
		<transition>
			<img class="loadingImg" name="fade" src="../assets/busloadding_yuan.png">
		</transition>	
		
	</div>
</template>


<script>
	import Shade from './shade'
	export default {
		name: 'loading',
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
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 0.25s ease-out;
	}
</style>