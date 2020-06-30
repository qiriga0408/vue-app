<template>
    <div id="shouye">
        <div class="content">
   <div class="block">
    <el-carousel height="399px"  width="100%">
      <el-carousel-item v-for="(v,i) in add" :key="i">
        <img :src="v" alt="" width="100%" height="100%" >
      </el-carousel-item>
    </el-carousel>
  </div>
   <div class="nav">
        <ul>
            <li>
                <img src="xlimg/未标题-1.jpg" alt="">
            </li>
            <li>  <img src="xlimg/未标题-2.jpg" alt=""></li>
            <li>  <img src="xlimg/未标题-3.jpg" alt=""></li>
        </ul>
    </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
import axios from "axios"
export default {
    name:"Xl",
     components:{Footer},
    data(){
        return{
            list:[],
            add:[]
        }
    },
    mounted(){
        this.$axios.get("data.json").then((res)=>{
            console.log(res)
        })
         this.$axios.get("xlbunner.json").then((res)=>{
            console.log(res.data.img)
            this.add=res.data.img
        })
    }
}
</script>

<style lang="scss" scoped>
.block{
    width: 100%;

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
        display: flex;
       
        img{
               width: 0.44rem;
               height: 0.44rem;
             
            }
        }
    }

    }
   
</style>