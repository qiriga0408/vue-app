<template>
    <div class="box">
        <header>
            <van-nav-bar title="讲师详情" left-arrow :border="false"  @click-left="onClickLeft"  />
        </header>
        <div class="nav"  v-for="(item,key) in nav1" :key="key">
            <div class="top">
                <div class="nav_left" >
                    <img :src="item.avatar" alt="" />
                    <label for="">
                        <span>{{item.teacher_name}}</span>
                        <a>{{item.level_name}}</a>
                        <label for="">
                            <i v-if="item.sex == 0">男</i>
                            <i v-if="item.sex != 0">女</i>
                        </label>
                        <strong>{{item.teach_age}}年教龄</strong>
                    </label>
                </div>
                <div class="nav_right">
                    <button v-show="!flag" @click="aabb()">关注</button>
                    <button v-show="flag" @click="aabb()">已关注</button>
                </div>
            </div>
            <div class="bot" v-for="(ite,ind) in nav11" :key="ind" >
                <span v-html="ite.tag_content"></span>
            </div>
        </div>
        <div class="h"></div>
        <main>
            <div class="tabs">
                <van-tabs v-model="active" title-active-color="#EB6100" title-inactive-color="#898C88">
                    <van-tab title="讲师介绍" class="tabsss">
                        <ul>
                            <li v-for="(item,index) in tabs1" :key="index">
                                <span>{{item.attr_name}}</span>
                                <span>{{item.attr_value[0].attr_value_name}}</span>
                            </li>
                        </ul>
                        <a v-for="(it,ind) in tabs2" :key="ind">{{it}}</a>
                    </van-tab>
                    <van-tab title="主讲课程" class="tab2">
                        <ul>
                            <li v-for="(item,index) in tabs3" :key="index"  >
                                <div class="label1">
                                    <span>{{item.title}}</span>
                                    <a>共{{item.total_periods}}课时</a>
                                    <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                                    <strong>{{item.teachers_list[0].teacher_name}}</strong>
                                </div>
                                <div class="label2">
                                    <span>{{item.sales_num}}人已报名</span>
                                    <a>{{item.sales_base|number}}</a>
                                </div>
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="学员评价" class="tab3">
                        <img src="../../public/详情.jpg" alt="" />
                    </van-tab>
                </van-tabs>
            </div>
        </main>
        <footer>
            <button>立即预约</button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "teacher",
        data(){
            return{
                active: 0,
                nav1:[],
                nav11:[],
                nav2:[],
                tabs1:[],
                tabs2:[],
                tabs3:[],
                flag:false
            };
        },
        filters:{
            number(val){
                if(val == 0){
                    return "免费";
                }else{
                    return `￥${(val/100).toFixed(0)}.00`;
                }
                return val;
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/Xl');
            },
            aabb(){
                this.flag = !this.flag;
            }
        },
        mounted(){
            let id = this.$route.query.id;
            //导航
            this.$axios.get("https://www.365msmk.com/api/app/teacher/"+id).then((res)=>{
                console.log(res.data.data.teacher);
                this.nav1.push(res.data.data.teacher);
                this.nav11.push(res.data.data.teacher);
                this.nav2 = res.data.data.teacher.tag_content;
            }).catch((error)=>{
                console.log(error);
            })
            //介绍
            this.$axios.get("https://www.365msmk.com/api/app/teacher/info/"+id).then((res)=>{
                // console.log(res);
                this.tabs1 = res.data.data.attr;
                this.tabs2 = res.data.data.intro;
            }).catch((error)=>{
                console.log(error);
            })
            //主要课程
            this.$axios.post("https://www.365msmk.com/api/app/teacher/mainCourse",{
                limit:10,
                page:1,
                teacher_id:id
            }).then((res)=>{
                // console.log(res);
                this.tabs3 = res.data.data.list;
            }).catch((error)=>{
                console.log(error);
            })
            //学院评价
            this.$axios.post("https://www.365msmk.com/api/app/teacher/comment",{
                limit:2,
                page:1,
                teacher_id:id
            }).then((res)=>{
                console.log(res);
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    header{
        width: 100%;
        height: 2rem;
        background: #5FACF9;
        .van-nav-bar{
            background: #5FACF9;
        }
    }
    .nav{
        width: 94%;
        height: 1.8rem;
        background: white;
        border: 0.02rem #ddd solid;
        border-radius: 0.15rem;
        position: relative;
        bottom: 8%;
        left: 3%;
        .bot{
            width: 100%;
            height: auto;
            /*span{*/
            /*    width: 1rem;*/
            /*    background: red;*/
            /*}*/
        }

        .top{
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .nav_left{
                display: flex;
                justify-content: space-around;
                img{
                    width: 0.85rem;
                    height: 0.85rem;
                    border-radius: 50%;
                }
                label{
                    span{
                        font-size: 0.14rem;
                        color: #333333;
                    }
                    a{
                        font-size: 0.11rem;
                        color: orangered;
                    }
                    label{
                        display: block;
                    }
                    strong{
                        color: grey;
                        font-size: .23rem;
                        /*display: block;*/
                    }
                }
            }
            .nav_right{
                button{
                    border-radius: 0.35rem;
                    border: none;
                    outline: none;
                    color: orangered;
                    font-size: 0.12rem;
                    display: inline-block;
                    width: 1rem;
                    height: 0.45rem;
                }
            }
        }
    }
    .h{
        width: 100%;
        height: 1.2rem;
        margin-top: -1.85rem;
        background: #F0F2F5;
    }
    main{
        width: 100%;
        height: 100%;
        .tabs{
            width: 100%;
            height: auto;
            background: white;
            .tabsss{
                ul{
                    li{
                        /*background: red;*/
                        margin-top: .3rem;
                        color: grey;
                        span{
                            /*font-size: .22rem;  */
                        }
                        a{
                            margin-top: .2rem;
                        }

                    }
                }
            }
            .tab2{
                ul{
                    width: 100%;
                    /*margin-top: .3rem;*/
                    .i{
                        margin-top: .3rem;
                    }
                    li{
                        width: 90%;
                        height: 3.15rem;
                        border: 1px #ddd solid;
                        border-radius: 0.05rem;
                        margin: 0.15rem auto;
                        margin-top: 0.5rem !important;
                        .label1{
                            height: 2.5rem;
                            span{
                                font-size: 0.2rem;
                                color: #333333;
                            }
                            a{
                                display: block;
                            }
                            img{
                                width: 0.65rem;
                                height: 0.65rem;
                                border-radius: 50%;
                            }
                            strong{
                                font-size:0.12rem;
                            }
                        }
                        .label2{
                            /*display: block;*/
                            width: 100%;
                            /*height: rem;*/
                            border-top: 0.01rem #ccc solid;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            span{
                                color: #dddddd;
                                font-size: 0.12rem;
                            }
                            a{
                                color: orangered;
                            }
                        }
                    }
                }
            }
            .tab3{
                img{
                    width: 100%;
                    height: 4rem;
                }
            }
        }
    }
.van-tab__pane{
    margin-top: .3rem;
}


    footer{
        width: 100%;
        height: 100%;
        position: fixed;
        bottom: 0;
        button{
            width: 100%;
            height: 1rem;
            background: #EB6100;
            border: none;
            outline: none;
            color: white;
        }
    }
}
</style>