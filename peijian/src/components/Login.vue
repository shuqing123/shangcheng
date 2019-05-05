<template>
    <div class="layui-main layui-clear">
      <div class="info">
        <H1 class="topic">达美DAIMEI</H1>
        <H2>专业的科技产品交易平台</H2>
      </div>
      <div class="logo">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="login">
        <h1>达美用户登陆</h1>
        <p>
          <input type="text"  id="user"  name="user" v-model="user" placeholder="请输入用户名">
          <span>用户名不能为空</span>
        </p>
        <p>
          <input type="password" id="pass" pass="pass" v-model="pass"  placeholder="请输入密码">
          <span>密码不能为空</span>
        </p>
        <p><button @click="login">登陆</button></p>
      </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        name: "Login",
        data(){
          return {
            user:'',
            pass:''
          }
        },
        methods:{
          ...Vuex.mapMutations(['isLogin']),
          login(){
            let self = this;
            let user=document.getElementById("user").value;
            let pass=document.getElementById("pass").value;
            let sp=document.getElementsByTagName("span");
            if(user===""){
              sp[0].style.display="inline-block";
            }else if(pass===""){
              sp[1].style.display="inline-block";
              sp[0].style.display="none";
            }else{
              sp[0].style.display="none";
              sp[1].style.display="none";
              $.ajax({
                url:'http://localhost:3000/login',
                type: 'post',
                data: {
                  user: self.user,
                  pass: self.pass
                },
                dataType:'json',
                success(data){
                  alert(data.msg);
                  localStorage.setItem("login", data.login);
                  localStorage.setItem("user", data.user);
                  //localStorage.removeItem("data");
                  self.isLogin(data);
                  location.hash = '/';
                }
              })
            }
          }
      }//methods
    }
</script>

<style scoped>
  .layui-main{
    margin-top:120px;
    position: relative;
  }
  .layui-main>div{
    float:left;
  }
  .logo{
    width:30%;
  }
  .logo>img{
    width:400px;
    height:400px;
  }
  .info{
    height: 300px;
    width: 30%;
    position: relative;
    left: 200px;
    top: 163px;
  }
  .login{
    width:400px;
    margin-top:100px;
  }
  .login>p{
    height:56px;
    line-height: 56px;
    margin:30px 0px;
  }
  .login>p>input{
    text-indent:10px;
    font-size:20px;
    width:60%;
    height:100%;
  }
  span{
    font-size:18px;
    color:red;
    display: none;
  }
  .login>p>button{
    width:40%;
    height:100%;
  }
  .topic{
    font-size:86px;
    width:200px;
  }
</style>
