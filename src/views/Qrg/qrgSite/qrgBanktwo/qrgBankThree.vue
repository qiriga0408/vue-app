<template>
  <div class="bankthree">
      <div class="content">
          <p class="one">高中生物</p>
            <router-link tag="p" :to="{path:'/qrgSite'}" class="two">遗传</router-link>
            <p class="one">初中生物</p>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankThree",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.bankthree{
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        height: auto;
        color:grey;
        .one{
            margin-top: .5rem;
            margin-left: .3rem;
        }
        .two{
            margin-top: .6rem;
            margin-left: 1.5rem;
        }
        .two:hover{
            color: orange;
        }
    }
}
</style>