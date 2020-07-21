<template>
    <div>
        <header>
            <span @click="fh()">＜</span>
            <p>修改个人信息</p>
            <span @click="bc">保存</span>
        </header>
        <!-- <div class="item-1" v-if="keystr == 'nickname'"> -->
            <div class="item-1">
            <input v-model="nickname" type="text" class="txt1">
            <input type="text">
        </div>
        <!-- {{list}} -->
    </div>
</template>
<script>
export default {
    name:'Gredit',
    data(){
        return{
            nickname:"",
            keystr:''
        }
    },
    created(){
        // console.log(this.$route.query.value)
        if(this.keystr=='nickname'){
            this.keystr=this.$route.query.value

        }
    },
    mounted(){
        // this.ajiaxlist()
    },
    methods:{
        fh(){
            this.$router.go(-1)
        },
        async ajiaxlist(){
            let {data:res}=await this.$axios.put("http://120.53.31.103:84/api/app/user",{
                nickname:this.nickname
            })
            // console.log(res)
        //    res.data.nickname=this.nickname
        //    console.log(this.nickname)
            
        },
        bc(){
            // 起的作用是哪里需要在哪里修改如果在mounted中会出现页面刚开始就加载修改不起作用
            this.ajiaxlist()
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
*{
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
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        width: 0.8rem;
        height: 0.8rem;
        display: block;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.8rem;
    }
    p{
        width: 5rem;
        height: 0.8rem;
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.8rem;
    }
}
.item-1{
    width: 7.5rem;
    height: 0.6rem;
    .txt1{
         display: block;
        // background: forestgreen;
         width: 7rem;
         height: 0.6rem;
         font-size: 0.3rem;
         margin-left: 0.2rem;
    }
}
</style>