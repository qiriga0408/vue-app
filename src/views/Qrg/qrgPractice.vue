<template>
  <div class="practice">
    <van-nav-bar title="套卷练习" @click-left="onClickLeft" left-arrow>
      <!-- <router-link :to="{path:'/qrgPracticeSerach'}"> -->
        <template #right>
          <router-link :to="{path:'/qrgPracticeSerach'}">
            <van-icon name="search" size="18" />
          </router-link>
        </template>
       <!-- </router-link> -->
    </van-nav-bar>  
      <div class="content">
          <van-dropdown-menu>
                <van-dropdown-item style="width:50%;" v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <img src="/qrgImg/qrg-10.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:"qrgPractice",
  components: {},
  props: {},
  data() {
    return {
         value1: 0,
      value2: 'a',
      option1: [
        { text: '套卷分类', value: 0 },
        { text: '全部', value: 1 },
        { text: '中考真题', value: 2 },
         { text: '化学', value: 3 },
          { text: '英语', value: 4 },
      ],
      option2: [
        { text: '套卷状态', value: 'a' },
        { text: '全部', value: 'b' },
        { text: '已做', value: 'c' },
        { text: '未做', value: 'd' },
      ],
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
.practice{
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        height: auto;
        img{
          // margin: 0 auto;
          // text-align: center;
          margin-left: 2rem;
        }
       
    }
}
</style>