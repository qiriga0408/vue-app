<template>
  <div class="bankseven">
      <div class="content">
          <p class="one">小学英语</p>
            <router-link tag="p" :to="{path:'/qrgSite'}" class="two">英语</router-link>
            <p class="one">初中英语</p>
             <!-- <router-link tag="p" :to="{path:'/qrgSite'}" class="two">高中物理</router-link> -->
             <p class="one">高中英语</p>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankSeven",
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
.bankseven{
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