<template>
	<div class="box">
		<header>
			<router-link to="/Czp" tag="a"><</router-link>
			<span>我的订单</span>
		</header>
		<div class="tabs">
			<van-tabs v-model="active">
			  <van-tab title="全部订单"></van-tab>
			  <van-tab title="待支付"></van-tab>
			  <van-tab title="已完成"></van-tab>
			  <van-tab title="已取消"></van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Czp_E6",
		data(){
			return{
				active:0
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	header{
		width: 100%;
		height: 0.52rem;
		border-bottom: 0.01rem #FAFAFA solid;
		display: flex;
		align-items: center;
		justify-content: space-between;
		a{
			margin-left: 0.35rem;
			font-size: 0.32rem;
		}
		span{
			margin: 0 auto;
			color: #333;
			font-size: 0.24rem;
		}
	}
}	
</style>
