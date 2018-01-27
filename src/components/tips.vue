<template>
        <div class="tips" id="tips"  >
            <span>{{this.$store.state.msg}}</span>
        </div>
</template>



<script>
    export default {
        name: 'tips',
        props: [],
        data (){
            return {
                msg: this.$store.state.msg
            }
        },
        update (){
            debugger
            this.timeout()
        }, 
        methods: {
            timeout (time){
                if(!time) time = 1500
                setTimeout(function(){
                    this.isShow = false
                    //var tips = document.getElementById("tips");
                    //tips.style.display = 'none';
                },time)
            }
        }
    }
</script>

<style>
    .tips{
        width: 45%;
        height: 3rem;
        line-height: 3rem;
        color: #fff;
        font-size: 1.2rem;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgba(0,0,0,.8);
        border-radius: 0.5rem;
        z-index: 99999;
        -webkit-transform: translate(-50%, -50%);
           -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
             -o-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
    }
</style>