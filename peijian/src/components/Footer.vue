<template>
  <div class="layui-main">
    <div class="footer">
      <div id="serverbox">
        <div id="serverlist">
          <ul >
            <li><a>预购</a></li>
            <li><a>退换货</a></li>
            <li><a>保修</a></li>
            <li><a>售后服务</a></li>
            <li><a>满包邮</a></li>
          </ul>
        </div>
        <div class="serversgroup">
          <div class="serverdl">
            <dl>
              <dd>帮助中心</dd>
              <dt>账号管理</dt>
              <dt>购物指南</dt>
              <dt>订单操作</dt>
            </dl>
            <dl>
              <dd>服务支持</dd>
              <dt>售后政策</dt>
              <dt>自助服务</dt>
            </dl>
            <dl>
              <dd>线下门店</dd>
              <dt>服务网点</dt>
              <dt>授权网店</dt>
            </dl>
            <dl>
              <dd>关于我们</dd>
              <dt>官方微信</dt>
              <dt>联系我们</dt>
              <dt>关于合作</dt>
            </dl>
          </div>
          <div class="servertel">
            <h3>客服电话</h3>
            <p>周一至周日</p>
            <p>10：00-22：00</p>
            <button>联系客服</button>
          </div>
        </div>
      </div>
      <div >
        <div class="ICPbox">
          <ul class="agreement">
            <li>用户协议</li>
            <li>隐私政策</li>
            <li>问题反馈</li>
          </ul>
          <ul>
            <li>经营许可证</li>
            <li>备案</li>
          </ul>
          <ul>
            <li>可信网站。jpg</li>
            <li>诚信经营。jpg</li>
          </ul>
        </div>


      </div>



    </div>
  </div>
</template>

<script>
</script>

<style>
		*{padding: 0;margin: 0;}
			.footer{
				width: 100%;
			}
			.footer>div{
				width: 90%;
			}
			.footer ul>li{
				float: left;
				display: block;
			}
			#serverbox{
				background: white;
				margin: 0 auto;
			}

			#serverlist{
				text-align: center;
				height: 70px;
				border-bottom: 1px lightgray solid;
			}
			#serverlist li{
				width: 200px;
				border-right: 1px lightgray solid;
				margin: 20px 0px;
			}
			.serversgroup{
				display: flex;
				justify-content: space-between;
				width: 100%;
				height:170px ;
			}

			.serversgroup .serverdl{
				width: 70%;
				margin-left: 20px;
				display: flex;
				justify-content: space-between;
				border-right: 1px solid lightgray;
			}
			.serverdl dl{
				width: 25%;
				text-align: center;
				margin-top: 25px;
			}
			.serverdl dl dd{
				font-size: 18px;
				margin-bottom: 10px;
			}
			.serverdl dl dt{
				margin-top: 5px;
			}
			.servertel{
				width: 25%;
				text-align: center;
				margin-right: 10px;
				margin-top: 25px;
			}
			.ICPbox{
				height: 100px;
				padding-left: 300px;
				border-top: 1px solid gainsboro;
				color: darkgray;
				font-size: 14px;
			}
			.ICPbox>ul{
        margin-left: 200px;
				width: 100%;
				height: 17px;
					margin-top: 10px;
			}
			.agreement li{
				 border-right: 1px solid darkgray;
				color: grey;

			}
			.ICPbox li{
				padding: 2px 10px;
				line-height: 17px;
			}
</style>
