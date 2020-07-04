<template>
  <div class="site">
    <van-nav-bar
  title="数学"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
      <div class="content">
          <div class="content-one">
              <router-link tag="div" :to="{path:'/qrgBank'}" class="content-one-left">
                <img src="/qrgImg/qrg-8.png" alt="">
                题库选择
              </router-link>
              <div class="content-one-right">
                  <img src="/qrgImg/qrg-9.png" @click="pop" alt="">
                  <van-popup
                      v-model="show"
                      closeable
                      close-icon="close"
                      position="bottom"
                      :style="{ height: '30%' }"
                    >
                    <p class="one">考点专练设置</p>
                    <p class="two">设置考点专练出题数量</p>
                    <van-radio-group v-model="radio" direction="horizontal">
                        <van-radio name="1"> 随机15道</van-radio>
                        <van-radio name="2">按顺序做题</van-radio>
                        <van-button type="primary" size="large">确定</van-button>
                        <!-- <button>确定</button> -->
                  </van-radio-group>
                  </van-popup>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"Site",
  components: {},
  props: {},
  data() {
    return {
        show:false,
          radio: '1',
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/Qrg')
    },
    pop(){
      this.show=!false
    }
    
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.site{
  width: 100%;
  height: 100%;
  .content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .content-one{
      width: 90%;
      height: 1rem;
      // background: fuchsia;
      margin-top: .35rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .content-one-right{
      .one{
        text-align: center;
        font-size: .4rem;
        margin-top: .2rem;
      }
      .two{
        margin-top: .5rem;
        color: grey;
        margin-left: .3rem;
      }
      .van-radio-group--horizontal{
          // text-align: center;
          // margin-left: 1.5rem;
          margin-top: .5rem;
          align-items: center;
          // left: 1rem;
      }
      .van-button{
        // top: 0;
        margin-top: .4rem;
        background: orange;
        font-size: .45rem;
      }
     
    }
  }
}
</style>