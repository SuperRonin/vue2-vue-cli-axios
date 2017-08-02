<template>
	<div>
		<img class="nodataImg" src="../assets/bg.png">
		<p class="nodataTxt">未查询出该班次信息！</p>
	</div>
</template>


<script>
	export default {
		name: 'nodata'
	}
</script>


<style>
	.nodataImg{
		position: absolute;;
		top: 40%;
		left: 50%;
		width: 10rem;
		transform: translate(-50%,-50%);
	}
	.nodataTxt{
		position: absolute;;
		top: 55%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>