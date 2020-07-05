<template>
  <div class="qrgserach">
      <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @cancel="onCancel"
            />
    </form>
      <div class="content">
          <div class="content-one">
              <p>历史记录</p>
              <img src="/qrgImg/qrg-11.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgPracticeSerach",
  components: {},
  props: {},
  data() {
    return {
        value: ''
    };
  },
  watch: {},
  computed: {},
  methods: {
    onCancel() {
    //   Toast('取消');
    this.$router.go(-1)
    },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.qrgserach{
    width: 100%;
    height: 100%;
    .content-one{
        width: 100%;
        height: 1rem;
        // background: darkgoldenrod;
        margin-top: .2rem;
        display: flex;
        // flex-direction: column;
        // justify-items: center;
        justify-content: space-between;
        align-items: center;
        p{
            font-weight: 900;
        }
    }
}
</style>