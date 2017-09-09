<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
 /*日历*/
.__vev_calendar-wrapper{
	position: fixed;
	bottom: 0;
	left: 0;
}
.events-wrapper{
	display: none;
}
.__vev_calendar-wrapper .cal-wrapper{
	padding:0;
}
.__vev_calendar-wrapper,.__vev_calendar-wrapper .cal-wrapper .cal-body{
	z-index: 999;
	background-color: ghostwhite;
}
.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today{
	background-color: transparent;
	color: inherit;
}
.today{
	background-color: gainsboro;
}
</style>
