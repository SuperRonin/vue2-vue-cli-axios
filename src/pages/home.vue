<template>
  <div>
    <div class="home">
       <Tit></Tit>
          <swiper :options="swiperOption" ref="mySwiper">
             <!-- slides -->
             <swiper-slide><img class="swiperimg" src="../assets/CgoB7Vlkh12ALAPqAAIfH3tWR8I326.png"></swiper-slide>
             <!-- <swiper-slide><img class="swiperimg" src="../assets/lunbo.png"></swiper-slide> -->
           <!--   <swiper-slide>I'm Slide 3</swiper-slide>
             <swiper-slide>I'm Slide 4</swiper-slide>
             <swiper-slide>I'm Slide 5</swiper-slide>
             <swiper-slide>I'm Slide 6</swiper-slide>
             <swiper-slide>I'm Slide 7</swiper-slide> -->
             <!-- Optional controls -->
             <div class="swiper-pagination"  slot="pagination"></div>
             <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
             <!-- <div class="swiper-button-next" slot="button-next"></div> -->
             <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
          </swiper>
       <Choosestadion :departname="departname" :departid="departid" :reachname="reachname" :reachid="reachid"></Choosestadion>
    </div>
  </div>
</template>

<script>
  import Tit from '../components/title'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Choosestadion from './choosestadion'
  export default {
    name: 'home',
    data () {
      return {
        departname: '',
        departid: '',
        reachname: '',
        reachid: '',
        swiperOption: {
           // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
           // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
           notNextTick: true,
           // swiper configs 所有的配置同swiper官方api配置
           autoplay: 1500,
           // direction : 'vertical',
           effect:"coverflow",
           grabCursor : true,
           setWrapperSize :true,
           // autoHeight: true,
           // paginationType:"bullets",
           pagination : '.swiper-pagination',
           paginationClickable :true,
           prevButton:'.swiper-button-prev',
           nextButton:'.swiper-button-next',
           // scrollbar:'.swiper-scrollbar',
           mousewheelControl : true,
           observeParents:true,
           // if you need use plugins in the swiper, you can config in here like this
           // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
           // debugger: true,
           // swiper callbacks
           // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
           // onTransitionStart(swiper){
           //   console.log(swiper)
           // },
           // more Swiper configs and callbacks...
           // ...
         }
      }
    },
    created () {
      this.$store.state.showback = false;
      let _this = this;
      _this.initstadion()
    },
    methods: {
      initstadion (){
        let query = this.$route.query;
        this.departname = query.departname || '请选择';
        this.departid = query.departid || '请选择';
        this.reachname = query.reachname || '请选择';
        this.reachid = query.reachid || '请选择';
      }
    },
    components: { Tit,Choosestadion,swiper,swiperSlide }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    margin-top: 3rem;
  }
  .swiperimg{
    width: 100%;
  }
</style>
