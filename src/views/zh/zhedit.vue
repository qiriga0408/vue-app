<template>
    <div>
        <header>
            <button @click="send()">＜</button>
            <h3>课程详情</h3>
            <img src="/zhimg/zh6.gif" @click="showPopup" alt="">
        </header>
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show">
            <p>分享</p>
            <div>
                <qriously :value="initQCode" :size="155" style="text-align:center;margin-top:10px;"></qriously>
                 <!-- <canvas id="canvas" ref="canva" class="qc"></canvas> -->
            </div>
        </van-popup>
         <!-- <section class="describe" ref="describe"></section> -->
        
        <button class="btn1" @click="edit()">
		    <span v-show="flag">收藏</span>
		    <span v-show="!flag">取消收藏</span>
		</button>
             <!-- 数据渲染 -->
		<div class="item-1">
			 <ul>
				<li v-for="(item,key) in arr" :key="key">
					        <a href="#">{{item.title}}</a>
                            <b>{{item.price|number()}}</b>
                            <div class="div1">
                                <i>{{item.total_periods|periods()}}</i>
                                <i>{{item.sales_num|num()}}</i>
                            </div>
                            <p>{{item.start_play_year|ke()}}</p>
				</li>
			</ul>
		</div>
        <div class="div2"></div>
        <div class="item-2">
            <p class="p1">教学团队</p>
            <ul>
                <li v-for="(item,key) in arr1" :key="key">
                    <img :src="item.teacher_avatar" alt="">
                    <a href="#">{{item.teacher_name}}</a>
                </li>
            </ul> 
        </div>
        <div class="div2"></div>
        <div class="item-3">
            <p>课程介绍</p>
        </div>
         <div class="div2"></div>
         <div class="item-4">
             <p>课程大纲</p>
             <ul>
                <li v-for="(item,key) in arr2" :key="key">
                    <div class="div3">
                         <span>回放</span>
                         <a href="#">{{item.periods_title}}</a>
                    </div>
                    <p>{{item.teachers.teacher_name}}{{item.start_play}}</p>
                </li>
             </ul>
         </div>
         <div class="item-5">
             <ul>
                 <!-- <li v-for="(item,key) in add" :key="key">
                     <img :src="item.img3" alt="">
                 </li> -->
             </ul>
         </div>
        <footer  @click="hh()"   class="f" >立即报名</footer>
         <footer  @click="hh()"  v-if=" this.isbuy==1" class="f" >立即学习</footer>
    </div>
</template>
<script>
// import QrCode from "qrcode";
export default {
    name:"Edit",
    data(){
        return{
            id:"",
            // 这里是对象
			obj:{},
            flag:"",
            arr:[],
            // add:[]
            arr1:[],
            arr2:[],
            isbuy:"",
            // 分享弹出框
             show: false,
              initQCode: 'http://120.53.31.103:84/api/app/courseInfo/basis_id=108'
            //  qcURL: {},
            //     config: "",
            //     arr: []
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
        },
        filterprice(val){
                if (val == 0) {
                    return "免费";
                }
                     return val;
                },
                periods(val) {
                      return "共" + val + "课时 |";
                },
                num(val) {
                       return val + "人已报名";
                },
                ke(val){
                    return "开课时间：" + val + ".03.16 18:30 - 2020.03.22 15:00"
                }
    },
     created(){
         this.ajaxdetail();
         this.ajaxdetail2();

           this.$axios.get(`http://120.53.31.103:84/api/app/courseInfo/basis_id=${this.id}`).then((res)=>{
            console.log(res.data.data.info.is_buy)
    this.isbuy=res.data.data.info.is_buy
    console.log(this.isbuy)
            // if(){
         
            // }
        })
                 if(this.isbuy==0){
            this.$store.lj=true

        }else{
            // this.lj=false
            this.$store.lj=false
        }
	 // 接受的是仓库的数据list
    //   var list=this.$route.query.id
    //   console.log(this.$route.query.course_type)
    //   console.log(list)
	// 将仓库的数据保存到arr
    //  this.arr=this.$store.state.list
    // //    console.log(this.arr) 
	//  // 根据ID得到键值
	// var index=this.arr.filter((item)=>{
	// 	return item.id==list
    //   })
    // //    console.log(index)
    // //    将帅选的数据存到add中
    //    this.add=index
    // //    console.log(this.add)
	// //  //    找到ID在localoage中的索引
	// var col=JSON.parse(localStorage.getItem("save"))||[]
	// 	var k=col.findIndex((item)=>{
	// 		 return item.id==list
    //      })
	// 		// 如果找到这个值
	// 		if(k>=0){
	// 			this.flag=false
	// 		}else{
	// 			 this.flag=true
	// 		 }
				 },
			methods:{
                  showPopup() {
                      this.show = true;
                 
                     let id=this.$route.query.id;    
                      this.id=id
                    let type=this.$route.query.type;
                    console.log(this.$route.query.id)
                    console.log(this.$route.query.type)
                    // this.$axios.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+id).then((res)=>{
                    //     this.arr.push(res.data.data.info);
                        this.initQCode = `https://wap.365msmk.com/course-detail?id=${id}&courseType=${type}`;
                    // })
                    },
                ajaxdetail(){
                    let id=this.$route.query.id
                    // let course_type=this.$route.query.course_type
                    this.$axios.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+id).then((res)=>{
                        // console.log(res.data.data.info)
                        // this.arr=res.data.data
                        this.arr.push(res.data.data.info)
                        this.arr1.push(res.data.data.teachers[0])
                        // console.log(this.arr1)

                        
                    })
                },
                ajaxdetail2(){
                    this.$axios.post("http://120.53.31.103:84/api/app/courseChapter",{
                        id:this.$route.query.id
                    }).then((res)=>{
                        console.log(res.data.data)
                        this.arr2=res.data.data
                    })
                },
				 send(){
				this.$router.go(-1)
             },
              hh(){ 

         let id=this.$route.query.id
        this.$http.post("api/app/order/downOrder", {
          shop_id: id,
          type: 5
        }).then((res)=>{
    console.log(res)

         this.$axios.get(`http://120.53.31.103:84/api/app/courseInfo/basis_id=${id}`).then((res)=>{
            console.log(res.data.data.info.is_buy)

            // if(){
         
            // }
        })
      
})



       

    },
				 edit(){
				// 将接收到的数据保存到变量obj中 
                var obj={"id":this.add}
				 //    本地存储获取
			var arr=JSON.parse(localStorage.getItem("save"))||[]
				if(this.flag){
				// 收藏
				// 将obj的数据添加到arr中
				arr.push(obj)
						               
				}else{
				// 取消收藏
				var index=arr.findIndex((item)=>{
					 return item.id==this.obj.id
				 })
					arr.splice(index,1)
				 }
				 // 数据添加后需要保存到本地存储
					localStorage.setItem("save",JSON.stringify(arr))
					this.flag=!this.flag
				 }
					 }

}
</script>
<style lang="scss" scoped>
 body,h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}  
.van-popup--center{
    width: 70%;
    height: 3.3rem;
    border-radius: 10px;
    // background: forestgreen;
    p{
        font-size: .4rem;
        color: gray;
        text-align: center;
        margin-top: .2rem;
    }
}
header{
    width: 7.5rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
} 
.btn1{
    margin-left: 6rem;
    span{
         font-size: 0.24rem;
    }
   
}
.item-1{
    width: 7.5rem;
    height: 2rem;
    ul{
        width: 100%;
        height: 100%;
        li{
            a{
                display: block;
                font-size: 0.3rem;
                text-decoration: none;
                color: black;
                margin-left: 0.3rem;
                margin-top: 0.2rem;
            }
            b{
                display: block;
                font-size: 0.3rem;
                text-decoration: none;
                color: orange; 
                margin-left: 0.3rem;
                 margin-top: 0.2rem;
                 font-weight: 900;
            }
            .div1{
                width: 7.5rem;
                display: flex;
                align-items: center;
                margin-top: 0.3rem;
                
                i{
                width: 1.6rem;
                font-size: 0.3rem;
                text-decoration: none;
                color: gray;
                margin-left: 0.3rem;            
                 display: block;
            }
            u{
                width: 0.6rem;
                display: block;
                font-size: 0.3rem;
                text-decoration: none;
                color: orangered;       
                 margin-left: 0.3rem;
            }
            }
            p{
                 margin-left: 0.3rem;
                  margin-top: 0.2rem;
                color: grey;
                font-size: .3rem;
            }
        }
    }
}
.div2{
    width: 7.5rem;
    height: 0.2rem;
    background: #eee;
    margin-top: 0.2rem;
}
.item-2{
    width: 7.5rem;
    height: 2rem;
    .p1{
        width: 7.5rem;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-top: 0.4rem;
        margin-left: 0.3rem;
    }
    ul{
        width: 100%;
        height: 100%;
        li{
            width: 100%;
            height: 100%;
            img{
                display: block;
                width: 0.6rem;
                height: 0.6rem;
                margin-left: 0.4rem;
                margin-top: 0.2rem;
            }
            a{
                display: block;
                text-decoration: none;
                color: black;
                margin-left: 0.4rem;
                margin-top: 0.2rem;
            }
        }
    }
}
.item-3{
    width: 7.5rem;
    height: 1rem;
    p{
        margin-left: 0.3rem;
        margin-top: 0.3rem;
    }
}
.item-4{
    width: 7.5rem;
    height:auto;
    p{
        margin-left: 0.3rem;
        margin-top: 0.3rem;
    }
    ul{
        width: 100%;
        height: 100%;
        color: rgb(177, 173, 173);
        li{
            width: 100%;
            height: 1rem;
            // background: darkgreen;
           .div3{
                width: 7.5rem;
                height: 0.4rem;
                margin-left: 0.3rem;
                margin-top: 0.5rem;
               span{
                   width: 0.4rem;
                   height: 0.4rem;
                   background: #EA7A2F;
                   font-size: 0.3rem;
                   text-align: center;
                   line-height: 0.4rem;
                   color: #fff;
               }
               a{
                   margin-left: 0.4rem;
                   font-size: 0.3rem;
                   text-decoration: none;
                   color: gray;
               }
           }

        }
    }
}
.item-5{
    width: 7.5rem;
    height: 4rem;
    ul{
        width: 100%;
        height: 100%;
        li{
            width: 100%;
            height: 100%;
            img{
                width: 7.5rem;
                height: 4rem;
            }
        }
    }
}
.div4{
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
    background: #EA7A2F;
}
    .f{
        color: #fff;
            text-align: center;
            line-height: 0.84rem;
            background: #eb6100 !important;
                    font-family: PingFangSC-Medium;
    font-weight: 400 !important;
    height: 0.84rem !important;

    font-size: 0.32rem;
    }
</style>