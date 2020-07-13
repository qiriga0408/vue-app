<template>
	<div class="box">
		<header>
			<van-nav-bar
			  title="关注的老师"
			  left-arrow
			  @click-left="onClickLeft"
			/>
		</header>
		<main>
			<!-- //没有关注时显示 -->
			<ul class="one">
				<img src="../../../public/暂无关注老师.jpg" alt="" />
			</ul>
			<!-- //当有数据的时显示的 -->
			<ul class="two">
				<!-- {{id}} -->
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Focuson",
		data(){
			return{
				
			}
		},
		mounted(){
			this.$axios.get("https://www.365msmk.com/api/app/collect?page=1&limit=10&type=1&").then((res)=>{
				console.log(res);
			})
		},
		methods:{
			 onClickLeft(){
			    this.$router.push("/Xl");
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100%;
		main{
			.one{
				width: 100%;
				height: 100%;
				img{
					width:100%;
					height: 100%;
				}
			}
		}
	}
</style>
