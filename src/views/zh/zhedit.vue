<template>
    <div>
        <header>
            <button @click="send()">＜</button>
            <h3>课程详情</h3>
            <img src="/zhimg/zh6.gif" alt="">
        </header>
        
        <button class="btn1" @click="edit()">
		    <span v-show="flag">收藏</span>
		    <span v-show="!flag">取消收藏</span>
		</button>
             <!-- 数据渲染 -->
		<div class="item-1">
			 <ul>
				<li v-for="(item,key) in add" :key="key">
					        <a href="#">{{item.aa}}</a>
                            <b>{{item.ee}}</b>
                            <div class="div1">
                                <i>{{item.dd}}</i>
                                <u>{{item.ee}}</u>
                            </div>
                            <p>{{item.bb}}</p>
				</li>
			</ul>
		</div>
        <div class="div2"></div>
        <div class="item-2">
            <p class="p1">教学团队</p>
            <ul>
                <li v-for="(item,key) in add" :key="key">
                    <img :src="item.img2" alt="">
                    <a href="#">{{item.cc}}</a>
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
                <li v-for="(item,key) in add" :key="key">
                    <div class="div3">
                         <span>{{item.ff}}</span>
                         <a href="#">第一讲第一课时</a>
                    </div>
                    <p>{{item.cc}}{{item.bb}}</p>
                </li>
             </ul>
         </div>
         <div class="item-5">
             <ul>
                 <li v-for="(item,key) in add" :key="key">
                     <img :src="item.img3" alt="">
                 </li>
             </ul>
         </div>
         <div class="div4">
             立即报名
         </div>
    </div>
</template>
<script>
export default {
    name:"Edit",
    data(){
        return{
            // 这里是对象
			obj:{},
            flag:"",
            arr:[],
            add:[]
        }
    },
     created(){
	 // 接受的是仓库的数据list
      var list=this.$route.query.id
      console.log(list)
	// 将仓库的数据保存到arr
     this.arr=this.$store.state.list
       console.log(this.arr) 
	 // 根据ID得到键值
	var index=this.arr.filter((item)=>{
		return item.id==list
      })
       console.log(index)
    //    将帅选的数据存到add中
       this.add=index
       console.log(this.add)
	//  //    找到ID在localoage中的索引
	var col=JSON.parse(localStorage.getItem("save"))||[]
		var k=col.findIndex((item)=>{
			 return item.id==list
         })
			// 如果找到这个值
			if(k>=0){
				this.flag=false
			}else{
				 this.flag=true
			 }
				 },
			methods:{
				 send(){
				this.$router.go(-1)
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
                color: black; 
                margin-left: 0.3rem;
                 margin-top: 0.2rem;
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
                color: black;
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
    height: 3rem;
    p{
        margin-left: 0.3rem;
        margin-top: 0.3rem;
    }
    ul{
        width: 100%;
        height: 100%;
        li{
            width: 100%;
            height: 100%;
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
                   color: black;
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
</style>