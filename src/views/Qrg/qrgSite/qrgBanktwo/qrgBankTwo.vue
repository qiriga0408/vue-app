<template>
  <div class="banktwo">
      <div class="content">
          <p class="one">两个重要</p>
            <router-link tag="p" :to="{path:'/qrgSite'}" class="two">数学</router-link>
      </div>
  </div>
</template>

<script>
export default {
name:"qrgBankTwo",
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
.banktwo{
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        height: auto;
        color: grey;
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