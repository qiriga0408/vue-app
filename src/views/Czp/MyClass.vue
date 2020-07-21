<template>
    <div class="box">
        <header>
            <van-nav-bar
                    title="我的学习"
                    left-text="返回"
                    right-text="按钮"
                    left-arrow
            />  
        </header>
        <van-tabs @change="tad">
            <van-tab v-for="(item,key) in list1"  :key="key" :title="item.name+(item.num)">
                <!-- <main
                    <img src="../../../public/czpimg/0716.jpg" alt="" />
                </main> -->
                <ul>
                    <li v-for="(v,i) in list" :key="i" >
                        <p>{{v.title}}</p>
                        <p>其日嘎的 时间</p>
                        <p>已学习{{v.progress_rate}}%</p>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>


<script>
    export default {
        name: "MyClass",
        data() {
            return {
                info:[
                    {type: 2, name: "直播课", num: 0},
                    {type: 5, name: "点播课", num: 0},
                    {type: 8, name: "音频课", num: 0},
                    {type: 10, name: "图文课", num: 0},
                    {type: 7, name: "面授课", num: 0},
                    {type: 11, name: "会员课", num: 0}
                ],
                list:[],
                list1:[]
            }
        },
        created(){

        },
        mounted(){
           this.ss(2)
        },
        methods:{
            ss(type){
 this.$http.get(`/api/app/myStudy/${type}`).then((res)=>{
                console.log(res.data.data.typeNum[0].name);
                this.list=res.data.data.courseList
                this.list1=res.data.data.typeNum
                console.log(res)
            })

            },
            tad(g){
                console.log(g)
                     this.ss(this.list1[g].type) 
            }
        }
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    main{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>