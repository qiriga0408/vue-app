<template>
  <div class="courselist">
       <ul class="index-item-page">
                    <li class="ii-item" v-for="(v,i) of CourseList" :key="i" @click="toCourseD(v)">
                        <p class="ii-title">{{ v.title }}</p>
                        <p     class="ii-time"
                        >{{ v.start_play_date}} | 共{{ v.total_periods }}课时</p>
                        <div class="ii-teacher" v-for="(item,index) in v.teachers_list" :key="index">
                            <img :src="item.teacher_avatar" alt />
                            <font>{{ item.teacher_name }}</font>
                            <i class="has-buy" v-show="v.has_buy==1"></i>
                        </div>
                        <p class="ii-info">
                            <span class="person">{{ v.sales_num }}人已报名</span>
                            <span class="free" v-if="v.price ==0">免费</span>
                            <span class="price" v-else>
						   <!-- <img src="../assets/pic/gold.png" alt /> -->
							{{ v.price | much }}
						  </span>
                        </p>
                    </li>
                </ul>
  </div>
</template>

<script>
export default {
name:"courseList",
  components: {},
 
  data() {
    return {
    };
  },
   props:{
       CourseList:{
           type:Array,
           default:[]
       }
   },
  watch: {},
  computed: {},
  methods: {
       
  },
  created() {
    //   this.getnewlist()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.courselist{
    widows: 100%;
    height: auto;
}
</style>