<template>
  <div class="calendar">
     <van-calendar v-model="show" :poppable="false" :show-confirm="false" title="学习日历" />
  </div>
</template>

<script>
export default {
    name:'Calendar',
    data(){
        return{
             date: '',
             show: true,
        }
    },
    methods:{
        
    }
}
</script>

<style lang='scss' scoped>

</style>