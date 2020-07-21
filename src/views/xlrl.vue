<template>
<div>
    <header :class="config?'he':''">
        <span><img src="xlimg/555.jpg" alt="" class="ss1" @click="fh"></span>
        <span v-show="!config">课程详情</span>
        <div v-show="config">
            <span>课程介绍</span>
             <span>课程大纲</span>
              <span @click="com">课程评论</span>
        </div>
        <span><img src="xlimg/999.jpg" alt="" @click="showPopup" class="ss"></span> 
    </header>
     <van-popup v-model="show">
            <p>分享</p>
            <div>
                <qriously :value="initQCode" :size="155" style="text-align:center;margin-top:10px;"></qriously>
                 <!-- <canvas id="canvas" ref="canva" class="qc"></canvas> -->
            </div>
        </van-popup>
    <div class="nav">
            <ul>
                <!-- <li v-for="(item,key) in arr1" :key="key">

                    <p class="p1">{{item.title}}
                        <span class='el-icon-star-off' v-if="ss" @click="ss1"></span>
                        <span class='el-icon-star-on' v-if="!ss" @click="ss1"></span>
                    </p>
                    <p class="p2">{{item.price|number()}}</p>
                    <p class="p3">共{{item.total_periods}}课时|{{item.sales_num}}已报名</p>
                </li> -->
                <li v-for="(item,key) in arr1" :key="key">
                
                    <p class="p1">{{item.title}}   
                          <span class='el-icon-star-off' v-show="ss2==0"  @click="ss1(item)"></span>
                        <span class='el-icon-star-on'    v-show="ss2==1" @click="sss(item)"></span>

                    <!-- <span class="el-icon-star-on"></span> -->

                     </p>

                      <p class="p2">{{item.price|number()}}</p> 
                    <p class="p3">共{{item.total_periods}}课时|{{item.sales_num}}已报名</p> 
                 </li> 
           

        </ul>
    </div>
    <div class="d1">
            <div class="nav">
                <p>教学团队</p>
         <ul>
                <li v-for="(v,i) in arr2" :key="i">
                <img :src="v.avatar" alt="">
                    <span>{{v.teacher_name}}</span>
                </li>
        </ul>
            </div>

        </div>
        <div class="d2">
            <div class="nav">
            <p>课程介绍</p>
                <li v-for="(v,i) in arr1" :key="i">

                <span v-html="v.course_details"></span>
            </li>
            </div>

        </div>
        <div class="d3">
            <div class="nav">
            <p>课程大纲</p>
                <li v-for="(v,i) in arr1" :key="i">

                <span v-html="v.course_details"></span>
            </li>
            </div>
            <i class="o"></i>
        </div>
        <div class="d4">
            <div class="nav">
            <p ref="comment">课程评论</p>
            <img src="xlimg/微信图片_20200707160813.png" alt="">

            </div>

        </div>
        <footer  @click="hh()"  v-show=" this.$store.lj" class="f" >立即报名</footer>
         <footer  @click="hh()"  v-show=" this.$store.lj" class="f" >立即学习</footer>
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
              arr3:[],
        ss:true,
        ss2:0,
        ms:"",
        shoucang_id:'',
        sw:true,
        config:false,
        lj:'',
        isbuy:"",
         // 分享弹出框
             show: false,
        }

    },
    created(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
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
    },
    methods:{
         showPopup() {
                      this.show = true;
                         let id=this.$route.query.id;
                      let type=this.$route.query.type;
                    console.log(this.$route.query.id)
                    console.log(this.$route.query.type)
                        this.initQCode = `https://wap.365msmk.com/course-detail?id=${id}&courseType=${type}`;
                    // })
                    },
    hh(){
  
        // alert("222")
        this.$http
        .post("api/app/order/downOrder", {
          shop_id: this.id,
          type: 5
        }).then((res)=>{
    // console.log(res)

                    this.$axios.get(`http://120.53.31.103:84/api/app/courseInfo/basis_id=${this.id}`).then((res)=>{
            console.log(res.data.data.info.is_buy)

            // if(){
         
            // }
        })
      
})
    },
        fh(){
            this.$router.go(-1)
        },

        // ss1(){
        //     this.ss=!this.ss

        async ss1(v){ 
     
          let { data:res } = await this.$axios.post(`http://120.53.31.103:84/api/app/collect/`,{
        course_basis_id:this.id,
        type:1   
})
// this.ms=res.data
          console.log(res)
     this.$axios.get("http://120.53.31.103:84//api/app/courseInfo/basis_id="+this.id).then((data)=>{
               this.ss2=data.data.data.info.is_collect
                    // console.log(this.ss2) 
               
     })   
    
       

  
        },
                handleScrollx() {
          console.log('滚动高度', window.pageYOffset)
          this.config=window.pageYOffset>30
        //   console.log('距离顶部高度', this.$refs.obtain.getBoundingClientRect().top)
        },
        com(){
            this.$refs.comment.scrollIntoView()
        },
       async sss(v) {

                let {data:res}=  await this.$axios.put(`http://120.53.31.103:84/api/app/collect/cancel/${this.shoucang_id}/1`)
                               
                   this.$axios.get("http://120.53.31.103:84/api/app/courseInfo/basis_id="+this.id).then((data)=>{
       
                    this.ss2=data.data.data.info.is_collect
                    //  console.log(this.ss2) 


     })   
      
       
        },
        jj(){
              this.id=this.$route.query.id
        // console.log(this.id)
          this.$axios.get("http://120.53.31.103:84/api/app/courseInfo/basis_id="+this.id).then((res)=>{
            // console.log(res) 
         
             this.shoucang_id=res.data.data.info.collect_id
                    //  console.log(this.shoucang_id)

           this.arr1.push(res.data.data.info) 
    
            // console.log(this.arr1)
        //    console.log(this.arr2)
        this.arr2.push(res.data.data.teachers[0])
          this.arr3=this.arr1

        }
          )}
},
filters:{
    nuSmber(val){
            if(val == 0){
                return "免费";
            }else{
                return `￥${(val/100).toFixed(2)}`;
            }
            return val;
        }
    },

// mounted(){
//         this.id=this.$route.query.id
//         // console.log(this.id)
//         this.$axios.get("https://www.365msmk.com/api/app/courseInfo/basis_id="+this.id).then((res)=>{
//             console.log(res)
//             this.arr1.push(res.data.data.info)
//             console.log(this.arr1)
// console.log(this.arr2)
//         this.arr2.push(res.data.data.teachers[0])

//         })

 mounted(){
      window.addEventListener('scroll',this.handleScrollx,true)
         this.jj()
                         
    this.$axios.get("http://120.53.31.103:84/api/app/courseInfo/basis_id="+this.id).then((data)=>{
       
                    this.ss2=data.data.data.info.is_collect
                    //  console.log(this.ss2) 
  this.arr1.is_collect= this.ss2

     }) 

    },
    updated(){
    

    },
   
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
    .he{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
    }
</style>