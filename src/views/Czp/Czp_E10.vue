<template>
	<div class="box">
		<van-nav-bar
		  title="设置"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<main>
			<van-cell-group>
	
			</van-cell-group>	
			<h2 @click="ss">
							设置密码

					</h2>
				
			<div class="bot">
			
				
	
				
				
				<button @click="dj">退出登录</button>
			</div>
		</main>
	</div>
</template>

<script>
export default {
		name:"Czp_E10",
		 methods:{
		    onClickLeft(){
		      this.$router.push('/Czp');
				},
				ss(){
  this.$router.push({path:'/Czp/xg'}) 
				},
				dj(){
					window.localStorage.removeItem('remember_token')
					  this.$router.push({path:'/xl'}) 
				}
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
.ss{
	display: block;


}
</style>
