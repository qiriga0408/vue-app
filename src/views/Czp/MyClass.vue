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
        <van-tabs>
            <van-tab v-for="(item,key) in info"  :title="item.name +(item.num)">
                <main>
                    <img src="../../../public/czpimg/0716.jpg" alt="" />
                </main>
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
                ]
            }
        },
        created(){

        },
        mounted(){
            this.$http.get("/api/app/myStudy/2").then((res)=>{
                console.log(res);
            })
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