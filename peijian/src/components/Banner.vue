<template>
  <div>
    <div class="layui-main">
      <div class="pos-r ban">
        <Aside></Aside>
        <div class="layui-carousel" id="banner">
          <div carousel-item>
            <div v-for="(item, index) in arr"><a href="#"><img :src="srcArr[index]" alt=""></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Aside from './Aside'
    export default {
        name: "Banner",
        components: {
          Aside
        },
        data(){
          return {
            arr: ['条目1', '条目2', '条目3', '条目4', '条目5'],
            srcArr: ['../../static/img/1.jpg', '../../static/img/2.jpg', '../../static/img/3.jpg', '../../static/img/4.jpg', '../../static/img/5.jpg',]
          }
        },
        mounted(){
          layui.use('carousel', function(){
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
              elem: '#banner'
              ,width: '100%' //设置容器宽度
              ,arrow: 'always',
              height: '500px'//始终显示箭头
              //,anim: 'updown' //切换动画方式
            });
          });
        }

    }
</script>

<style>
  .layui-carousel-arrow {
    margin-left: 240px;
  }
  #banner div img{
    width: 100%;
  }
  .ban{
    margin-top: 30px;
  }
</style>
