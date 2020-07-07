<template>
	<div class="box">
		<van-nav-bar
		  title="设置"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<main>
			<van-cell-group>
			    <van-cell title="清除缓存" value="50MB" is-link  /></van-popup>
				<van-cell title="设置密码" value="您尚未设置密码" is-link  /></van-popup>
				<van-cell title="当前版本" value="V1.2" is-link  /></van-popup>
			</van-cell-group>
			<div class="bot">
				<button>退出登录</button>
			</div>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Czp_E10",
		 methods:{
		    onClickLeft(){
		      this.$router.push('/Czp');
		    },
		},
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	main{
		width: 100%;
		height: 100%;
		.bot{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			button{
				width: 90%;
				height: 0.56rem;
				background: #EB6100;
				border: none;
				outline: none;
				border-radius: 0.1rem;
				color: white;
			}
		}
	}
}	
</style>
