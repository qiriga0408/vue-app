<template>
  <div id="app">
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
    height: 0.45rem;
    background: rgb(160, 158, 158);
    position: fixed;
    bottom: 0;
    left: 0;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            width: 25%;
            a{
                display: block;
                font-size: 0.2rem;
                text-align: center;
                line-height: 0.6rem;
                color: black;
                text-decoration: none;
            }
        }
    }
}
}
</style>
