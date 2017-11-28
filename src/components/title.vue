<template>
	<div class="tit" id="title">
		<div class="back" id="back" @click="backpre" v-show="showback">
			<img src="../assets/back.png">返回
		</div>
		<div class="back" id="back" v-show="!showback"></div>
		<div class="Bustitle" id="title">Bus</div>
		<div class="null"></div>
	</div>
</template>


<script>
	export default {
		name: 'title',
		data () {
			return {
				showback: this.$store.state.showback
			}
		},
		methods: {
			backpre () {
				history.go(-1)
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.tit {
		width: 100%;
		height: 3rem;
		background: #1FCC9E;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 88;

		div{
			float: left;
		}
	}

	.back {
		width: 20%;
		height: 3rem;
		font-size: 1rem;
		color: #FFFFFF;
		line-height: 3rem;

		img {
			width: 1rem;
			position: relative;
			top: 0.4rem;
			margin-left: 0.5rem;
		}
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