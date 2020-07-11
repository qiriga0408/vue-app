<template>
<div>
    <div class="SxlYsy">
      <img  class="sxlydyimg1"  @click="fh()" src="../../../public/sxlimg/sxl-1.png" alt="123123213">
      <p>一对一辅导</p>
      <img  class="sxlydyimg2" src="../../../public/sxlimg/sxl-2.png" alt=""> 
    </div>
            



      <el-dropdown>
        <span class="el-dropdown-link">
        选择上课时间<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="sxlel">
  
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
        选择老师条件<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="sxlel">
  
        </el-dropdown-menu>
      </el-dropdown>


</div>
</template>

<script>
export default {
name:"SxlYsy",
 data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    },
 methods:{
        fh(){
            this.$router.go(-1)
        },
       
 },

};
</script>
<style lang="scss" scoped>
.SxlYsy{
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sxlydyimg1{
  width: 0.20rem;
  height: 0.25rem;
}
.sxlydyimg2{
  width: 0.45rem;
  height: 0.45rem;
}
.sxlydyel1{
  width: 1rem;
  height: 1rem;
}
.sxlydyspan1{
  font-weight: 100;
  margin-left: 0.5rem;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .sxlydydiv2{
    width: 100%;
    height: 50%;
    background: #555;
  }
.sxlel{
  width: 100%;
  height: 2rem;
  background: #888;
}
.el-dropdown-link {
  margin-left: 0.8rem;
}  
</style>