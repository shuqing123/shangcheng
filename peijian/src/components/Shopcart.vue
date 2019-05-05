<template>
  <div>
    <Navbar></Navbar>
    <div class="layui-main">
      <div class="cart-list" id="cartList">
        <div class="login" v-if="!login">
          <p><router-link to="/login">立即登录</router-link></p>
          <p>你的购物车为空</p>
        </div>
        <div v-if="login">
          <div class="mai" v-if="!list.length"><router-link to="/all">立即购买</router-link></div>
          <div class="layui-clear" v-if="list.length">
            <ul class="logo">
              <!--<li><img src="../assets/img/11.png" alt=""></li>-->
              <li><span>我的购物车</span></li>
              <li style="width:400px;"><span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></li>
            </ul>
            <ul class="top" style="margin-top:60px;">
              <li>全选：<input type="checkbox" @click="checkAll" v-model="checkall"></li>
              <li v-for="(item,index) in cartInfo">{{cartInfo[index]}}</li>
            </ul>
            <!--购物车商品展示开始-->
            <ul class="list" v-for="(item,index) in list">
              <li><input type="checkbox" @click="sigleCheck(item)" v-model="checked" :value="item"></li>
              <li><img :src="item.img" alt=""></li>
              <li>{{item.name}}</li>
              <li>{{item.price}}</li>
              <li>
                <button v-on:click="minus(item)">-</button>
                {{item.num}}
                <button @click="add(item)">+</button>
              </li>
              <li>￥{{ total(item) }}</li>
              <li><button @click="del(item.id)">移除</button></li>
            </ul>
            <!--购物车商品展示结束-->
            <h2 class="totalprice">
              总价：￥<span style="color:#fff;">{{totalPrice()}}</span>
              <button>结算</button>
            </h2>
          </div>

        </div>
        <!--<div>{{checked.length}}</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Vuex from 'vuex'
  export default {
    name: "Shopping",
    data(){
      return{
        cartInfo:["商品图片","商品信息","单价","数量","总价","操作"],
        list: [],
        checkall: false,
        checked: []
      }
    },//data
    computed: {
      ...Vuex.mapState(['login', 'user', 'list'])
    },
    methods:{
      minus(item){
        if(item.num==1){
          item.num=1;
        }else{
          item.num--;
        }
      },//minus
      add(item){
        item.num ++;
      },//add
      total(item){
        let totals=0;
        totals+=item.price*item.num;
        return totals;
      },
      totalPrice(){
        let totalPrice = 0;
        /*console.info("长度："+this.checked.length);*/
        for(let j=0;j<this.checked.length;j++){
          let item = this.checked[j];
          totalPrice += item.price * item.num;
        }
        return totalPrice;
      },
      sigleCheck(item){
        if(this.checked.indexOf(item) == -1 && this.checked.length == this.list.length-1){
            this.checkall =true;
        }else if(this.checked.length == this.list.length){
           this.checkall =false;
        }
      },
      checkAll() {
        let self = this;
        if (this.checkall==true) {
          // 实现反选
          this.checked = [];
        } else {
          // 实现全选
          this.checked = [];
         this.list.forEach(function (item) {
           /* console.info("item:"+item);*/
             self.checked.push(item);
          })
        }
        if(this.checked.length === this.list.length) {
          this.checkall = true;
        }
      },//checkAll
      del(id){
        $.ajax({
          url:"http://localhost:3000/del",
          type:"post",
          dataType: "json",
          data:{
            id:id,
          },
          success:(res)=>{
            console.log(res);
            location.reload()
          }
        })
      }//del根据商品的id删除商品的post请求
    },//methods
    created(){
      if(this.login) {
        let self = this;
        $.ajax({
          url: 'http://localhost:3000/list',
          dataType: "json",
          type: 'post',
          data: {
            user: self.user
          },
          success(data){

            //console.log(data);
            self.list = data;
          }
        })
      }
    },
    components: {
      Navbar
    }
  }

</script>

<style scoped>
  li{
    list-style: none;
  }
  .cart-list{
    width:100%;
    /* background: pink;*/
    min-width: 1140px;
    height:120px;
    border-bottom:2px solid #0000FF;
  }
  .cart-list ul>li{
    list-style: none;
    text-align: center;
    display: inline-block;
    width:13.5%;
  }
  .cart-list .list>li>img{
    width:120px;
    height:120px;
  }
  .logo>li>img{
    width:100px;
    height:100px;
  }
  .logo>li:nth-child(2)>span{
    font-size:24px;
  }
  .list{
    padding:15px 0px;
    border-bottom:1px solid #ccc;
    background: #fbf7f7;
  }
  .top{
    height:32px;
    line-height:32px;
    padding-top:50px;
    padding-bottom:20px;
    border-bottom: 1px solid #ccc;
    background: #fbf7f7;
  }
  .totalprice{
    margin-top: 30px;
    line-height: 45px;
    height: 45px;
    background: orangered;
    padding: 0px 110px;
  }
  .totalprice>button{
      width:100px;
      height:39px;
      display: inline-block;
      border-radius:5px;
      float: right;
      margin-top: 3px;
  }
  .login {
    padding-top: 50px;
    text-align: center;
    font-size: 30px;
  }
  .mai {
    text-align: center;
    font-size: 30px;
  }
</style>
