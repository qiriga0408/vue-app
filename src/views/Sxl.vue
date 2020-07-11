<template>
    <div id="shopping">
        <div class="content">
            <p>约课记录</p>
          <van-tabs swipeable>
            <van-tab class="sxlvan1" title="待上课">
              <img  class="sxlimg1" src="sxlimg/1.png" alt=""> 
              <h6 class="sxlh6">还没有待上课记录哦</h6>
              <router-view></router-view>
              <router-link to="/sxl/SxlYdy"><p class="dsknav">立即约课</p></router-link>
              <router-view></router-view>
            </van-tab>

            <van-tab title="已上课">
              <img  class="sxlimg1" src="sxlimg/1.png" alt=""> 
              <h6 class="sxlh6">还没有已上课记录哦</h6>
              <router-link to="/Czp/Czp_E2"><p class="dsknav">注册登录</p></router-link>
            </van-tab>


            <van-tab title="已取消">
              <img  class="sxlimg1" src="sxlimg/1.png" alt=""> 
              <h6 class="sxlh6">还没有取消上课记录哦</h6>
            </van-tab>
            
          </van-tabs>
            
             
           
              
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Shopping",
        components:{Footer},
    data(){
      return{

      }
    },
    methods:{
      
    }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
p{
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #898989;
  font-size: 0.39rem;
}

.dsktitle{
  width: 100%;
  height: 10rem;
  background: #f0f2f5;
} 
.sxlimg1{
  width: 2.2rem;
  height: 2rem;
  margin-top: 1.2rem;
  margin-left: 2.6rem;
 
}
.dsknav{
    width: 1.8rem;
    height: 0.5rem;
    background: #eb6100;
    margin-left: 2.8rem;
    margin-top: 0.2rem;
    color: white;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.23rem;
}
.sxlh6{
  text-align: center;
  color: gray;
  font-size: 0.22rem;
  margin-top: 0.1rem;
}

</style>