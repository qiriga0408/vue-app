<template>
  <div class="qrgdry">
      <van-nav-bar title="仿真模考" @click-left="onClickLeft" left-arrow>
      <!-- <router-link :to="{path:'/qrgPracticeSerach'}"> -->
        <template #right>
          <router-link :to="{path:'/qrgPracticeSerach'}">
            <van-icon name="search" size="18" />
          </router-link>
        </template>
       <!-- </router-link> -->
    </van-nav-bar>  
      <div class="content">
           
            <van-dropdown-menu active-color="rgb(248, 145, 18)">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                 <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
             <img src="/qrgImg/qrg-10.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:"qrgDry",
  components: {},
  props: {},
  data() {
    return {
          value1: 0,
      value2: 'a',
      value3:11,
      option1: [
        { text: '考试类型', value: 0 },
        { text: '全部', value: 1 },
        { text: '模拟考试', value: 2 },
        { text: '正式考试', value: 3 },
      ],
      option2: [
        { text: '考试状态', value: 'a' },
        { text: '全部', value: 'b' },
        { text: '未开始', value: 'c' },
        { text: '进行中', value: 'd' },
        { text: '已结束', value: 'd' },
      ],
      option3: [
        { text: '参考状态', value: 11 },
        { text: '全部', value: 12 },
        { text: '已做', value: 13 },
        { text: '未做', value: 14 },
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
.qrgdry{
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        height: auto;
        .van-cell{
            // margin: 0 auto;
            position: absolute;
        }
        img{
          // margin: 0 auto;
          // text-align: center;
          margin-left: 2rem;
        }
    }
}
</style>