<template>
    <div id="fenlei">
      <!-- 头部标签 -->
      <header>
              <h3>特色课</h3>
              <span class="span1">
                <img src="zhimg/zh1.gif" alt="" @click="seach()">
              </span>     
      </header>
        <van-dropdown-menu>
              <van-dropdown-item title="分类" >
                   <div class="item-2">
                              <p>年级</p>
                              <div class="div1">
                                <ul>
                                  <li>初一</li>
                                  <li>初二</li>
                                  <li>初三</li>
                                  <li>高一</li>
                                  <li>高二</li>
                                </ul>
                              </div>

                            <p class="p1">学科</p>
                              <div class="div1">
                                <ul>
                                  <li>语文</li>
                                  <li>数学</li>
                                  <li>英语</li>
                                  <li>物理</li>
                                  <li>化学</li>
                                </ul>
                              </div>
                              <div class="div2">
                                  <van-button type="default">重置</van-button>
                                  <van-button type="warning" @click="qx()">确定</van-button>
                              </div>
                              
                            </div>
              </van-dropdown-item>
              <van-dropdown-item v-model="value2" :options="option2" />

              <van-dropdown-item title="筛选">
                    <div class="item-6">
                        <ul>
                          <li v-for="(item,key) in option3" :key="key">
                            {{item.text}}
                          </li>
                        </ul>
                    </div>
              </van-dropdown-item>
        </van-dropdown-menu>
      
               
                <div class="box">
                  <div class="content">
                    <!-- 内容 加载区域-->
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="数据加载完毕"
                            @load="onLoad"
                            overlay="false"
                            >
                      <!-- 渲染数据 -->
                          <div class="item-4">
                              <ul>
                                  <li v-for="(item,key) in list" :key="key" @click="tz(item.id)">
                                          <div class="item-5">
                                              <p class="p1">{{item.aa}}</p>
                                              <img class="img1" :src="item.img1" alt="">
                                              <span>{{item.bb}}</span>
                                              <div class="div1">
                                                <img class="img2" :src="item.img2" alt="">
                                                <span>{{item.cc}}</span>
                                              </div>
                                              <hr>
                                              <p class="p2">
                                                <a href="#">{{item.dd}}</a>
                                                <b>{{item.ee}}</b>
                                              </p>
                                          </div>
                                  </li>
                              </ul>
                        </div>
		                </van-list>

                    <!-- <div id="log" @click="xf()">
                        <img src="/zhimg/zh8.png" alt="">
                    </div> -->

                  </div>
                </div>
              
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
// 引入才能拖动
import Iscroll from "iscroll"
export default {
    name:"Zh",
    components:{Footer},
    data(){
      return{
        flag:false,
        list:[],
        // 这两个是vant的list列表里的参数
			  loading: false,
			  finished: false,
			   // 这里的page必须是0
			  page:0,
			  // 控制一个页面显示几条数据和methods里的必须一致
			  number:4,
			  // 所有的JSON数据
        all:"",


        value1: 0,
        value2: 'a',
          option2: [
            { text: "排序", value: "a" },
            { text: "综合排序", value: 0 },
            { text: "最新", value: 1 },
            { text: "最热", value: 2 },
            { text: "价格从低到高", value: 3 },
            { text: "价格从高到低", value: 4 }
          ],
           option3: [
              { text: "全部", value: 0 },
              { text: "大班课", value: 2 },
              { text: "小班课", value: 3 },
              { text: "公开课", value: 4 },
              { text: "点播课", value: 5 },
              { text: "面授课", value: 7 },
              { text: "音频课", value: 8 },
              { text: "系统课", value: 9 },
              { text: "图文课", value: 10 },
              { text: "会员课", value: 1 }
          ],
          
          
      }
    },
    
    mounted(){
       document.addEventListener("touchmove",function(ev){
						ev.preventDefault()
              },{passive:false}); 
               // 实现上下拖动
			        var mscroll=new Iscroll(".box",{
			            protoType:2
              })
              
        this.$axios.get("zhdata.json").then((res)=>{
          console.log(res)
          // this.list=res.data.list
          this.all=res.data.list.length
			    this.list=res.data.list.slice(this.page,this.number);
        })
    },
    methods:{
      // 弹出层
      add(){
        this.flag=true
      },
       ad(){
        this.flag=true
      },
      qx(){
        this.flag=false
      },
         // 上拉加载
			         onLoad() {
			                setTimeout(() => {
			                    //  这里的数据和上面定义的number一致   
			                    this.page=this.page+4
			                    //  这里的数据和上面定义的number一致  
			                    this.number=this.number+4  
			                    
			                    // 获取JSON的数据
			                    this.$axios.get("zhdata.json").then((res)=>{
			                    // slice返回一个新数组截取字符串从page开始到number结束
			                var data=res.data.list.slice(this.page,this.number);
			                console.log(data)
			                    data.forEach((e)=>{
			                    // 把数据push到list
			                    this.list.push(e)
			                    })
			
			                    }) 
			
			                    // 加载状态结束
			                    this.loading = false;
			
			                // 如果list的总长度大于等于所有的JSON数据
			                    if (this.list.length >= this.all) {
			                    this.finished = true;
			                    }
			                }, 3000);
          },
          // 跳转详情
          tz(id){
            this.$router.push({path:"/zhedit",query:{id:id}})
            this.$store.commit("setData",this.list)
          },
          // 搜索跳转
          seach(){
            this.$router.push("/zhseach")
          },
          // 信封跳转
          xf(){
            this.$router.push("/zhxf")
          },
         
               
          onClick(name, title) { 
            
            },
    },
  
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
.box{
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  .content{
    min-height: 101%;
  }
}

header{
  width: 100%;
  height: 0.8rem;
  display: flex;
  h3{
    width: 86%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .span1{
    width: 14%;
    height: 0.8rem;
    display: block;
  img{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 auto;
    margin-top: 0.16rem;
  }
  }
  
}
.zhitem-1{
  width: 100%;
  height: 0.6rem;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      width: 33%;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 15px;
    }
  }
}
.span2{
  margin-left: 7rem;
}
.item-2{
  width: 100%;
  height: 7rem;
  p{
    width: 100%;
    height: 0.4rem;
    margin-top: 0.3rem;
    line-height: 0.4rem;
  }
  .p1{
    width: 100%;
    height: 0.4rem;
    margin-top: 1.6rem;
    line-height: 0.4rem;
  }
  .div1{
    width: 100%;
    height: 0.8rem;
    margin-top: 0.3rem;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      li{
        width: 1.6rem;
        text-align: center;
        line-height: 0.8rem;
        background: #F5F5F5;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
      }
    
    }
  }
  .div2{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    margin-top: 1.3rem;
  }
}
.item-4{
  width: 7.5rem;
  ul{
    width: 100%;
    height: 100%;
    li{
      height: 3.5rem;
      background: #F0F2F5;
      .item-5{
        width: 6.5rem;
        height: 3rem;
        background: #FFFFFF;
        margin-left: 0.44rem;
        border-radius: 10px;    
        .p1{
          font-size: 0.36rem;
          margin-left: 0.3rem;
          padding-top: 0.3rem;
        }
        .img1{
          width: 0.34rem;
          height: 0.34rem;
          padding-top: 0.11rem;
          padding-left: 0.3rem;
        }
        span{
          padding-top: -0.1rem;
          font-size: 0.28rem;
        }
        .div1{
          width: 3rem;
          height: 0.6rem;
          display: flex;
          align-items: center;
          margin-left: 0.3rem;
          margin-top: 0.3rem;
          .img2{
            display: block;
            width: 0.4rem;
            height: 0.4rem;

          }
          span{
            display: block;
            font-size: 0.3rem;
          }
        }
       .p2{
         width: 6.5rem;
         height: 0.4rem;
         display: flex;
         align-items: center;
        
         a{
           display: block;
           font-size: 0.3rem;
           margin-left: 0.3rem;
         }
         b{
          display: block;
          font-size: 0.3rem;
          margin-left: 3.7rem;
          color: #3EB21F;
         }
       }
      }
    }
  }
}
.boxx{
  position: absolute;
  top: 60px;
}
#log{
  width: 0.8rem;
  height: 0.8rem;
  position: fixed;
  left: 6rem;
  top: 10rem;
  img{
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    
  }
}
.item-6{
  width: 7.5rem;
  height: 4rem;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li{
      width: 1.6rem;
      height: 0.9rem;
      text-align: center;
      background: #eee;
      line-height: 0.9rem;
      margin-left: 0.2rem;
    }
  }
}




</style>