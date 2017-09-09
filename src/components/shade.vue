<template>
		<div class="shade" @click="hideshade"></div>
</template>



<script>
	export default {
		name: 'shade',
		methods: {
			hideshade (){
				this.$emit('ishide',false)
			}
		}
	}
</script>

<style>
	.shade{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 99;
	}
</style>