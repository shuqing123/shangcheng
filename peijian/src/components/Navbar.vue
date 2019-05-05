<template>
  <div class="navbar">
    <div class="layui-main pos-r n-conent layui-clear">
      <div class="topbar-nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li v-for="(item,index) in items"><a href="">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="topbar-info">
        <ul v-if="!login">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/reg">注册</router-link></li>
        </ul>
        <ul v-if="login">
          <li><router-link to="/">{{ user }}</router-link></li>
          <li @click="logout"><a>退出</a></li>
        </ul>
      </div>
      <div class="topbar-cart pos-a" @click="myCar">
        <div><img src="../assets/img/car.png" alt=""></div>
        <div class="pos-a">
          <p v-show="!list.length">购物车为空</p>
          <div v-if="list.length && login" v-for="(item, index) in list" class="list pos-r">
            <img :src="item.img" alt="">
            <span>{{ item.name }}</span>
            <span class="del pos-a" @click.stop="del(item.id)">x</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    name: "Navbar",
    data(){
      return{
        items:[
          {name:"达美商城"},
          {name:"DAMEI"},
          {name:"达美服务"},
          {name:"资质证照"},
          {name:"协议规则"},
          {name:"产品排行"},
          {name:"品牌联盟"},
        ],
        data:{},
        list:[]
      }
    },//data
    computed:{
      ...Vuex.mapState(['login','user'])
    },
    methods: {
      ...Vuex.mapMutations(['isLogin','setList']),
      logout(){
        let self = this;
        $.ajax({
          url: 'http://localhost:3000/logout',
          dataType: "json",
          success(data){
            localStorage.removeItem("login");
            localStorage.removeItem("user");
            self.isLogin(data)
            //console.log(data);
          }
        })
      },
      myCar(){
        this.$router.push('/mycar')
      },
      del(id){
        let self = this;
        $.ajax({
          url: 'http://localhost:3000/del',
          dataType: "json",
          type: 'post',
          data: {
            id: id
          },
          success(data){
            let arr = [];
            if(data.code===0){
              location.reload()
            };
          }
        })
      }
    },
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
            self.setList(data);
            //console.log(self.$store.state.list);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .navbar{
    background: #333;
    height:40px;
    font-size:12px;
  }
  .n-conent>div{
    float: left;
    line-height: 40px;
  }
  .topbar-nav{
    height:40px;
  }
  .topbar-nav>ul>li{
    display: inline-block;
    padding-right:10px;
  }
  .topbar-nav>ul>li>a{
    color:#b0b0b0;
  }
  .topbar-nav>ul>li:hover>a{
    color:#fff;
  }
  .topbar-cart{
    right: 0;
    width: 100px;
    background-color: #424242;
    z-index: 2;
  }
  .topbar-cart>div>img{
    padding-left: 70px;
  }
  .topbar-cart>div>p{
    padding: 10px 0;
    text-align: center;
    color: #fff;
  }
  .topbar-cart div:last-child{
    display: none;
    right: 0;
    width: 200px;
    background-color: #424242;
  }
  .topbar-cart:hover div{
    display: block;
  }
  .topbar-info{
    padding-left: 500px;
  }
  .topbar-info>ul li{
    display: inline-block;
    padding:0 10px;
  }
  .topbar-info>ul li a {
    cursor: pointer;
    color:#b0b0b0;
  }
  .topbar-info>ul>li:hover a{
    color:#fff;
  }
  .navbar{
    min-width: 1140px;
  }
  .list img{
    width: 50px;
  }
  .list {
    line-height: 70px;
  }
  .list .del {
    right: 0;
    top: 0;
    line-height: 20px;
    font-size: 20px;
    cursor: pointer;
  }
</style>

