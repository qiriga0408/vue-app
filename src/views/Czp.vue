<template>
    <div id="my">
        <div class="top"></div>
        <div class="login">
            <div class="login_top">
                <label for="">
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                    <span>登录/注册</span>
                </label>
            </div>
            <div class="login_bottom">
                <ul>
                    <li>
                        <strong>0</strong>
                        <span>我的课程</span>
                        <a>-已购买课程学习-</a>
                    </li>
                    <li>
                        <strong>0</strong>
                        <span>我的预约</span>
                        <a>-一对一老师预约-</a>
                    </li>
                    <li>
                        <strong>0</strong>
                        <span>剩余学习币</span>
                        <a>-查看剩余学习币-</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav">
            <div class="nav_left">
                <van-icon name="like-o" />
            </div>
            <div class="nav_center">
                <span>邀请好友注册APP,享多重好礼</span>
                <a>限时特惠,多邀多得</a>
            </div>
            <div class="nav_right">
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="tabs">
            <ul>
                <p>课程相关</p>
                <label for="">
                    <li><van-icon name="records" /><a>我的作业</a></li>
                    <li><van-icon name="friends-o" /><a>关注的老师</a></li>
                    <li><van-icon name="star-o" /><a>我的收藏</a></li>
                    <li><van-icon name="down" /><a>我的下载</a></li>
                </label>
            </ul>
            <ul>
                <p>订单相关</p>
                <label for="">
                    <li><van-icon name="records" /><a>我的订单</a></li>
                    <li><van-icon name="friends-o" /><a>收货地址</a></li>
                </label>
            </ul>
            <ul>
                <p>我的账户</p>
                <label for="">
                    <li><van-icon name="records" /><a>优惠卡</a></li>
                    <li><van-icon name="friends-o" /><a>学习卡</a></li>
                    <li><van-icon name="friends-o" /><a>会员</a></li>
                </label>
            </ul>
            <ul>
                <p>自助服务</p>
                <label for="">
                    <li><van-icon name="records" /><a>我的消息</a></li>
                    <li><van-icon name="friends-o" /><a>意见反馈</a></li>
                    <li><van-icon name="friends-o" /><a>在线客服</a></li>
                    <li><van-icon name="friends-o" /><a>设置</a></li>
                </label>
            </ul>
        </div>
     <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Czp",
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
#my{
    width: 100%;
    height: 100%;
    background: white;
    .top{
        width: 100%;
        height: 135px;
        background: #FB5500;
        border-radius: 0% 0% 45% 45%;
        position: absolute;
    }
    .login{
        width: 90%;
        height: 185px;
        box-shadow: darkgrey 5px 5px 5px 5px;
        background: white;
        border-radius: 10px;
        z-index: 99;
        position: relative;
        top: 50px;
        margin: 0 auto;
        .login_top{
            width: 100%;
            height: 50%;
            label{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: start;
                .van-icon{
                    margin: 30px;
                }
                span{
                    color: #333333;
                    font-size: 14px;
                }
            }
        }
        .login_bottom{
            width: 100%;
            height: 50%;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                text-align: center;
                li{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-around;
                    strong{
                        width: 100%;
                        color: #F74F14;
                        font-size: 18px;
                    }
                    span{
                        width: 100%;
                        color: #333;
                        font-size: 14px;
                    }
                    a{
                        width: 100%;
                        text-decoration: none;
                        color: #ABABAB;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .nav{
        margin: 95px auto;
        width: 95%;
        height: 56px;
        background: #FF7906;
        border-radius: 45px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .nav_left{
            .van-icon{
                color: white;
                font-size: 22px;
            }
        }
        .nav_center{
            span{
                display: block;
                font-size: 14px;
                color: white;
            }
            a{
                font-size: 12px;
                color: white;
            }
        }
        .nav_right{
            .van-icon{
                color: white;
                font-size: 22px;
            }
        }
    }
    .tabs{
        width: 100%;
        height: 100%;
        margin-top: -80px;
        p{
            color: black;
            margin: 15px auto;
            font-size: 0.24rem;
        }
        ul{
            width: 90%;
            height: 80px;
            margin: 0 auto;
            label{
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                text-align: center;
                border-bottom: 1px #ddd solid;
                .van-icon{
                    color: #FE944D;
                    font-size: 0.32px;
                }
                a{
                    display: block;
                    font-size: 12px;
                    color: #656565;
                }
            }
        }
    }
}
</style>