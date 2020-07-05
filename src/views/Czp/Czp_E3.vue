<template>
	<div class="box">
		<header>
			<router-link to="/Czp" tag="a"><</router-link>
			<span>我的收藏</span>
		</header>
		<main>
			<ul>
				<li>1111111111111</li>
				<li>22222222222222</li>
				<li>3333333333333</li>
				<li>444444444444444</li>
				<li>55555555555555</li>
				<li>6666666666666</li>
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
		border-bottom: 0.01rem #ddd solid;
		display: flex;
		align-items: center;
		a{
			margin: 0 0.35rem;
		}
		span{
			margin: 0 0.45rem;
		}
	}
}	
</style>
