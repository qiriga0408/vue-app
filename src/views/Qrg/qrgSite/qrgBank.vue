<template>
  <div class="bank">
     <van-nav-bar
  title="题库选择"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
    <div class="content">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div class="content-two">
          <div class="content-two-left">
            <router-link tag="div" :to="{path:'/qrgBank/qrgBankOne'}" class="content-two-left-o">求导题库</router-link>
            <router-link tag="div" :to="{path:'/qrgBank/qrgBankTwo'}" class="content-two-left-o">极限题库</router-link>
            <router-link tag="div" :to="{path:'/qrgBank/qrgBankThree'}" class="content-two-left-o">生物</router-link>
            <router-link tag="div" :to="{path:'/qrgBank/qrgBankFour'}" class="content-two-left-o">化学</router-link>
             <router-link tag="div" :to="{path:'/qrgBank/qrgBankFive'}" class="content-two-left-o">数学</router-link>
            <router-link tag="div" :to="{path:'/qrgBank/qrgBankSix'}" class="content-two-left-o">物理</router-link>
             <router-link tag="div" :to="{path:'/qrgBank/qrgBankSeven'}" class="content-two-left-o">英语</router-link>
            <!-- <div class="content-two-left-o">化学</div> -->
          </div>
          <div class="content-two-right">
            <router-view></router-view>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"Bank",
  components: {},
  props: {},
  data() {
    return {
      value:''
    };
  },
  watch: {},
  computed: {},
  methods: {
     onClickLeft() {
      // Toast('返回');
      this.$router.push('/Qrg')
    },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.bank{
  width: 100%;
  height: 100%;
  // .van-nav-bar{
  //   position: fixed;
  //   top: 0;
  //   left:0;
  // }
  .content{
    width: 100%;
    height: auto;
    // position: absolute;
    // top: .5rem;
    // left: 0;
    .content-two{
      width: 100%;
      height: 8rem;
      // background:seagreen;
      display: flex;
      .content-two-left{
        width: 23%;
        height: 100%;
        color: grey;
        // background: greenyellow;
        .content-two-left-o{
          width: 100%;
          height:14%;
          // background: green;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
       .content-two-right{
        width: 77%;
        height: 100%;
        // background: gold;
      }
    }
  }

}
</style>