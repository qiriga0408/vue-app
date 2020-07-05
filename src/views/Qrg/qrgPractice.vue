<template>
  <div class="practice">
    <van-nav-bar title="标题" @click-left="onClickLeft" left-arrow>
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>  
      <div class="content">
          <van-dropdown-menu>
                <van-dropdown-item style="width:50%;" v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
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
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
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
       
    }
}
</style>