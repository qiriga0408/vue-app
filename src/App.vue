<template>
  <div id="app">
    <router-link tag="div" :to="{path:'/qrgMessage'}" class="liu">留言</router-link>
    <router-view></router-view>
    
  </div>
</template>
<script>

export default {
  name:"App",
 
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
  .liu{
    width: 1rem;
    height: .5rem;
    background: rgb(113, 113, 241);
    border-radius: .3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    position: fixed;
    top: 0.7rem;
    right: .5rem;
    z-index: 9999;
  }
  #shouye{
    width: 100%;
    height: 100%;
  }
   #fenlei{
    width: 100%;
    height: 100%;
  }
   #shopping{
    width: 100%;
    height: 100%;
  }
   #my{
    width: 100%;
    height: 100%;
  }
  footer{
    width:100%;
    height: 1.2rem;
    background: rgb(233, 232, 232);
    position: fixed;
    bottom: 0;
    left: 0;
    // font-size: 20px;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-size: .45rem;
            a{
                display: block;
                font-size: 0.3rem;
                text-align: center;
                line-height: 0.6rem;
                color: black;
                text-decoration: none;
            }
        }
        .router-link-active{
            color: red;
        }
        .van-icon:hover{
          color: red;
        }
       
    }
}
}
</style>
