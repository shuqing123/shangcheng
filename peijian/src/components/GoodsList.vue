<template>
    <div>
      <ul class="list">
        <li v-for="(item, index) in arr" class="layui-clear">
          <div></div>
          <div>
            <p>{{ item.model }}<span class="grade">评分：{{ item.grade }}</span> </p>
            <p class="price">￥<span>{{ item.price }}</span></p>
          </div>
        </li>
      </ul>
      <div id="page"></div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        name: "GoodsList",
        props: ['msg'],
        data(){
          return {
            arr: []
          }
        },
        computed: {
          ...Vuex.mapState(['allGoods'])
        },
        mounted() {
          let self = this;
          layui.use('laypage', function(){
            let laypage = layui.laypage;

            //执行一个laypage实例
            laypage.render({
              elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
              ,count: self.allGoods.length, //数据总数，从服务端得到
              jump: function (obj) {
                //模拟渲染
                //console.log(obj)
                //0 10 10 19
                let a = (obj.curr-1)*obj.limit;
                let b = obj.limit*obj.curr-1;
                if(b > self.allGoods.length) {
                  b = self.allGoods.length-1
                }
                for (let i=a; i<b; i++){
                  self.arr.push(self.allGoods[i])
                }
              }
            });
          });
        }
    }
</script>

<style scoped>
.list li{
    border-bottom: 1px solid #ccc;
}
.list div {
  float: left;
}
.list div:first-child {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.list div:last-child {
  padding-top: 111px;
  width: 800px;
}
.price span {
    color: red;
    font-size: 18px;
}
.grade {
  float: right;
  margin-right: 50px;
}
</style>
