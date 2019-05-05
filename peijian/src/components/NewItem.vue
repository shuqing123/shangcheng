<template>
  <div class="layui-main">
    <h1>新品推荐</h1>
    <div class="hot-item layui-clear">
      <div class="hotbox" v-for="(item,index) in items" @click="goDet(item.id)" ref="hotbox">
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
          //console.log(boxdiv.length);
            layui.use('rate', ()=>{
              let rate =layui.rate;
              for(let i=1;i<=this.$refs.hotbox.length;i++){
                let value = parseInt(this.items[i-1].grade*10/2)/10
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
            star:["s1","s2","s3","s4","s5","s6","s7","s1"]
          }
        },//data
        created (){
            $.ajax({
              url: 'http://localhost:3000/new',
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
