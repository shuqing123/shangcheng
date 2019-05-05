<template>
  <div class="layui-main">
    <h1>热销产品</h1>
    <div class="hot-item layui-clear">
      <div class="hotbox" v-for="(item,index) in items" @click="goDet(item.id)">
        <p><img :src="item.src" alt="" slot="picture"></p>
        <p>{{item.model}}</p>
        <p>参考价：<span>{{item.price}}</span></p>
        <div><div :class="star[index]"></div></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NewItem",
    methods: {
      goDet(id){
        this.$router.push(`/details/${id}`)
      }
    },
    mounted() {
      let self = this;
      let boxdiv=document.getElementsByClassName('hotbox');
      //console.log(boxdiv.length);
      layui.use('rate', function(){
        let rate =layui.rate;
        for(let i=9;i<boxdiv.length+8;i++){
          let value = parseInt(self.items[i-9].grade*10/2)/10;
          //console.log(value);
          rate.render({
            elem: '.s'+i,
            value: value,
            half: true,
            text: true,
            readonly: true
          })
        }
      });
    },//mounted
    data(){
      return{
        items:[],
        star:["s9","s10","s11","s12","s13","s14","s15","s16"]
      }
    },//data
    created() {
      $.ajax({
        url: 'http://localhost:3000/hot',
        dataType: 'json',
        success:(data)=>{
          //console.log(data);
          this.items = data
        }
      })
    }
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


