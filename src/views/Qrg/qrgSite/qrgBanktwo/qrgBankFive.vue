<template>
  <div class="bankfive">
      <div class="content">
         
             <p class="one">初中数学</p>
            <router-link tag="p" :to="{path:'/qrgSite'}" class="two">数学——模考试题</router-link>
            <p class="one">小学数学</p>
             <router-link tag="p" :to="{path:'/qrgSite'}" class="two">小升初数学</router-link>
             <p class="one">高中数学</p>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankFive",
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
.bankfive{
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