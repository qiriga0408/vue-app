<template>
    <div id="my">
        <div class="top"></div>
        <div class="login">
            <div class="login_top">
                <label for="">
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              
                    <router-link to="/Czp/Czp_E2" tag="span">{{ss}}</router-link>
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
                <img src="../../../public/czpimg/E1/E1_001.jpg" alt="" />
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
                    <li><img src="../../../public/czpimg/E1/E1_002.jpg" alt=""><a>我的作业</a></li>
					<li><img src="../../../public/czpimg/E1/E1_003.jpg" alt=""><a>关注的老师</a></li>
					<router-link to="/Czp/Czp_E3" tag="li"><img src="../../../public/czpimg/E1/E1_004.jpg" alt=""><a>我的收藏</a></router-link>
					<router-link to="/Czp/Czp_E4" tag="li"><img src="../../../public/czpimg/E1/E1_005.jpg" alt=""><a>我的下载</a></router-link>
                </label>
            </ul>
            <ul>
                <p>订单相关</p>
                <label for="">
					  <router-link to="/Czp/Czp_E6" tag="li"><img src="../../../public/czpimg/E1/E1_006.jpg" alt=""><a>我的订单</a></router-link>
					  <router-link to="/Czp/Czp_E7" tag="li"><img src="../../../public/czpimg/E1/E1_007.jpg" alt=""><a>收货地址</a></router-link>
                </label>
            </ul>
            <ul>
                <p>我的账户</p>
                <label for="">
					<li><img src="../../../public/czpimg/E1/E1_008.jpg" alt=""><a>优惠卡</a></li>
					<li><img src="../../../public/czpimg/E1/E1_009.jpg" alt=""><a>学习卡</a></li>
					<li><img src="../../../public/czpimg/E1/E1_010.jpg" alt=""><a>会员卡</a></li>
                </label>
            </ul>
            <ul>
                <p>自助服务</p>
                <label for="">
					<li><img src="../../../public/czpimg/E1/E1_011.jpg" alt=""><a>我的消息</a></li>
					<li><img src="../../../public/czpimg/E1/E1_012.jpg" alt=""><a>意见反馈</a></li>
					<li><img src="../../../public/czpimg/E1/E1_013.jpg" alt=""><a>在线客服</a></li>
					<router-link to="/Czp/Czp_E10" tag="li"><img src="../../../public/czpimg/E1/E1_014.jpg" alt=""><a>设置</a></router-link>
                </label>
            </ul>
        </div>
    </div>
</template>
<script>

    // import Footer from '../../components/footer'

    export default {
        name:"Czp_E1",
        data(){
            return{
                ss:window.localStorage.getItem('mobile')
            }
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
            height: 2.25rem;
            background: #FB5500;
            border-radius: 0% 0% 45% 45%;
            position: absolute;
        }
        .login{
            width: 90%;
            height: 2.85rem;
            box-shadow: darkgrey 5px 5px 5px 5px;
            background: white;
            border-radius: 0.1rem;
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
                        margin: 0.3rem;
                    }
                    span{
                        color: #333333;
                        font-size: 0.14rem;
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
                            font-size: 0.18rem;
                        }
                        span{
                            width: 100%;
                            color: #333;
                            font-size: 0.14rem;
                        }
                        a{
                            width: 100%;
                            text-decoration: none;
                            color: #ABABAB;
                            font-size: 0.12rem;
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
            border-radius: 0.45rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .nav_left{
                img{
					width: 0.65rem;
					height: 0.65rem;
					background-color: #FF7906;
				}
            }
            .nav_center{
                span{
                    display: block;
                    font-size: 0.14rem;
                    color: white;
                }
                a{
                    font-size: 0.12rem;
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
            margin-top: -0.8rem;
            p{
                color: black;
                margin: 0.15rem auto;
                font-size: 0.24rem;
            }
            ul{
                width: 90%;
                height: 1.5rem;
                margin: 0.75rem auto;
                label{
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    text-align: center;
                    border-bottom: 1px #ddd solid;
                    img{
                        width: 0.32rem;
						height: 0.32rem;
                    }
                    a{
                        display: block;
                        font-size: 0.12rem;
                        color: #656565;
                    }
                }
            }
        }
    }
</style>