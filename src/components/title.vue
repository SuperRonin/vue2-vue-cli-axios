<template>
	<div class="tit" id="title">
		<div class="back" id="back"></div>
		<div class="Bustitle" id="title">中国公路客票网</div>
		<div class="null"></div>
	</div>
</template>


<script>
	export default {
		name: 'title'
	}
</script>

<style>
	.tit {
		width: 100%;
		height: 3rem;
		background: #1FCC9E;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 88;
	}
	.tit div{
			float: left;
		}
	.back {
		width: 20%;
		height: 3rem;
		font-size: 1.5rem;
		color: #FFFFFF;
		line-height: 3rem;
	}

	.back img {
		width: 1.8rem;
		position: relative;
		top: 0.7rem;
		margin-left: 0.5rem;
	}

	.Bustitle {
		width: 60%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		color: #FFFFFF;
		font-size: 1.2rem;
	}

	.null {
		width: 20%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		font-size: 1.5rem;
		color: #FFFFFF;
	}
	.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today{
		left: 35%;
		top: 0;
		width: 25px;
		height: 25px;	
	}
	.today,.selected-day{
		color: #fff;
		background-color: #1FCC9E;
		border-radius: 50%;
	}
</style>