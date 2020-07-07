<template>
    <div>
        <header>
            <button @click="fh()">＜</button>
            <input type="text" class="txt1" v-model="name" @input="seach()" @keyup.enter="add()">
            <span>搜索</span>
        </header>
         <div class="item-1">
            <ul>
                <li v-for="(item,key) in lists" :key="key">
                    <div class="item-2">
                            <p class="p1">{{item.aa}}</p>
                            <img class="img1" :src="item.img1" alt="">
                            <span>{{item.bb}}</span>
                            <div class="div1">
                                <img class="img2" :src="item.img2" alt="">
                                <span>{{item.cc}}</span>
                           </div>
                          <hr>
                            <p class="p2">
                            <a href="#">{{item.dd}}</a>
                            <b>{{item.ee}}</b>
                           </p>
                           </div>
                </li>
            </ul>
        </div>
         <h2>历史搜索</h2>
        <div class="item-3">
            <ul>
                <li v-for="(item,key) in lishi" :key="key">
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
            name:"",
            list:[],
            lists:[],
            lishi:JSON.parse(localStorage.getItem("list"))||[]
        }
    },
    mounted(){
        this.$axios.get("zhdata.json").then((res)=>{
            console.log(res)
            this.list=res.data.list
        })
    },
    methods:{
        fh(){
            this.$router.go(-1)
        },
        // 搜索
        seach(){
             this.lists=[]
            if(this.name==""){
                return false
            }else{   
                this.list.forEach((item,key)=>{
                    if(item.aa.indexOf(this.name)!=-1){
                        this.lists.push(item)
                    }
                    localStorage.setItem("list",JSON.stringify(this.lists))
                })
            }
        },
         add(){
            var obj={
                name:this.name
            }
            this.lishi.push(obj)
            localStorage.setItem("list",JSON.stringify(this.lishi))
            if(this.lishi.length==3){
                this.lishi.splice(0,1)
            }
            
        },
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
.item-1{
  width: 7.5rem;
  ul{
    width: 100%;
    height: 100%;
    li{
      height: 3.5rem;
      background: #F0F2F5;
      .item-2{
        width: 6.5rem;
        height: 3rem;
        background: #FFFFFF;
        margin-left: 0.44rem;
        border-radius: 10px;    
        .p1{
          font-size: 0.36rem;
          margin-left: 0.3rem;
          padding-top: 0.3rem;
        }
        .img1{
          width: 0.34rem;
          height: 0.34rem;
          padding-top: 0.11rem;
          padding-left: 0.3rem;
        }
        span{
          padding-top: -0.1rem;
          font-size: 0.28rem;
        }
        .div1{
          width: 3rem;
          height: 0.6rem;
          display: flex;
          align-items: center;
          margin-left: 0.3rem;
          margin-top: 0.3rem;
          .img2{
            display: block;
            width: 0.4rem;
            height: 0.4rem;

          }
          span{
            display: block;
            font-size: 0.3rem;
          }
        }
       .p2{
         width: 6.5rem;
         height: 0.4rem;
         display: flex;
         align-items: center;
        
         a{
           display: block;
           font-size: 0.3rem;
           margin-left: 0.3rem;
         }
         b{
          display: block;
          font-size: 0.3rem;
          margin-left: 3.7rem;
          color: #3EB21F;
         }
       }
      }
    }
  }
}

</style>