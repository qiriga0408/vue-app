<template>
    <div id="fenlei">
      <!-- 头部标签 -->
      <header>
              <h3>特色课</h3>
              <span class="span1">
                <img src="zhimg/zh1.gif" alt="">
              </span>     
      </header>
      <!-- 导航条 -->
        <div class="zhitem-1">
          <ul>
            <li  @click="add()">
              分类
              <img src="zhimg/zh4.gif" alt="">
            </li>
            <li>
              排序
               <img src="zhimg/zh4.gif" alt="">
            </li>
            <li>
              筛选
               <img src="zhimg/zh4.gif" alt="">
            </li>
          </ul>
        </div>
                <van-popup
                            v-model="flag"
                            position="top"
                            :style="{ height: '30%' }"
                            >
                            <span class="span2" @click="qx()">X</span>
                            <div class="item-2">
                              <p>年级</p>
                              <div class="div1">
                                <ul>
                                  <li>初一</li>
                                  <li>初二</li>
                                  <li>初三</li>
                                  <li>高一</li>
                                </ul>
                              </div>
                            </div>
                </van-popup>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Zh",
    components:{Footer},
    data(){
      return{
        flag:false,
      }
    },
    methods:{
      add(){
        this.flag=true
      },
      qx(){
        this.flag=false
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
.div1{
  width: 100%;
  height: 0.8rem;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    li{
      width: 1.6rem;
      text-align: center;
      line-height: 0.8rem;
      background: #F5F5F5;
    }
   
  }
}

</style>