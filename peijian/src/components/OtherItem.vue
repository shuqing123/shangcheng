<template>
  <div class="layui-main">
    <h1>其它产品</h1>
    <div class="hot-item layui-clear">
      <div class="box" v-for="(item,index) in items">
        <p><img :src="item.src" alt="" slot="picture"></p>
        <p>{{item.topic}}</p>
        <p>参考价：<span>{{item.price}}</span></p>
        <div><div :class="star[index]"></div></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NewItem",
    mounted() {
      let boxdiv=document.getElementsByClassName('box');
      //console.log(boxdiv.length);
      layui.use('rate', function(){
        let rate =layui.rate;
        for(let i=0;i<=boxdiv.length;i++){
          rate.render({
            elem: '.s'+i,
            value: 3.5,
            half: true,
            text: true,
          })
        }
      });
    },//mounted
    data(){
      return{
        items:[
          {topic:"Winyao USB1000T",price:"￥68",src:"../../static/img/other1.png"},
          {topic:"雷柏V302幻彩RGB电竞游戏鼠标",price:"￥109",src:"../../static/img/other2.png"},
          {topic:"罗技K120键盘技嘉F2A68HM-DS2(rev.1.0)",price:"￥69",src:"../../static/img/other3.png"},
          {topic:"Cherry 电竞竞技游戏鼠标垫 细面速度版",price:"￥25",src:"../../static/img/other4.png"},
          {topic:"友基绘影EX05",price:"￥199",src:"../../static/img/other5.png"},
          {topic:"Beats Pill Dude",price:"￥459",src:"../../static/img/other6.png"},
          {topic:"东芝Canvio Connect分享",price:"￥299",src:"../../static/img/other7.png"},
          {topic:"飞利浦VTR5200",price:"￥499",src:"../../static/img/other8.png"},
        ],
        star:["s17","s18","s19","s20","s21","s22","s23","s24"]
      }
    }//data
  }

</script>

<style scoped>
  .layui-main{
    background: white;
    margin-top:40px;
  }
  .layui-main>h1{
    height:60px;
    line-height: 100px;
    padding-left: 30px;
  }
  .hot-item{
    width:100%;
    margin:40px 0px;
    text-align: center;
  }
  .hot-item>div{
    background: white;
    border:1px solid gainsboro;
    float:left;
    width:25%;
    padding:10px 0px;
    box-sizing: border-box;
  }
  .hot-item>div>p>img{
    width:200px;
    height:200px;
    padding-top:20px;
  }
  .hot-item>div>p:nth-child(2){
    font-size:16px;
    margin-top:5px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow : ellipsis;
  }
  .hot-item>div>p:nth-child(3){
    height:24px;
    margin-top:5px;
    font-size:14px;
  }
  .hot-item>div>p:nth-child(3)>span{
    color: #ff0000;
  }
</style>


