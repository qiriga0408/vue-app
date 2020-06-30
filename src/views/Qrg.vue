<template>
    <div id="fenlei">
        <div class="header">
            练习
        </div>
        <div class="content">
            <div class="content-one">
                <div class="content-one-y">
                    <div class="content-one-y-img">
                        <img src="/qrgImg/qrg-1.png" alt="">
                        <p>考点专练</p>
                    </div>
                    <div class="content-one-y-img">
                        <img src="/qrgImg/qrg-2.png" alt="">
                        <p>套卷练习</p>
                    </div>
                    <div class="content-one-y-img">
                        <img src="/qrgImg/qrg-3.png" alt="">
                        <p>仿真模考</p>
                    </div>
                    <div class="content-one-y-img">
                        <img src="/qrgImg/qrg-4.png" alt="">
                        <p>错题练习</p>
                    </div>
                  
                </div>
                <div class="content-one-t">
                    <div class="content-one-t-img">
                        <img src="/qrgImg/qrg-5.png" alt="">
                        <p>测评记录</p>
                    </div>
                    <div class="content-one-t-img">
                        <img src="/qrgImg/qrg-6.png" alt="">
                        <p>习题收藏</p>
                    </div>
                </div>
            </div>
            <div class="content-two">
                <p class="p">进期模考</p>
                <div class="content-two-sort">
                    <p>默认排序</p>
                    <p>时间</p>
                </div>
                <div class="content-two-img">
                    <img src="/qrgImg/qrg-7.png" alt="">
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Qrg",
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
.content{
    width: 100%;
    height: auto;
    background: rgb(216, 219, 216);
    position: absolute;
    top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content-one{
        width: 95%;
        height: 4.5rem;
        background:white;
        margin-top: .15rem;
        .content-one-y{
            width: 100%;
            height: 50%;
            // background: salmon;
            display: flex;
            justify-content: space-around;
            .content-one-y-img{
                width: 25%;
                height: 100%;
                // background: darkmagenta;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img{
                    width: 50%;
                    height: 50%;
                }
                p{
                    // font-size: .3rem;
                    color: grey;
                }
            }
        }
        .content-one-t{
            width: 100%;
            height: 50%;
            // background: seagreen;
            display: flex;
            .content-one-t-img:nth-of-type(2){
                margin-left: .07rem;
            }
            .content-one-t-img{
                width: 25%;
                height: 100%;
                // background: darkmagenta;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                
                img{
                    width: 40%;
                    height: 40%;
                }
                p{
                    // font-size: .16rem;
                    color: grey;
                }
            }
        }
    }
    .content-two{
        width: 100%;
        height: auto;
        background: white;
        margin-top: .2rem;
        display: flex;
        flex-direction: column;
        // align-items: center;
        .p{
            margin-left: .15rem;
            color: grey;
            margin-top: .1rem;
            font-size: .3rem;
        }
        .content-two-sort{
            width: 95%;
            height: 1.5rem;
            // background: fuchsia;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: .2rem;
            p{
                font-size: .3rem;
                color: grey;
            }
            p:hover{
                color: orange;
            }
            
        }
        .content-two-img{
            width: 100%;
            height: 4.5rem;
            // background: greenyellow;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
}
.header{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    z-index:9999;
}
</style>