<template>
  <div id="app">
    <!-- <router-link tag="div" :to="{path:'/qrgMessage'}" class="liu">留言</router-link> -->
   <!-- <keep-alive include=""> -->
     <router-view></router-view>
     <!-- 自己封装的loading 组件 -->
     <loading></loading>
      <!-- <Loading v-if='LOADING'/>  -->
  <!-- </keep-alive> -->
     <!-- <div id="webid">
        <div class="minbox" id="box"
                  @mousedown.prevent="down()" @touchstart="down()"
                  @mousemove.prevent="move()" @touchmove.prevent="move()"
                  @mouseup.prevent="end()" @touchend="end()" 
        >
          <router-link :to="{path:'/qrgMessage'}" >
              <img src="zhimg/zh8.png" alt="">
          </router-link>
        
        </div>
        
    </div> -->
   
  </div>
</template>
<script>
import loading from '@/components/loading'
//  import {mapState} from 'vuex'
import './util/meiqia'
export default {
  name:"App",
  components:{
    loading
  },
    // computed:{
    //         ...mapState([
    //             'LOADING'
    //         ])
    //     },
  data(){
    return{
    //     flags: false,
    //     position: { x: 0, y: 0 },
    //     nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
    }
  },
  methods:{
       // 小球拖动
     // 实现移动端拖拽

  //     down(){
  //       this.flags = true;
  //       let touch;
  //       if(event.touches){
  //           touch = event.touches[0];
  //       }else {
  //           touch = event;
  //       }
  //       this.position.x = touch.clientX;
  //       this.position.y = touch.clientY;
  //       this.dx = box.offsetLeft;
  //       this.dy = box.offsetTop;
  //     },
  //      move(){
  //         if(this.flags){
  //           let touch ;
  //           if(event.touches){
  //               touch = event.touches[0];
  //           }else {
  //               touch = event;
  //           }
  //           this.nx = touch.clientX - this.position.x;
  //           this.ny = touch.clientY - this.position.y;
  //           this.xPum = this.dx+this.nx;
  //           this.yPum = this.dy+this.ny;
  //           //添加限制：只允许在屏幕内拖动
  //         const maxWidth = document.body.clientWidth - 54;//屏幕宽度减去悬浮框宽高
  //         const maxHeight = document.body.clientHeight - 54;
  //         if (this.xPum < 0) { //屏幕x限制
  //         this.xPum = 0;
  //         } else if (this.xPum>maxWidth) {
  //           this.xPum = maxWidth;
  //         }
  //         if (this.yPum < 0) { //屏幕y限制
  //         this.yPum = 0;
  //         } else if (this.yPum>maxHeight) {
  //         this.yPum = maxHeight;
  //         }
  //           box.style.left = this.xPum+"px";
  //           box.style.top = this.yPum +"px";
  //           //阻止页面的滑动默认事件
  //           document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
  //               event.preventDefault();//jq 阻止冒泡事件
  //               // event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
  //           },false);
  //         }
  //       },
  //           //鼠标释放时候的函数
  // end(){
  //   this.flags = false;
  // },
  }
 
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
    height: 1.2rem;
    background: rgb(233, 232, 232);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    // font-size: 20px;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 9999;
        li{
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-size: .45rem;
        z-index: 9999;

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
#webid{
  position: relative;
}
.minbox{
  width:1.2rem ;
//   width: 1.2rem;
height: 1.2rem;
z-index: 9999;
position: fixed;
left: 6rem;
top: 8rem;

}

}
</style>
