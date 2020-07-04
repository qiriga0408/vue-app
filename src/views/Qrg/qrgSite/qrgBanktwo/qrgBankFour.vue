<template>
  <div class="bankfour">
      <div class="content">
           <p class="one">化学实验</p>
           
            <p class="one">初中化学</p>
             <router-link tag="p" :to="{path:'/qrgSite'}" class="two">初三化学——模考试题</router-link>
             <p class="one">高中化学</p>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankFour",
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
.bankfour{
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