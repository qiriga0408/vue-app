<template>
	<div class="box">
		<header>
			<van-nav-bar
			  title="我的收藏"
			  left-arrow
			  @click-left="onClickLeft"
			/>
		</header>
		<main>
			<ul>
				<li>
					<div class="left">
						<img src="../../../public/czpimg/E3/01.jpg" alt="" />
					</div>
					<div class="right">
						<span>如何成为旅游体验室</span><br />
						<a>845人已预约</a><br />
						<strong>￥1998.0</strong>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../../../public/czpimg/E3/02.jpg" alt="" />
					</div>
					<div class="right">
						<span>如何成为旅游体验室</span><br />
						<a>845人已预约</a><br />
						<strong>￥1998.0</strong>
					</div>
				</li><li>
					<div class="left">
						<img src="../../../public/czpimg/E3/03.jpg" alt="" />
					</div>
					<div class="right">
						<span>如何成为旅游体验室</span><br />
						<a>845人已预约</a><br />
						<strong>￥1998.0</strong>
					</div>
				</li><li>
					<div class="left">
						<img src="../../../public/czpimg/E3/04.jpg" alt="" />
					</div>
					<div class="right">
						<span>如何成为旅游体验室</span><br />
						<a>845人已预约</a><br />
						<strong>免费</strong>
					</div>
				</li><li>
					<div class="left">
						<img src="../../../public/czpimg/E3/05.jpg" alt="" />
					</div>
					<div class="right">
						<span>如何成为旅游体验室</span><br />
						<a>845人已预约</a><br />
						<strong>￥1998.0</strong>
					</div>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Czp_E3",
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
			list-style: none;
			li{
				width: 95%;
				height: 1.35rem;
				margin: 0 auto;
				border-bottom: 0.01rem #FAFAFA solid;
				display: flex;
				align-items: center;
				justify-content: space-around;
				.left{
					img{
						width: 2rem;
						height: 0.92rem;
					}
				}
				.right{
					
				}
			}
		}
	}
}	
</style>
