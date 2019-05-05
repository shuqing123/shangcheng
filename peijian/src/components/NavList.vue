<template>
    <div class="layui-main layui-clear">
      <div class="header">
        <div class="header-left">
          <h1>达美DAMEI电子产品</h1>
          <h2>专业的科技产品交易平台</h2>
          <span><img src="../../static/img/20th.png" alt="20周年的图片"></span>
        </div>
        <div class="search">
          <input type="text">
          <button class="layui-btn">搜素</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavList",
        data(){
          return{

          }
        }//data
    }
</script>

<style scoped>
  .header{
    margin-top:48px;
  }
  .header>div{
    float:left;
  }
  .header-left{
    position: relative;
    width:300px;
  }
  .header-left>h1{
    color:#0000FF;
  }
  .header-left>span{
    position:absolute;
    top:0;
    right:0;
}
  .header>.search {
      margin-left:40px;
  }
  .header>.search>input{
    width:478px;
    height:34px;
    border:2px solid #0000FF;
  }
  .header>.search>button{
    height:38px;
    margin-left:-3px;
    margin-top:-2px;
    background: #0000FF;
    border:none;
    border-radius:0;
  }
</style>
