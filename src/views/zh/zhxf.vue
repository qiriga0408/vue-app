<template>
    <div>
        <header>
            <p>给我们留言</p>
            <span @click="fh()">Ⅴ</span>
        </header>
        <div class="item-1">
            <p>你好,很抱歉我们暂时无法为您提供服务,如需帮助,请留言,我们会尽快解决您的问题</p>
        </div>
        <div class="item-2">
            <a>手机</a>
            <input type="text" class="txt1" placeholder="请输入" v-model="name">
        </div>
        <div class="item-2">
            <a>留言内容</a>
           <textarea name="" id="" cols="30" rows="10" class="txt2" placeholder="请输入" v-model="title"></textarea>
        </div>
        <van-button type="info" block class="btn1" @click="add()">块级元素</van-button>

    </div>
</template>
<script>
export default {
    name:"Zhxf",
    data(){
        return{
            name:"",
            title:""
        }
    },
    methods:{
        fh(){
            this.$router.go(-1)
        },
       add(){
           if(this.name||this.title==""){
               alert("请至少填写一项联系方式")
           }
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
    height: 1rem;
    background: #007AFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        width: 2rem;
        height: 1rem;
        color: #fff;
        line-height: 1rem;
        font-size: 0.2rem;
        margin-left: 0.4rem;
        
    }
    span{
        display: block;
        width: 1rem;
        height: 1rem;
        color: #fff;
        font-size: 0.24rem;
        line-height: 1rem;
        text-align: center;
    }
}
.item-1{
    width: 7.5rem;
    height: 0.6rem;
    p{
        width: 7.5rem;
        height: 0.6rem;
        font-size: 0.24rem;
        padding-top: 0.3rem;
        padding-left: 0.2rem;
    }
}
.item-2{
    width: 7.5rem;
    height: 1.6rem;
    margin-top: 0.4rem;
    a{
        display: block;
        width: 7.5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        color: black;
        margin-left: 0.2rem;
    }
    .txt1{
        width: 7rem;
        height: 0.6rem;
        border:1px solid #eee;
        font-size: 0.24rem;
        margin-left: 0.25rem;
    }
    .txt2{
        width: 7rem;
        height: 1.4rem;
        border:1px solid #eee;
        font-size: 0.24rem;
        margin-left: 0.25rem;
    }
}
.btn1{
    display: block;
    margin-top: 1rem;
    width: 6rem;
    height: 0.8rem;
    margin-left: 0.8rem;
}
</style>