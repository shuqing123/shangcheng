<template>
    <div class="aside pos-a">
      <ul>
        <li v-for="(item, index) in msg" class="pos-r">
          <a href="/#/all">{{ item.parts }}<i class="layui-icon layui-icon-right"></i></a>
          <div class="hide pos-a">
            <ul class="layui-clear">
              <li v-for="(item,index) in item.arr"><a href="#">{{ item }}</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data() {
          return {
            arr:['装机硬件','装机硬件','装机硬件'],
            msg: [
              {
                parts: '装机硬件',
                arr: ['主板', '显卡', '主板', '显卡', '显卡', '主板', '显卡']
              },
              {
                parts: '装机硬件',
                arr: ['主板', '显卡', '主板', '显卡', '显卡', '主板', '显卡']
              },
              {
                parts: '装机硬件',
                arr: ['主板', '显卡', '主板', '显卡', '显卡', '主板', '显卡']
              }
            ]
          }
        }
    }
</script>

<style scoped>
.aside ul li>a{
  padding-left: 20px;
  display: block;
  line-height: 50px;
  color: #fff;
}
.aside ul li>a i{
  margin-left: 100px;
}
.aside ul>li:hover>a{
  background-color: #1E9FFF;
}

.aside{
  top: 0;
  z-index: 1;
  width: 240px;
  height: 100%;
  background-color: rgba(0,0,0,.5);
}
.hide{
  display: none;
  width: 300px;
  height: 500px;
  top: 0;
  left: 240px;
  background-color: #1E9FFF;
  color: #fff;
}
.hide ul li{
    float: left;
    padding: 0 20px;
    line-height: 20px;
}
.hide ul li:hover a{
  color: #dedede;
}
.aside ul>li:hover .hide{
  display: block;
}
</style>
