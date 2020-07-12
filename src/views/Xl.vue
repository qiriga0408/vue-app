<template>
    <div id="shouye">
        <div class="content">
           <div class="block">
            <el-carousel height=" 53.3vw"  width="100%">
              <el-carousel-item v-for="(v,i) in add" :key="i">
                <img :src="v.banner_img" alt="" width="100%" height="100%" >
              </el-carousel-item>
            </el-carousel>
          </div>
           <div class="nav">
                <ul>
                    <li>
                        <router-link to="/Zh">
                        <img src="xlimg/未标题-1.jpg" alt="" >
                        <p>特色课</p></router-link>
                    </li>
                    <li> <img src="xlimg/未标题-2.jpg" alt="">
                            <p>一对一辅导</p>
                    </li>
                    <li @click="open">  <img src="xlimg/未标题-3.jpg" alt="" >
                      <p>学习日历</p>
                    </li>
                </ul>
            </div>
           <div class="box" v-for="(item,key) in arr" :key="key">
            <div class="bus" >
                 <p class="s1">
                <span></span>
                {{item.channel_info.name}}
                <!-- 推荐课程 -->
                </p>
                <ul v-if="item.channel_info.type==3">
                    <router-link :to="{path:'/teacher',query:{id:v.teacher_id}}" tag="li" v-for="(v,i) in item.list" :key="i"  @click="open">
                        <img :src="v.teacher_avatar" alt="">
                        <p>
                           <span>
                            {{v.teacher_name}}
                        </span>
                        <span>
                            {{v.introduction}}
                        </span>
                        </p>
                    </router-link>
                </ul>
            </div>
<div class="jp">
         <p class="s1">
        <span>

        </span>
         <!-- {{item.channel_info.name}} -->
        <!-- 精品课程 -->
    </p>
        <ul v-if="item.channel_info.type==1">
            <li v-for="(v,i) in item.list" :key="i" @click="cc(v.id)">
               <p class="p1">{{v.title}}</p>
               <span class="s1">共{{v.total_periods}}课时</span>
               <p class="p2"><img :src="v.teachers_list[0].teacher_avatar" alt=""> {{v.teachers_list[0].teacher_name}}</p>
               <p class="p3"><span class="ss">{{v.sales_num}}已报名</span> <span class="ss1">{{v.price|number() }}</span></p>

            </li>
        </ul>
          

    </div>    
    
    <!-- <div class="jp"  >
         <p class="s1">
        <span>

        </span>
        {{item.channel_info.name}}
        推荐课程
    </p>
        <ul>
            <li v-for="(v,i) in item.list" :key="i" @click="cc(v.id)">
               <p class="p1">{{v.teacher_name}}</p>
               <span class="s1">{{v.ks}}</span>
               <p class="p2"><img :src="v.img" alt=""> {{v.name}}</p>
               <p class="p3"><span class="ss">{{v.num}}</span> <span class="ss1">{{v.jj}}</span></p>
            </li>
        </ul>
    </div> -->
    
    <div class="jp1">
        <p class="s1">
        <span>

        </span>
        <!-- 明星讲师 -->
    </p>
        <ul  v-if="item.channel_info.type==4">
            <li v-for="(v,i) in item.list" :key="i" @click="open">
                <div>
                    <img :src="v.teacher_avatar" alt="">
                </div>
               <div class="d1">
                   <p class="p1">{{v.teacher_name}} <span>{{v.level_name}}</span></p>
                   <p class="p2">{{v.introduction}}</p>
               </div>
                
            </li>
        </ul>
      </div>
    </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
// import axios from "axios"
export default {
    name:"Xl",
     components:{Footer},
    data(){
        return{
            //轮播图
            add:[],
            //名师阵容
            arr:[],
            //精品课程
            arr1:[],
            arr2:[],

            arr3:[],
            arr4:[]
        }
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
     methods: {
      open() {
//          this.$alert('<strong><img src="xlimg/微信图片_20200707110852.png" alt=""  width="100%">  <a href="http://localhost:8080/#/Czp/Czp_E1"><button style=" height: 0.66rem;    margin-left: 0.36rem; background: #eb6100; color: #fff;  width: 3rem; font-size: 0.26rem;font-weight: 400; border-radius: 5.33333vw;">立刻登录</button></a>', {
//           dangerouslyUseHTMLString: true,
// showConfirmButton:false
//
//         });
      },
      cc(v){
            this.$router.push({path:`/Xlrl/${v}`})
      }
    },
    mounted(){
        // this.$axios.get("data.json").then((res)=>{
        // })
         this.$axios.get("https://www.365msmk.com/api/app/banner").then((res)=>{
            //  console.log(res.data)
            this.add=res.data.data
        })
           this.$axios.get("https://www.365msmk.com/api/app/recommend/appIndex").then((res)=>{
            console.log(res.data.data)
            // console.log(res.data.data[1].list)
            this.arr=res.data.data
            // this.arr1=this.arr.filter((e)=>{
            //     return e.channel_info.type==1
            // })
            // this.arr2=this.arr1[0].list
            // // console.log(this.arr1[0])
            // this.arr3=this.arr1
            // console.log(this.arr3)
            // this.arr1=res.data.data[1].list 
        })
        //   this.$axios.get("./xlimg/xl2.json").then((res)=>{
        //     console.log(res)
        //     this.arr1=res.data.name
        // })
        //   this.$axios.get("./xlimg/xl2.json").then((res)=>{
        //     console.log(res)
        //     this.arr2=res.data.name1
        // })
        //  this.$axios.get("./xlimg/xl2.json").then((res)=>{
        //     console.log(res)
        //     this.arr3=res.data.name2
        // })
    }
}
</script>

<style lang="scss" scoped>
.block{
    width:100%;
}
.content{
    background: #f0f2f5;
    img{
        display: block;
    }
}
    .nav{
        width: 100%;
         position: relative;
        left: 0;
        top: -0.42rem;
        z-index: 1000;
        ul{
            width: 100%;
            display: flex;
        li{
           width:2.05rem ; 
           height: 2.08rem;
           background: #fff;
            margin-left: 0.34rem;
            border-radius: 10%;
        img{
               width: 0.44rem;
               height: 0.44rem;
                margin-left: 0.80rem;
                margin-top: 0.56rem;
            }
            p{  
                text-align: center;
                margin-top: 0.3rem;
                font-size: 0.24rem;
                font-weight: 400;
                color: #8c8c8c;
            }
        }
    }
    }
    .bus{
        width: 100%;
    margin-bottom: 0.44rem;
        ul{
            width: 7.16rem;
          margin-left: 0.2rem;
            li{  
                width: 100%;
                height: 1.73rem;
                background: #fff;
                 margin-top: 0.2rem;
                 display: flex;
                img{
                width: 0.80rem;
            margin-left: 0.3rem;
            height: 0.80rem;
             margin-top: 0.4rem;
            border-radius: 50%;
            flex: none;
        }
        span{
            display: block;
        }
        span:nth-of-type(1){
    font-size: 0.28rem;
    color: #595959;
    margin-top: 0.44rem;
    margin-left: 0.24rem;
        }
        span:nth-of-type(2){

    font-size: 0.24rem;
 margin-left: 0.24rem;
     margin-top: 0.24rem;
    color: #b7b7b7;
     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

        }
            }
        }

    }
   .s1{
           font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #595959;
    position: relative;
   top: -0.1rem;
  margin-left: 0.56rem;
  

    font-size: 0.3rem;
    span{
            position: absolute;
  

    left: -0.2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.05rem;
  
    height: 0.32rem;
    background: #eb6100;
    }
   
   }
 .jp{
     width: 100%;
     margin-top: 0.32rem;
         margin-bottom: 0.72rem;
     ul{
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
                     line-height:0.88rem;
                   .ss{
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

      }
.jp1{
    width: 100%;
    ul{
        width: 100%;
        li{
            width: 7.1rem;
            height: 1.64rem;
            background: #fff;
            margin-left: 0.2rem;
            display: flex;
            margin-top: 0.2rem;
           
            img{
                width: 0.8rem;
                height: 0.8rem;
                 margin-top: 0.42rem;
                 margin-right: 0.25rem;
                  margin-left: 0.3rem;
            }
            .d1{
                   margin-top: 0.42rem;
                       font-family: PingFangSC-Regular;
                     font-weight: 400;
                   .p1{
                           color: #595959;
                           font-size: 0.3rem;
                                margin-bottom: 0.2rem;
                           span{
                                   color: #ea7a2f;
                           }
                   }
                   .p2{
                           color: #b7b7b7;
                             font-size: 0.24rem;
                              text-overflow: ellipsis;
                                overflow: hidden;  
                                text-overflow: ellipsis;  
                                display: -webkit-box;  
                                -webkit-line-clamp: 3;  
                                -webkit-box-orient: vertical; 
                             
                   }
            }

        }
    }
}

</style>