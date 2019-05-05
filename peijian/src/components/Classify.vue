<template>
	<div class="layui-main" >
			<div class="classified">
				<div>
					<h3>达美>所有商品</h3>
				</div>
				<div class="classifyList">
					<div>
						<ul>
							<li>分类:</li>
              <li><a >全部</a></li>
              <li ><a v-for="(item,index) in arrZ" @click="gain(index,item.surface)" ref="oLi">{{ item.name }}</a></li>
						</ul>
					</div>
					<!--<div>
						<ul>
							<li>品牌:</li>
							<li>
								<ul>
									<li><a ><router-link to="">全部</router-link></a></li>
									<li ><a v-for="(item,index) in arr">{{item}}</a></li>
									<li>更多</li>
								</ul>
							</li>
						</ul>
					</div>-->
					<div>
						<ul>
							<li>价格:</li>
							<li>
								<ul>
									<li><a>不限</a></li>
									<li ><a>500元以下</a></li>
									<li ><a>500~1000元</a></li>
									<li ><a >1000~3000元</a></li>
									<li ><a >3000元以上</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
      <ul class="list">
        <li v-for="(item, index) in msg" class="layui-clear" @click="go(item.id)">
          <div><img :src="item.src" alt=""></div>
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
  import GoodsList from '@/components/GoodsList'
	export default{
		data(){
			return{
        arrZ: [
          {name:'主板',surface:'mainBoard'},
          {name:'显卡',surface:'videoCard'},
          {name:'内存',surface:'storages'},
          {name:'硬盘',surface:'hardDisk'},
          {name:'机箱',surface:'chassis'},
          {name:'电源',surface:'powerPack'},
          {name:'散热器',surface:'rediator'},
          {name:'光驱',surface:'cd-rom'},
          {name:'声卡',surface:'soundCard'},
          {name:'cpu',surface:'CPU'}
        ],
        msg: [],
        num: 0
			}
		},
    computed: {
      ...Vuex.mapState(['allGoods']),
    },
    methods: {
      ...Vuex.mapMutations(['setGoods']),
      ...Vuex.mapActions(['getDetails']),
		  gain(index,surface){
        let self = this;
        let arr = [];
        this.$refs.oLi[self.num].classList.remove('active');
        self.num = index;
        this.$refs.oLi[index].classList.add('active');
        this.allGoods.forEach((val, index) => {
          if(val.flag==surface){
            arr.push(val)
          }
        })
        //console.log(arr);
        layui.use('laypage', function(){
          let laypage = layui.laypage;

          //执行一个laypage实例
          laypage.render({
            elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: arr.length-1, //数据总数，从服务端得到
            jump: function (obj) {
              //模拟渲染
              //console.log(obj)
              //0 10 10 19
              let a = (obj.curr-1)*obj.limit;//
              let b = obj.limit*obj.curr;
              if(b > arr.length) {
                b = arr.length-1
              }
              self.msg = [];
              for (let i=a; i<b; i++){
                self.msg.push(arr[i])
              }

            }
          });
        });
      },
      go(id) {
        this.$router.push(`/details/${id}`)
      }
    },
    mounted(){

      //console.log(this.msg)
      let self = this;
      layui.use('laypage', function(){
        let laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
          elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
          ,count: self.allGoods.length-1, //数据总数，从服务端得到
          jump: function (obj) {
            //模拟渲染
            //console.log(obj)
            //0 10 10 19
            let a = (obj.curr-1)*obj.limit;
            let b = obj.limit*obj.curr;
            if(b > self.allGoods.length) {
              b = self.allGoods.length-1
            }
            self.msg = [];
            for (let i=a; i<b; i++){
              self.msg.push(self.allGoods[i])
            }
          }
        });
      });
    },
    components: {
      GoodsList
    }

	}

</script>

<style>

	.classified{
				background: white;
				margin-bottom: 30px;
			}
			.classified>div{
				width:80%;
				margin: 0px auto;
			}
			.classified>div:first-child{
				border-top:1px solid deepskyblue;
				line-height: 45px;
				height: 45px;
				margin-bottom: 17px;
				margin-top: 20px;
				width: 100%;
				background: #efefef8a;
			}
			.classified>div:first-child>h3{
				margin-left: 200px;
			}
			.classifyList div{
				border-bottom: solid 1px gainsboro;
			}
			.classifyList ul{
				margin-left: 15px;
			}
			.classifyList  li{
				display: inline-block;
				padding: 5px 17px;
				height: 35px;
				line-height:35px;
				margin-left: 15px;
			}
			.classifyList a:hover{
				color: coral;
			}
      .classifyList div:first-child ul li a{
        padding: 0 8px;
        cursor: pointer;
      }
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
  .active {
    background-color: #01AAED;
    color: #fff;
  }
</style>
