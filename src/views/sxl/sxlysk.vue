<template>
  <div class="sxldsk">
    <div class="dsktitle">
         <img src="sxlimg/1.png" alt="">
             <h6 class="sxlh6">还没有取消上课记录哦</h6>
            <router-link to="/Czp/Czp_E2">   <p class="dsknav">注册/登录</p>   </router-link>

    </div>
       <div><router-view ></router-view></div>
  </div>
</template>

<script>


export default {
     name:"sxldsk",
    
    data(){
        return{
           
        }
    },
    mounted() {
       
        },

}   
</script>

<style  lang="scss" scoped>
.dsktitle{
  width: 100%;
  height: 1000000rem;
  background: #f0f2f5;
  img{
    width: 2.3rem;
    height: 2rem;
    margin-left: 2.6rem;
    margin-top: 2.2rem;
   }
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
}

.sxlh6{
  text-align: center;
  color: gray;
  font-size: 0.22rem;
  margin-top: 0.1rem;
}

</style>