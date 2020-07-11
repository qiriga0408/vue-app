<template>
  <div>
      <header>
          <span><img src="xlimg/555.jpg" alt="" class="ss1" @click="fh"></span>
          课程详情
          <span><img src="xlimg/999.jpg" alt="" class="ss"></span>
         
      </header>
      <div class="nav">
            <ul>
            <li v-for="(v,i) in arr2" :key="i">
                <p class="p1">每时每课特级教师-{{v.nr}} <span class='el-icon-star-off' v-if="ss" @click="ss1"></span> <span class='el-icon-star-on' v-if="!ss" @click="ss1"></span></p>
                <p class="p2">{{v.jj}}</p>
                <p class="p3">{{v.ks}}|{{v.num}}</p>
           
            </li>
        </ul>
      </div>
        <div class="d1">
            <div class="nav">
                <p>教学团队</p>

                  <ul>
            <li v-for="(v,i) in arr2" :key="i">
               <img :src="v.img" alt="">
                <span>{{v.name}}</span>
            </li>
        </ul>
            </div>
            
        </div>
          <div class="d2">
            <div class="nav">
               <p>课程介绍</p>
                <li v-for="(v,i) in arr2" :key="i">
            
                <span>{{v.nr}}</span>
            </li>
            </div>
            
        </div>
         <div class="d3">
            <div class="nav">
               <p>课程大纲</p>
                <li v-for="(v,i) in arr2" :key="i">
            
                <span>{{v.nr}}</span>
            </li>
            </div>
            <i class="o"></i>
        </div>
         <div class="d4">
            <div class="nav">
               <p>课程评论</p>
             <img src="xlimg/微信图片_20200707160813.png" alt="">
         
            </div>
      
        </div>
          <el-footer class="f">立即报名</el-footer>
  </div>
</template>

<script>
// import axios from "axios"
export default {
    data(){
        return{
            id:"" ,
            arr1:[],
             arr2:[],
        ss:true

        }
        
    },

    methods:{
        fh(){
            this.$router.go(-1)
        },
        ss1(){
            this.ss=!this.ss
       
        }
},
 mounted(){
        this.id=this.$route.params.id

          this.$axios.get("./xlimg/xl2.json").then((res)=>{
            console.log(res)
            if(this.id<=6){
  this.arr1=res.data.name

            var ss=this.arr1.filter((e)=>{
                return e.id==this.id
            })
    console.log(this.id)

         this.arr2=ss
            console.log(this.arr2)
       
            }else{
                this.arr1=res.data.name1

            var ss=this.arr1.filter((e)=>{
                return e.id==this.id
            })
    console.log(this.id)

         this.arr2=ss
            console.log(this.arr2)
       
            }
          
         })
    }
}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        width: 100%;
        height: 0.86rem;
        justify-content: space-between;
        font-size: 0.36rem;
      margin-top: 0.28rem;
      
        .ss1{
          width: 0.22rem;
          height: 0.35rem;
          margin-left: 0.36rem;
        }
         .ss{
          width: 0.33rem;
          height: 0.39rem;
margin-right: 0.23rem; 
          
        }
    }
    .nav{
        width: 6.90rem;
        margin: 0 auto;
        .p1{
                font-size: 0.31rem;
    font-family: PingFangSC-Medium;
    font-weight: 400;
    display: flex;
   
        }
        .p2{
                font-family: PingFangSC-Medium;
    color: #eb6100;
        font-weight: 500;
            line-height: 8.53333vw;
             font-size: 0.32rem;
        }
        .p3{
            font-family: PingFangSC-Regular;
    font-weight: 400;
        color: rgba(0,0,0,.45);
            line-height: 8vw;
              font-size: 0.28rem;
        }
    }
    .el-icon-star-off{
        font-size: 0.38rem;

    }
    .el-icon-star-on{
         font-size: 0.48rem;
         color: #e84a01;
    }
    .d1{
        width: 100%;
        height: 2.90rem;
        border-top: 30px solid #f0f2f5;
        border-bottom: 30px solid #f0f2f5;
        margin-top: 0.28rem;
        p{
                font-family: PingFangSC-Medium;
            font-weight: 500;
             font-size: 0.3rem;
            margin-top: 0.3rem;
        }
        img{
            width: 0.8rem;
            height: 0.8rem;
                border-radius: 50%;
                  margin-top: 0.4rem;
                  margin-left: 0.3rem;

        }
        span{
                font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #595959;
    font-size: 0.24rem;
    display: block;
    margin-left: 0.3rem;
    margin-top: 0.16rem;
        }
    }
    .d2{
          width: 100%;
        height: 1.86rem;
     
        border-bottom: 30px solid #f0f2f5;
        p{
                font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;
    font-size: 0.3rem;
    margin-top: 0.3rem;
        }
        span{
            font-size: 0.25rem;
                        font-family: PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
            margin-top: 0.28rem;
            display: block;
            margin-left: 0.05rem;
        }
     
    }

    .d3{
          width: 100%;
        height: 2.38rem;
         position: relative;
        border-bottom: 30px solid #f0f2f5;         
           font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;

        p{
    
    font-size: 0.3rem;
    margin-top: 0.3rem;
        }
        span{
            display: block;
            width: 6rem;
            color: #535353;
            font-size: 0.22rem;
            margin-left: 0.56rem;
                line-height: 8vw;
                margin-top: 0.2rem;
        }
       
     
    }
    .o{
            content: "";
    position: absolute;
 left: 0.56rem;
    top: 50%;
    transform: translateY(-50%);
    width: .10667rem;
    width: 1.06667vw;

    height: 1.06667vw;
    border-radius: 50%;
    background: #eb6100;
    }
     .d4{
          width: 100%;
 
        border-bottom: 30px solid #f0f2f5;         
           font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;

        p{
    
    font-size: 0.3rem;
    margin-top: 0.3rem;
        }
      
     img{
       margin-left: 1.8rem;
     }  
     
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