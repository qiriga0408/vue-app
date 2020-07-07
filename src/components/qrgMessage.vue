<template>
  <div class="message">
      <div class="header">
          <div>给我们留言</div>
          <div><van-icon name="arrow-down" @click="int" size="25" /></div>
      </div>
      <div class="content">
          <p class="one">您好，很抱歉我们暂时无法为您提供服务，如有需要帮助，请留言，我们尽快联系并解决您的问题</p>
          <div class="two">
              <p>手机：</p>
              <input type="text" placeholder="请输入">
        </div>
         <div class="three">
              <p>留言内容：</p>
              <input type="text" placeholder="请输入">
        </div>
          <van-button round block type="info" native-type="submit">
      提交
    </van-button>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgMessage",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  watch: {},
  computed: {},
  methods: {
      int(){
          this.$router.go(-1);
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.message{
    width: 100%;
    height: 100%;
        background: rgb(221, 221, 221);

    .header{
        width: 100%;
        height: 1rem;
        background: rgb(38, 111, 194);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    .content{
        width: 100%;
        height: auto;
        .one{
            margin-top: .3rem;
            margin-left: .2rem;
            box-sizing: border-box;
        }
        .two{
            width: 100%;
            margin-top: .3rem;
            p{
                 font-size: .35rem;
            font-weight: 900;
            }
           
            input{
                width: 100%;
                height: .5rem;
                margin-top: .2rem;
            }
        }
         .three{
            width: 100%;
            margin-top: .3rem;
            p{
                 font-size: .35rem;
            font-weight: 900;
            }
           
            input{
                width: 100%;
                height: 2rem;
                margin-top: .2rem;
            }
        }
    }
}
</style>