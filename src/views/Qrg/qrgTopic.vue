<template>
  <div class="qrgtopic">
      <van-nav-bar title="错题记录" @click-left="onClickLeft" left-arrow>
      <!-- <router-link :to="{path:'/qrgPracticeSerach'}"> -->
        <template #right>
          <router-link :to="{path:'/qrgPracticeSerach'}">
            <van-icon name="search" size="18" />
          </router-link>
        </template>
       <!-- </router-link> -->
    </van-nav-bar>  
      <div class="content">
         <div class="content-one">
             <p @click="top">类型不限</p>
             <p>巩固全部错题</p>
             <p @click="topic">移除错题</p>

         </div>
         <div v-show="tops" class="top">
             <p>全部</p>
             <p>套卷练习</p>
             <p>考点专练</p>
             <p>仿真模考</p>
         </div>
            
          <!-- <p @click="int()">sda</p> -->
             <img src="/qrgImg/qrg-12.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:"qrgTopic",
  components: {},
  props: {},
  data() {
    return {
        tops:false
     
    };
  },
  watch: {},
  computed: {},
  methods: {
        onClickLeft() {
      // Toast('返回');
      this.$router.push('/Qrg')
    },
    top(){
        this.tops=!this.tops
    },
    topic(){
        console.log("哈哈哈")
        this.$dialog.confirm({
        message: '是否做对题目后自动移除该错题',
        })
        this.$notify({ type: 'primary', message: '通知内容' });
    }
  },
  created() {},
  mounted() {
//    this.$notify('提示文案');
  }
};
</script>
<style lang="scss" scoped>
.qrgtopic{
    width: 100%;
    height: 100%;
    font-size: .4rem;
    .content{
        width: 100%;
        height: auto;
        // .van-cell{
        //     // margin: 0 auto;
        //     position: absolute;
        // }
        .content-one{
            width: 100%;
            height: .7rem;
            // background: forestgreen;
            display: flex;
            p{
                width: 33.3%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            p:nth-of-type(2){
                color: grey;
            }
             p:nth-of-type(3){
                color: grey;
            }
        }
        .top{
            width: 100%;
            height: 4rem;
            background: white;
            position: fixed;
            top: 1.53rem;
            p{
                width: 100%;
                height: 25%;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
        }
        p:hover{
            color: orange;
        }
    

        img{
          // margin: 0 auto;
          // text-align: center;
          margin-left: 2.5rem;
        }
    }
}
</style>