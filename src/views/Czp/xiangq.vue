
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


        <ul  class="ss">
        	<li v-for="(v,i) in arr" :key="i" >
               <p class="p1">{{v.title}}         <span class='el-icon-star-off' v-show="ss2==0"  @click="ss1(v)"></span>
                        <span class='el-icon-star-on'    v-show="ss2==1" @click="sss(i,v.collect_id)"></span></p>
               <span class="s1">共{{v.total_periods}}课时</span>
               <p class="p2"><img :src="v.teachersAvatar" alt=""> {{v.teachers}} </p>
               <p class="p3"><span class="ss">{{v.sales_num}}已报名</span> <span class="ss1">{{v.price|number() }}</span></p>

            </li>
        </ul>
          <!-- {{v.teachers_list[0].teacher_name}} -->

    
		</main>
	</div>
</template>

<script>
export default{
		
data(){
	return{
		arr:[],
		ss2:1
	}
},

		methods:{
			onClickLeft(){
			   this.$router.push('/Czp');
			},
			aa(){
   						this.$http.get('/api/app/collect?page=1&limit=10&type=1&').then((res)=>{
       
                     console.log(res.data.data.list) 
			this.arr=res.data.data.list
	
     }) 
			
			},

		async sss(i,id) {
				
                let {data:res}=  await this.$http.put(`/api/app/collect/cancel/${id}/1`)
		
	
						console.log(res)
					
	this.arr.splice(i,1)



    //  })   
	 
       
        },
		},
		
		mounted(){
      
			this.aa()
                       
 

	},
	    filters:{
       number(val){
            if(val == 0){
                return "免费";
            }else{
                return `￥${(val/100).toFixed(2)}`;
            }
            return val;
        }
    },
	}
</script>

<style lang="scss" scoped>
	



     .ss{
         width: 100%;
      

         li{
                 border-radius: 1.3vw;
             background: #fff;
               margin-left: 0.3rem;
               margin-bottom: 0.3rem;
             width: 6.88rem;
             height: 4.12rem;
        
             img{
                 width:0.55rem ;
                 height: 0.55rem;
                 border-radius: 50%;
                 margin-right: 0.18rem;
             }
             .p1{
                 margin-left: 0.28rem;
                 padding-top: 0.48rem;
                width: 6.23rem ;    
                font-size: 0.32rem;
                font-family: PingFangSC-Medium;
                font-weight: 400;
                color: #333;
                 
             }
             .s1{
                 display: block;
                 margin-top: 0.24rem;
                     font-family: PingFangSC-Regular;
                     font-size: 0.24rem;
                     color: #666;
                    width: 6.23rem ;  
                    margin-left: 0.28rem;
                    margin-bottom: 0.54rem;
             }
             .p2{
                   width: 6.23rem ;  
                    margin-left: 0.28rem;
                    display: flex;
                        font-weight: 400;
                        font-size: 0.24rem;
                          color: rgba(0,0,0,.45);
                         line-height:0.55rem;
                             font-family: PingFangSC-Regular;
                            
    
             }
             .p3{
                 margin-top: 0.5rem;
          
                 display: flex;
                 justify-content: space-between;
                    width: 6.37rem ;  
                     font-family: PingFangSC-Regular;
                    margin-left: 0.28rem;
        
                    border-top: 1px solid #f5f5f5;
                    height: 0.88rem;
                    //  line-height:0.88rem;
                   .ss{
					   width: 1.2rem;
                       font-size: 0.24rem;  
                       color: rgba(0,0,0,.45);
                   } 
                   .ss1{
                           color: #44a426;
                           font-size: 0.32rem;
						   
                   }  
             }
         }
     }

     .el-icon-star-off{
        font-size: 0.38rem;

    }
    .el-icon-star-on{
         font-size: 0.48rem;
         color: #e84a01;
    }
</style>
