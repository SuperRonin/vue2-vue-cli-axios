<template>
	<div class="loading">
		<img src="../assets/busloadding_bus.png">
		<img src="../assets/busloadding_yuan.png">
	</div>
</template>


<script>
	export default {
		name: 'loading'
	}
</script>


<style>
	img{
		position: absolute;;
		top: 40%;
		left: 50%;
		width: 5rem;
		transform: translate(-50%,-50%);
		z-index: 9999;
	}
</style>