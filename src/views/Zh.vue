<template>
    <div class="course">
        <!-- header -->
        <header>
            <h3>特色课</h3>
            <div class="right">
                <img src="data:image/png;base64,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"
                     alt
                     class="search"
                     @click="back"
                />
            </div>
        </header>
        <!-- nav -->
        <van-dropdown-menu class="nav" active-color="#EE8032" ref='classreseter'>
            <van-dropdown-item title="分类">
                <div class="nkl_option1">
                    <ul>
                        <li v-for="(item,index) of attrclassify"  :key="index">
                            <p>{{ item.name }}</p>
                            <ul>
                                <li v-for="(v,i) of item.child" :key="i"  :class='{
								  "active": item.name==="年级" ?
									classindex_grade===i :
									classindex_subject===i
								}'  @click='decidetip(item,v,i)'>{{ v.name }}</li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <button>重置</button>
                        <button>确定</button>
                    </div>
                </div>
            </van-dropdown-item>
            <!-- 坐的排序 -->
            <van-dropdown-item title="排序" ref="item">
                <div class="nkl_option2"  v-for="(item,key) in option2" @click="pricejian(item,key)"  :key="key">
                    {{item.value}}
                </div>
            </van-dropdown-item>
            <!-- option three -->
            <van-dropdown-item title="筛选">
                <div class="nkl_option3">
                    <ul>
                        <li v-for="(item,index) in attrclassify" :key="index" @click="shaixuan(item)">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </van-dropdown-item>
        </van-dropdown-menu>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <ul class="index-item-page">
                    <li class="ii-item" v-for="(v,i) of CourseList" :key="i" @click="toCourseD(v)">
                        <p class="ii-title">{{ v.title }}</p>
                        <p     class="ii-time"
                        >{{ v.start_play_date}} | 共{{ v.total_periods }}课时</p>
                        <div class="ii-teacher" v-for="(item,index) in v.teachers_list" :key="index">
                            <img :src="item.teacher_avatar" alt />
                            <font>{{ item.teacher_name }}</font>
                            <i class="has-buy" v-show="v.has_buy==1"></i>
                        </div>
                        <p class="ii-info">
                            <span class="person">{{ v.sales_num }}人已报名</span>
                            <span class="free" v-if="v.price ==0">免费</span>
                            <span class="price" v-else>
						   <!-- <img src="../assets/pic/gold.png" alt /> -->
							{{ v.price | much }}
						  </span>
                        </p>
                    </li>
                </ul>
            </van-list>
        </van-pull-refresh>
        <Footer>
            <footer>
                <ul>
                    <li>
                        <van-icon name="home-o" />
                        <router-link to="/Xl" tag="span">首页</router-link>
                    </li>
                    <li>
                        <van-icon name="bar-chart-o" />
                        <router-link to="/Zh" tag="span">课程</router-link>
                    </li>
                    <li>
                        <van-icon name="thumb-circle-o" />
                        <router-link to="/Sxl" tag="span">约课记录</router-link>
                    </li>
                    <li>
                        <van-icon name="records" />
                        <router-link to="/Qrg" tag="span">练习</router-link>
                    </li>

                    <li>
                        <van-icon name="contact" />
                        <span>我的</span>
                    </li>
                </ul>
            </footer>
		</Footer>
    </div>
</template>

<script>
    import Footer from '../components/footer.vue';
    export default {
        name: "Zh",
        component:{
          Footer
        },
        data() {
            return {
                // 排序的渲染
                option1: [
                    { by: 0, value: "综合排序" },
                    { by: 1, value: "最新" },
                    { by: 2, value: "最热" },
                    { by: 3, value: "价格从低到高" },
                    { by: 4, value: "价格从高到低" }
                ],
                // 排序的渲染
                option2: [
                    { by: 0, value: "综合排序" },
                    { by: 1, value: "最新" },
                    { by: 2, value: "最热" },
                    { by: 3, value: "价格从低到高" },
                    { by: 4, value: "价格从高到低" }
                ],
                option3: [
                    "全部",
                    "大班课",
                    "小班课",
                    "公开课",
                    "点播课",
                    "面授课",
                    "音频课",
                    "系统课",
                    "图文课",
                    "会员课"
                ],
                loading: false,
                CourseList: [],
                attrclassify: [],
                finished: false,
                refreshing: false,
                nowpage: 1,
                nownum: 5,
                classindex_grade:'',
                classindex_subject:'',
                flag:true,
            };
        },
        created() {
            this.ajaxCourseClassify();
            // this.ajaxCourseBasis();
        },
        filters: {
            much(val) {
                return (val / 100).toFixed(2);
            },
            time(t1, t2) {
                function getime(numstr) {
                    let t = new Date(numstr - 0),
                        tarr = [
                            t.getFullYear(),
                            t.getMonth() + 1,
                            t.getDate(),
                            t.getHours(),
                            t.getMinutes(),
                            t.getSeconds()
                        ].map(function(m) {
                            return ("" + m).padStart(2, "0");
                        }),
                        str = tarr[1] + "月" + tarr[2] + "日 " + tarr[3] + ":" + tarr[4];
                    return str;
                }
                return getime(t1) + " ~ " + getime(t2);
            }
        },
        props: {},
        components: {},
        mounted() {
            // this.ajaxCourseClassify();
        },
        methods:{
            //做的排序功能
            pricejian(item,key){
                this.$http.get(`/api/app/courseBasis?page=1&limit=10&course_type=2&classify_id=&order_by=${item.by}`).then((res)=>{
                    this.CourseList = res.data.data.list;
                })
                this.$refs.item.toggle();
            },
            back() {
                this.$router.push("/zhseach");
            },
            //筛选数据
            ajaxCourseClassify(){
                this.$http.get("/api/app/courseClassify?").then((res)=>{
                    console.log(res);
                    this.attrclassify = res.data.data.appCourseType;
                })
            },
            //筛选功能实现
            shaixuan(item){
                console.log(item);
            },
            // 获取下一页，填充到列表
            getnewlist() {
                this.$http.get("/api/app/courseBasis?page=1&limit=10&").then((res)=>{
                    console.log(res);
                    let CourseList = res.data.data.list;
                    this.CourseList.push(...CourseList);
                })
            },
            toCourseD(item) {
                // console.log(id);
                this.$router.push({path:"/zhedit",
                    query:{
                        id:item.id,
                        type:item.course_type
                    }})
                this.$store.commit("setData",this.list)
            },
            onLoad() {
                setTimeout(() => {
                    if (this.refreshing) {
                        this.CourseList = [];
                        this.refreshing = false;
                    }
                    this.nowpage++;

                    this.getnewlist();
                    this.loading = false;l

                    if (this.CourseList.length >= 40) {
                        this.finished = true;
                    }
                }, 4000);
            },
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
            decidetip(item,v,i) {
				
            }
        }
    };
</script>

<style lang="scss"  scoped>
    .course {
        background: #f0f2f5;
        min-height: 100%;
        font-size: 0.315rem;
        width: 100%;
    }
    header {
        position: fixed;
        top: 0;
        z-index: 4;
        width: 100%;
        height: 0.9rem;
        background: #fff;
        h3 {
            margin: 0;
            font-size: 0.36rem;
            color: #595959;
            position: absolute;
            left: 50%;
            top: 25%;
            transform: translateX(-50%);
            font-weight: normal;
        }
        .right {
            position: absolute;
            right: 5%;
            top: 25%;
            height: 100%;
            float: right;
            font-size: 0.4rem;
            color: #595959;

            .search {
                width: 0.45rem;
                height: 0.45rem;
            }
        }
    }
    .nav {
        width: 100%;
        position: fixed;
        top: 0.89rem;
        background: #fff;
        line-height: 0.9rem;
        left: 0%;
        z-index: 6;
        overflow: hidden;
        .nkl_option1 {
            > ul {
                padding-left: 0.4rem;
                > li {
                    > p {
                        height: 0.5rem;
                        line-height: 0.5rem;
                        font-size: 0.24rem;
                        color: #595959;
                        text-align: left;
                    }
                    > ul {
                        display: flex;
                        flex-wrap: wrap;
                        overflow: hidden;
                        > li {
                            width: 1.55rem;
                            height: 0.6rem;
                            line-height: 0.6rem;
                            float: left;
                            background: #f5f5f5;
                            color: #646464;
                            margin-right: 0.2rem;
                            margin-bottom: 0.15rem;
                            font-size: 0.24rem;
                        }
                    }
                }
            }
            div{
                width: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                button:nth-of-type(1) {
                    width: 3.34rem;
                    height: 0.66rem;
                    line-height: 0.66rem;
                    border: 0.02rem solid #d8d8d8;
                    font-size: 0.3rem;
                    background: #fff;
                    border-radius: 0.08rem;
                    margin-right: 0.19rem;
                    color: #6f6f6f;
                }
                button:nth-of-type(2) {
                    width: 3.34rem;
                    height: 0.66rem;
                    line-height: 0.66rem;
                    background: #eb6100;
                    border-radius: 0.08rem;
                    border: 0.02rem solid #eb6100;
                    color: #fff;
                    font-size: 0.3rem;
                }
            }
        .nkl_option3{

         }
        }
    }
    .index-item-page {
        margin-top: 1rem;
        padding: 0.4rem;
        .ii-item {
            background: #fff;
            border-radius: 0.15rem;
            padding: 0 0.35rem;
            margin-bottom: 0.4rem;
            // position: relative;
            .ii-title {
                padding-top: 0.4rem;
                text-align: left;
                font-size: 0.3rem;
                color: #333;
                font-weight: 400;
            }
            .ii-time {
                margin: 0;
                height: 0.8rem;
                line-height: 0.8rem;
                font-size: 0.28rem;
                color: #666;
                font-weight: 400;
                text-align: left;
            }
            .ii-teacher {
                height: 1.2rem;
                display: flex;
                align-items: center;
                position: relative;
                > img {
                    width: 0.72rem;
                    height: 0.72rem;
                    border-radius: 50%;
                }
                > font {
                    font-size: 0.28rem;
                    color: rgba(0, 0, 0, 0.45);
                    margin-left: 0.2rem;
                    font-weight: 400;
                }
                .has-buy {
                    position: absolute;
                    right: 0rem;
                    top: 0rem;
                    /*background: url(../assets/pic/yes.png) no-repeat;*/
                    // background-size: 100% 100%;
                    width: 1rem;
                    height: 1rem;
                }
            }
            .ii-info {
                margin: 0;
                border-top: 0.01rem solid #f5f5f5;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 1rem;
                .person {
                    font-size: 0.28rem;
                    color: rgba(0, 0, 0, 0.45);
                }
                .free {
                    color: #44a426;
                    font-size: 0.3rem;
                }
                .price {
                    color: #ee1f1f;
                    font-size: 0.3rem;
                    > img {
                        width: 0.32rem;
                    }
                }
            }
        }
    }
    footer{
        width: 100%;
        height: 0.38rem;
        ul{
            width: 100%;
            height: 100%;
            li{
                span{
                    font-size: 0.12rem;
                }
            }
        }
    }
</style>