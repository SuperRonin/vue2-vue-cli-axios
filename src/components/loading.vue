<template>

	<div class="loading">
		<Shade></Shade>
		<img class="loadingImg loadingImgIn" src="../assets/busloadding_bus.png">
		<transition name="fade">
			<img class="loadingImg" :transition="fade" src="../assets/busloadding_yuan.png">
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
	.fade-transition {
	  transform: rotate(720deg);
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.fade-enter, .fade-leave {
	  transform: rotate(0deg);
	}
</style>