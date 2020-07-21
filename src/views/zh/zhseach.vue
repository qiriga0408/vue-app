<template>
    <div>
        <header>
            <button @click="fh()">＜</button>
            <input type="text" class="txt1" v-model="test"  />
            <span @click="add()">搜索</span>
        </header>
        <main>
            <van-pull-refresh v-model="refreshing">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" >
                    <ul class="index-item-page">
                        <li class="ii-item" v-for="(v,i) of list2" :key="i" >
                            <p class="ii-title">{{ v.title }}</p>
                            <p class="ii-time"
                            >{{ v.start_play_date }} | 共{{ v.total_periods }}课时</p>
                            <div class="ii-teacher" v-for="(item,index) in v.teachers_list" :key="index">
                                <img :src="item.teacher_avatar" alt />
                                <font>{{ item.teacher_name }}</font>
                                <i class="has-buy" v-show="v.has_buy==1"></i>
                            </div>
                            <p class="ii-info">
                                <span class="person">{{ v.sales_num }}人已报名</span>
                                <span class="free" v-if="v.price ==0">免费</span>
                                <span class="price" v-else>{{ v.price | much }}</span>
                            </p>
                        </li>
                    </ul>
                </van-list>
            </van-pull-refresh>
        </main>
         <h2>历史搜索</h2>
        <div class="item-3">
            <ul>
                <li v-for="(item,key) in lishi" :key="key" @click="ls(item)">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Zhseach",
    data(){
        return{
            test:'',
            list:[],
            list2:[],
            loading: false,
            CourseList: [],
            attrclassify: [],
            finished: false,
            refreshing: false,
            nowpage: 1,
            nownum: 5,
            classindex_grade:'',
            classindex_subject:'',
            lishi:[]
        }
    },
    methods:{
        fh(){
            this.$router.go(-1)
        },
         add(){
             this.$axios.get("/api/app/courseBasis?limit=10&page=1&course_type=0&keywords="+this.test).then((res)=>{
                 console.log(res);
                 this.list2 = res.data.data.list;
             })
             let obj = {name:this.test,flag:false};
             this.lishi.push(obj);
             console.log(this.lishi);
             localStorage.setItem("0716",JSON.stringify(this.lishi));
        },
        //历l史记录
        ls(item){
            // console.log('111');
            this.test = item.name;
        }
    }
}
</script>
<style lang="scss" scoped>
body,h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}  
header{
    width: 7.5rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .txt1{
        width: 5rem;
        height: 0.5rem;
        border:1px solid;
    }
}  
main{
    width: 100%;
    height: 100%;
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
            background-size: 100% 100%;
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
</style>