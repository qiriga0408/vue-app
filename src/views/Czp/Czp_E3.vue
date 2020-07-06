<template>
	<div class="box">
		<header>
			<router-link to="/Czp" tag="a"><</router-link>
			<span>我的收藏</span>
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
		name:"Czp_E3"
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
