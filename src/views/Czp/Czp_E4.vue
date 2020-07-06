<template>
	<div class="box">
		<header>
			<router-link to="/Czp" tag="a"><</router-link>
			<span>正在下载</span>
		</header>
		<main>
			<ul>
				<li>
					<div class="left">
						<img src="../../../public/czpimg/E4/01.jpg" alt="" />
					</div>
					<div class="right">
						<span>雅思语法入门</span><br />
						<a>97分钟</a><br />
						<strong>481.98MB</strong>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../../../public/czpimg/E4/02.jpg" alt="" />
					</div>
					<div class="right">
						<span>雅思语法入门</span><br />
						<a>97分钟</a><br />
						<strong>481.98MB</strong>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../../../public/czpimg/E4/01.jpg" alt="" />
					</div>
					<div class="right">
						<span>雅思语法入门</span><br />
						<a>97分钟</a><br />
						<strong>481.98MB</strong>
					</div>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Czp_E4"
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
