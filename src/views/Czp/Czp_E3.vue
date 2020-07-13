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
			<ul class="one" v-show="teacher.length < 0">
				<img src="../../../public/暂无关注老师.jpg" alt="" />
			</ul>
			<!-- //当有数据的时显示的 -->
			<div class="two">
				<div v-for="(item,key) in teacher" class="two-o" :key="key">
					<div class="two-o-y">
						<img :src="item.avatar">
					</div>
					<div class="two-o-t">
						<p>
							<span>{{item.teacher_name}}</span>
							<span>{{item.level_name}}</span>
						</p>
						<p>{{item.introduction}}</p>
					</div>
					<div class="two-o-y">
						<button class="button1"  @click="ab(item)">取消关注</button>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default{
		name:"Czp_E3",
		data(){
			return{
				teacher:[],
			}
		},
		mounted(){
			this.aa();	
			
			 
			
		},
		methods:{
			aa(){
					this.$axios.get("https://www.365msmk.com/api/app/collect?page=1&limit=10&type=2&",).then((res)=>{
						console.log(res);
						this.teacher = res.data.data.list;
					}).catch((error)=>{
						console.log(error);
					})
			},
		
			 onClickLeft(){
			    this.$router.push("/Czp");
			},
			ab(item){
				this.$toast('取消关注成功');
				console.log(item);
				this.$axios.put("https://www.365msmk.com/api/app/collect/cancel/"+item.collect_id+'/2').then((res)=>{
					console.log(res);
					this.aa()
				})
				// this.$forceUpdate();
			}
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
			// background: darkgrey;
			position: absolute;
			top: .8rem;
			.one{
				width: 100%;
				height: 100%;
				img{
					width:100%;
					height: 100%;
				}
			}
			.two{
				width: 100%;
				height: 100%;
				background: #F0F2F5;
				display: flex;
				flex-direction: column;
				align-items: center;
				// justify-content: space-around;
				.two-o{
					width: 90%;
					height: 1rem;
					background: white;
					border-radius: 0.15rem;
					margin: 0.25rem auto;
					display: flex;	
					align-items: center;
					justify-content: space-around;
					.two-o-y{
						width: 20%;
						height: 100%;
						// background: darkgoldenrod;
						display: flex;
						align-items: center;
						justify-content: space-around;
						img{
							width: 60%;
							height: 70%;
						}
						border-radius: 0.15rem;
						.button1{
							width: 1.25rem;
							height: 0.45rem;
							background: #EBEEFE;
							color: #ED7A2F;
							border: none;
							outline: none;
							display: block;
							border-radius: 0.35rem;
							font-size: 0.12rem;
						}
					}
					.two-o-t{
						width: 55%;
						height: 100%;
						// background: yellow;
						// display: flex;
						// justify-content: space-around;
						p{
							// font-size: .25rem;
							span:nth-of-type(1){
								font-size: .25rem;
							}
							span:nth-of-type(2){
								color:#EB6100;
								font-size: .17rem;
								margin-left: .1rem;
							}
						}
						p:nth-of-type(2){
							color: #D3D3D3;
							font-size: .27rem;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
							margin-top: .2rem;
						}
					}
				}
			}
		}
	}
</style>
