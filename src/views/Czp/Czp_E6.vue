<template>
	<div class="box">
		<header>
			<van-nav-bar
			  title="我的订单"
			  left-arrow
			  @click-left="onClickLeft"
			/>
		</header>
		<div class="tabs">
			<van-tabs v-model="active">
			  <van-tab title="全部订单"></van-tab>
			  <van-tab title="待支付">
				  <main>
				  	<ul>
				  		<li>
				  			<div class="top">
				  				<a>订单编号:1101201805210000002</a>
				  				<span :style="{color:'red'}">待支付</span>
				  			</div>
				  			<div class="center">
				  				<img src="../../../public/czpimg/E6/02.jpg" alt="" />
				  				<span>钢铁是怎样炼成的222</span>
				  			</div>
				  			<div class="bottom">
				  				<span>2020/07/06</span>
				  				<label for="">
				  					<a>合计:1998.00</a>
				  				</label>
				  			</div>
				  			<div class="bottom2">
				  				<button>立即支付</button>
				  			</div>
				  		</li>
				  	</ul>
				  </main>
			  </van-tab>
			  <van-tab title="已完成"></van-tab>
			  <van-tab title="已取消">
				  <main>
				  	<ul>
				  		<li>
				  			<div class="top">
				  				<a>订单编号:1101201805210000001</a>
				  				<span :style="{color:'red'}">待支付</span>
				  			</div>
				  			<div class="center">
				  				<img src="../../../public/czpimg/E6/02.jpg" alt="" />
				  				<span>钢铁是怎样炼成的</span>
				  			</div>
				  			<div class="bottom">
				  				<span>2020/07/06</span>
				  				<label for="">
				  					<a>合计:521.00</a>
				  				</label>
				  			</div>
				  			<div class="bottom2">
				  				<button>立即支付</button>
				  			</div>
				  		</li>
				  	</ul>
				  </main>
			  </van-tab>
			</van-tabs>
		</div>
		<main>
			<ul>
				<li>
					<div class="top">
						<a>订单编号:1101201805210000001</a>
						<span :style="{color:'red'}">待支付</span>
					</div>
					<div class="center">
						<img src="../../../public/czpimg/E6/01.jpg" alt="" />
						<span>钢铁是怎样炼成的</span>
					</div>
					<div class="bottom">
						<span>2020/07/06</span>
						<label for="">
							<a>合计:521.00</a>
						</label>
					</div>
					<div class="bottom2">
						<button>立即支付</button>
					</div>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Czp_E6",
		data(){
			return{
				active:0
			}
		},
		methods:{
			onClickLeft(){
			   this.$router.push('/Czp');
			},
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	main{
		width: 100%;
		height: 100%;
		ul{
			width: 100%;
			height: 100%;
			li{
				width: 100%;
				height: 100%;
				border-bottom: 0.1rem darkgrey solid;
				.top{
					width: 100%;
					display: flex;
					justify-content: space-between;
				}
				.center{
					width: 100%;
					height: 1rem;
					background: #FAFAFA;
					display: flex;
					align-items: center;
					justify-content: space-around;
					img{
						width: 1.45rem;
						height: 0.92rem;
					}
				}
			}
		}
	}
}	
</style>
