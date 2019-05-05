<template>
    <div>
      <Navbar></Navbar>
      <div class="layui-main">
        <div class="detailsgroup">
          <div class="commodity">
            <img alt="产品图" :src="detail.src">
          </div>
          <div class="introduce">
            <div class="detail">
              <h1>{{ detail.model }}</h1>
              <dl >
                <dd >特点：独特网孔设计</dd>
                <dt>描述：时尚感 /</dt>
                <dt>描述2  防汗防滑 /</dt>
              </dl>
              <h2 class="redfont">价格:￥{{ detail.price }}</h2>
            </div>
            <div class="price">
              <div>
                <h3>型号</h3>
                <p>参数</p>
                <p>参数2</p>
              </div>
              <button>立即购买</button> <button @click="addCar">加入购物车</button>
            </div>
          </div>
        </div>
        <div >
          <div class="explainBox">
            <div >
              <p>价格说明</p>
              <p>商品展示的划线价格为参考价,(如品牌专柜价格和厂家指导零售价、吊牌参考价格)，或该商品在本平台展示过的销售价格；
                由于地区和时间差异、市场行情波动，该价格可能与您购物时不一致,该价格仅供参考。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vuex from 'vuex'
  import Navbar from '@/components/Navbar'
  export default {
    name:'Details',
    data(){
      return {
        detail:{}
      }
    },
    computed: {
      ...Vuex.mapState(['user','login','list'])
    },
    methods: {
      addCar(){
        let id = this.$route.params.id;
        let self = this;
        if(this.login){
          $.ajax({
            url: `http://localhost:3000/add`,
            type: 'post',
            dataType: 'json',
            data: {
              id: id,
              user: self.user
            },
            success:(data) => {
              console.log(data);
              location.reload();
            }
          })
        }else {
          alert('请先登录')
        }

      }
    },
    created(){
      let id = this.$route.params.id;
      $.ajax({
        url: `http://localhost:3000/details`,
        type: 'post',
        dataType: 'json',
        data: {
          id: id,

        },
        success:(data) => {
          //console.log(data);
          this.detail = data[0];
        }
      })
    },
    components: {
      Navbar
    }
  }
</script>

<style>
		.redfont{
				color: red;
			}

			.detailsgroup{
				width: 95%;
				display: flex;
				justify-content: space-between;
				padding-bottom: 10px;
				margin: 30px auto;
			}
			.commodity{
				width: 49%;
				/*border-right: 1px solid lightgray;*/
				margin: 0px auto;

			}
			.commodity>img{
				width: 90%;
				height: 95%;
				margin: 0px auto;
			}
			.detailsgroup .introduce{
				width: 49%;
				justify-content: space-between;

			}
			.detail dl{
				margin-top: 25px;
			}
			.detail dl dd{
				font-size: 18px;
				margin-bottom: 10px;
				padding:10px 0px;

			}
			.detail dl dt{
				padding-top: 5px;
				margin-bottom: 10px;
				color: gray;
			}
			.price{
				margin: 35px 0px;
				background: #efefef8a;
				border-bottom: 1px solid gainsboro;
				border-top: 1px solid gainsboro;
				/*border: 1px solid gainsboro;*/
			}
			.price>div{
				padding: 17px 35px;
				color: gray;
			}
			.price button{
				border: none;
				padding: 17px 35px;
				font-size: 27px;
				background: red;
				color: white;
				margin:17px 39px;
			}
			.explainBox{
				padding: 40px 170px;
				background-color: #efefef8a;
				font-size: 14px;
			}
			.explainBox>div{
				padding:20px 50px;
				display: inline-block;
				margin: 50px auto;
				background: white;
			}
			.explainBox>div>p:first-child{
				font-size: 27px;
			}
			.explainBox p{
				padding:20px 50px;
				line-height: 17px;
				font-size: 17px;
				color: gray;
			}
</style>
