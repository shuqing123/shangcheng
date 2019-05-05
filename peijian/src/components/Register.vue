<template>
    <div class="layui-main">
      <div class="register">
        <h1>达美账号注册</h1>
        <p>
          <input type="text" id="user" placeholder="请输入用户名" v-model="user">
          <span>用户名不能为空</span>
        </p>
        <p>
          <input type="password" id="pass"  placeholder="请输入密码"  v-model="pass">
          <span>密码不能为空</span>
        </p>
        <p><button @click="sub">注册</button></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
          return {
            user:'',
            pass:''
          }
        },
        methods:{
          sub(){
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
                url:'http://localhost:3000/reg',
                type: 'post',
                data: {
                  user: self.user,
                  pass: self.pass
                },
                dataType:'json',
                success(data){
                  console.log(data);
                  alert(data.msg)
                  /*location.hash = '/'*/
                }
              })
            }
          }
        },
        /*mounted() {
          layui.use('form', function(){
            var form = layui.form;
            form.on()
          });
        }*/
    }
</script>


<style scoped>
  .register{
    width:500px;
    margin:200px auto;
  }
  .register>p{
    height:56px;
    line-height: 56px;
    margin:30px 0px;
  }
  .register>p>input{
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
  .register>p>button{
    width:40%;
    height:100%;
  }
</style>
