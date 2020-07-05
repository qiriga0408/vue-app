<template>
  <div class="banksix">
      <div class="content">
           <p class="one">初中物理</p>
            <router-link tag="p" :to="{path:'/qrgSite'}" class="two">初三物理</router-link>
            <p class="one">高中物理</p>
             <router-link tag="p" :to="{path:'/qrgSite'}" class="two">高中物理</router-link>
             <!-- <p class="one">高中数学</p> -->
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankSix",
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
.banksix{
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