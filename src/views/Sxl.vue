<template>
    <div id="shopping">
        <div class="content">
              <div class="sxl-title">
                <p>约课记录</p>
              </div>
              <div class="sxlnav">
                <ul>
                  
                 <router-link to="/Sxl/Sxldsk">   <li>待上课</li>   </router-link>
                  
                 <router-link to="/Sxl/Sxlysk">   <li>已上课</li>   </router-link>

                 <router-link to="/Sxl/Sxlyqs">   <li>已取消</li>   </router-link>
                  
                </ul>
              </div>
            <div><router-view ></router-view></div>
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
.sxl-title{
  width: 100%;
  height: 0.56rem;
  border: 0.01rem solid #f7f7f9;  
  p{
    font-size: 0.23rem;
    text-align: center;
    line-height: 0.56rem;
    color: #898989;
    font-weight: bolder;
  }
}
.sxlnav{
  width: 100%;
  height: 0.55rem;
  border: 0.01rem solid #f7f7f9;
  ul{
    width: 100%;
    height: 0.55rem;
    display: flex;
    justify-content: space-around;  
    align-items: center;
    li{
      font-size: 0.17rem;
      color: #7d7e80;
      
    }
    li:hover{
      color: #f0863b;
    }
  }
}
</style>