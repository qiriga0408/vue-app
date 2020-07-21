<template>
  <div class="infosetterbox">
    <van-nav-bar title="个人信息" left-arrow />
    <ul class="infolist" v-if="info">
      <li class="infolist-cell" @click="setinfo('avatar')">
        <span class="one">头像</span>
        <span class="two">
          <img :src="info.avatar" />
        </span>
      </li>
      <li class="infolist-cell" @click="setinfo('nickname')">
        <span class="one">昵称</span>
        <span class="two">{{ info.nickname }}</span>
      </li>
      <li class="infolist-cell mobile">
        <span class="one">手机号</span>
        <span class="two">{{ info.mobile }}</span>
      </li>
      <li class="infolist-cell" @click="setinfo('性别')">
        <span class="one">性别</span>
        <span class="two">{{ info.sex==3?'保密':info.sex?'女':'男' }}</span>
      </li>
      <li class="infolist-cell" @click="setinfo('出生日期')">
        <span class="one">出生日期</span>
        <span
          class="two"
        >{{ info.birthday?info.birthday:'请选择' }}</span>
      </li>
      <li class="infolist-cell" @click="setinfo('address')">
        <span class="one">所在城市</span>
         <span
          class="two"
        >{{ [info.province_name,info.city_name,info.district_name].filter(m=>{return m.trim()}).join(',')?[info.province_name,info.city_name,info.district_name].join(','):'请选择' }}</span>
      </li>
      <li class="infolist-cell" @click="setinfo('学科')">
        <span class="one">学科</span>
        <span class="two">{{ attr&&attr.length?attr[0].attr_value:'请选择' }}</span>
      </li>
      <li class="infolist-cell" @click="setinfo('年级')">
        <span class="one">年级</span>
        <span class="two">{{ attr&&attr.length>1?attr[1].attr_value:'请选择' }}</span>
      </li>
    </ul>
    <!-- 修改头像 -->
    <van-action-sheet 
      cancel-text="取消"  
      class="decide-avatar"
    >
        <div class="decide-avatar-camera">
            拍照
            <input 
              @change="uploadimg('c',$event)" 
              ref="fromcamera"
              type="file"
               accept="image/*" 
              capture="camera" 
            />
        </div>
        <div class="decide-avatar-local">
            从手机相册选择
            <input
              @change="uploadimg('l',$event)" 
              type="file" 
              accept="image/*" 
              ref="fromlocal"
            />
        </div>
    </van-action-sheet>

    <!-- 出生日期 -->
    <!-- <van-action-sheet
      class="decide"
    >
        <van-datetime-picker
            v-model="birthdata"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm='decide_birth'
        />
    </van-action-sheet> -->
    <!-- 所在城市 -->
      <van-popup
        v-model="showPopup"
        position="bottom"
    >
      <!-- 三级联动 -->
        <van-area 
        title="标题"
          @confirm="confirmArea"
          @change="changeArea"
          :area-list="areaList" 
          :columns-num="3" />
    </van-popup>

    <!-- 年级 -->
        <!-- <van-action-sheet
        close-on-click-action
      class="decide-grade"
    >
      <van-picker
        title="标题"
        show-toolbar
        @confirm="grade_confirm"
      ></van-picker>
      </van-action-sheet> -->



  </div>
</template>

<script>
import area from "@/util/area";
import attr from "@/util/myinfo_attr";
export default {
  data() {
    return {
      attrlist:attr.data,
      local_img:null,
    
   
     
      // 遮罩层
      show: false,
      // 时间拾取
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2025,11,30),
      birthdata: new Date(),
      info: null,
      attr: null,
      empty_attr: [
        { attr: "学科", attr_value: "" },
        { attr: "年级", attr_value: "" }
      ],
       areaList:{
         //省列表
          province_list:{
              
          },
          //市列表
          city_list:{

          },
          //区列表
          county_list: {

          }
        },
      //显示省市区三级联动
      showPopup:false,
      infobox:{
        avatar:'',
        birthday:'',

        // getuserinfo:[]

      }
    };
  },
  created() {
    // console.log(this.getuserinfo)
  },
  mounted() {
   
    this.getuserinfo();
      this.getuserattr()
  },
  //props:{},//[]
  methods: {
    // skip_to_set(str){
     
    // },
      // 点击每条 信息栏 分支处理 打开对应面板或跳转
    setinfo(keystr) {
      switch (keystr) {
        
        case "nickname":
          // console.log("本页修改 " + keystr);
          // this.rise._avatar = true;
           this.$router.push({
              path:'/gredit',
              query:{
                keystr:"nickname",
                value:this.info.nickname
              }
          })
          break;
               case "address":
                //  console.log("123")
          //点击显示弹出层
          this.showPopup=true;
          this.getAddress();

          break;
     
   
      }
    },
    //城市三级联动确认按钮
    confirmArea(val){
        console.log(val)
        this.$http.put("/api/app/user",{
                city_id: val[1].code,
                district_id:  val[2].code,
                province_id:  val[0].code
        }).then((res)=>{
          if(res.data.code==200){
              this.$toast("设置城市成功")
              this.showPopup=false
              this.getuserinfo()
          }
        })
    
    },
    //当城市三级联动发生改变时进行触发
    changeArea(picker,data,index){
      // console.log("123")
      switch(index){
          case 0:
            //需要调取市列表还有区列表
              this.$http.get(`/api/app/sonArea/${data[0].code}`).then((res)=>{
                     //获取省列表
                    let city=res.data.data
                    // console.log(province)
                    let data={}
                    city.forEach(item => {
                        data[item.id]=item.area_name
                    });
                    // console.log(data)
                    //处理之后的省列表数据
                    this.areaList.city_list=data
                    return this.$http.get(`/api/app/sonArea/${city[0].id}`)
              }).then((res)=>{
                  let county=res.data.data//获取区列表
                  let data={}
                  county.forEach((item)=>{
                      data[item.id]=item.area_name
                  })
                   this.areaList.county_list=data

              })
            break;
            case 1:
              //需要调取区列表
              this.$http.get(`/api/app/sonArea/${data[1].code}`).then((res)=>{
                     let county=res.data.data//获取区列表
                  let data={}
                  county.forEach((item)=>{
                      data[item.id]=item.area_name
                  })
                   this.areaList.county_list=data

              })
      }
    },
    //获取省市区列表数据
    async getAddress(){
      // 省列表数据
      let {data:res}=await this.$http.get("api/app/sonArea/0?")
      // console.log(res)
      //获取省列表
      let province=res.data
      // console.log(province)
      let data={}
      province.forEach(item => {
          data[item.id]=item.area_name
      });
      // console.log(data)
      //处理之后的省列表数据
      this.areaList.province_list=data

      //  市列表数据
      let {data:resCity}=await this.$http.get(`api/app/sonArea/${province[0].id}`)
      // console.log(res)
      //获取省列表
      let city=resCity.data
      // console.log(province)
       data={}
      city.forEach(item => {
          data[item.id]=item.area_name
      });
      // console.log(data)
      //处理之后的省列表数据
      this.areaList.city_list=data

         // 区列表数据
      let {data:resCounty}=await this.$http.get(`api/app/sonArea/${city[0].id}`)
      // console.log(res)
      //获取省列表
      let county=resCounty.data
      // console.log(province)
       data={}
      county.forEach(item => {
          data[item.id]=item.area_name
      });
      // console.log(data)
      //处理之后的省列表数据
      this.areaList.county_list=data

    },



    // 出生日期 确认选择
    // async decide_birth(v){
    //   let birthday=[
    //     v.getFullYear(),
    //     v.getMonth()+1,
    //     v.getDate()
    //   ].map(m=>{return (''+m).padStart(2,'0')}).join('-')
    //   this.infobox.birthday=birthday
    //   // console.log(birthday)
    //   let {data}=await this.$axios.put(
    //     `http://120.53.31.103:84/api/app/user`,{
    //       birthday,
    //       avatar:this.infobox.avatar
    //     }
    //   )
    //   // console.log(data)
    //   // 重新获取info数据
    // this.getuserinfo();
    // // 关闭面板
    // },
    // 获取 转化 上传 图片
    // uploadimg(key,e=event){
    //   this.local_img=e.target.files[0]
    //   let type=this.local_img.type.split('/')[0]
    //   if(type=='image'){
    //     let reader=new FileReader()
    //     reader.readAsDataURL(this.local_img)
    //     reader.onloadend=()=>{
    //       let dataURL=reader.result;
    //       let blob=this.dataURItoBlob(dataURL)
    //       this.upload_file(blob)
    //     }
    //   }else{
    //     console.log('这不是图片')
    //   }
    //   // this.rise._avatar=false
    // },
    // 图片转码
    // dataURItoBlob(dataURI){
    //   let byteString=atob(dataURI.split(',')[1]);
    //   let mimeString=dataURI.split(',')[0].split(':')[1].split(';')[0]
    //   let ab=new ArrayBuffer(byteString.length);
    //   let ia=new Uint8Array(ab)
    //   for(let i=0;i<byteString.length;i++){
    //     ia[i]=byteString.charCodeAt(i)
    //   }
    //   return new Blob([ab],{type:mimeString})
    // },
    // 上传图片 设置头像
    // async upload_file(imgUrl){
    // // 模拟表单数据
    //   let formdata=new FormData()
    //   formdata.append('file',imgUrl)
    //   let {data:res}=await this.$axios.post(
    //     `http://120.53.31.103:84/api/app/public/img`,formdata,{
    //       headers:{
    //         'Content-Type':'multipart/form-data'
    //       }
    //     }
    //   )
    //   // 记录上传后图片的线上地址备用
    //   this.infobox.avatar=res.data.path

    //   // 用线上地址图片作为头像
    //   let {data}=await this.$axios.put(
    //     `http://120.53.31.103:84/api/app/user`,{
    //       avatar:res.data.path
    //     }
    //   )
    //   // console.log(data)
    //   // 重获取info数据
    //   this.getuserinfo();
    // },
    // 根据 年级名称 获取 对应id
    // grade_switch(grade_str){
    //   let key_id=this.attrlist[0].value.find(m=>{
    //     return m.name==grade_str
    //   }).id
    //   return key_id
    // },
    // 年级 确认选择
    // async grade_confirm(gstr) {
    //   console.log("确认 年级 选项");
    //   let keyid=this.grade_switch(gstr)
    //   console.log('年级id',keyid)
    //   let attr=[
    //     {"attr_id":1,"attr_val_id":keyid},
    //     {"attr_id":2,"attr_val_id":7}
    //   ]
    //   // 按接口要求转化为字串
    //   attr=JSON.stringify(attr)
    //   console.log('参数字串',attr)
    //   let {data:res}=await this.$axios.put(
    //     `http://120.53.31.103:84/api/app/user`,{
    //       user_attr:attr,
    //       avatar:this.infobox.avatar
    //     }
    //   )
    //   console.log(res)
    //   this.getuserinfo();
    //   this.getuserattr()
    //   // this.rise._grade=false
      
    // },
  

    // 初始化数据
    async getuserinfo() {
      let {data: res} = await this.$axios.get(
        `http://120.53.31.103:84/api/app/userInfo`

      );
      
      this.info = res.data;
      // console.log(res.data)
      // this.attr = res.attr.length?res.attr:this.attrlist;
      // console.group('getuserinfo输出')
          // console.log('用户信息',this.info)
          // console.log('用户属性',this.attr)
      // console.groupEnd()
      // 记录项目数据留作备用
      // 头像
      // this.infobox.avatar=this.info.avatar
     
    },
    // 获取年级和学科列表
    async getuserattr(){
      let {data:{data:res}}=await this.$axios.get(
        `http://120.53.31.103:84/api/app/module/attribute/1`
      )
      // console.log('专程获取年级和学科数据',res)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  directives: {},
  components: {}
};
</script>

<style scoped lang='scss'>
.decide {
  &-avatar {
    &-camera {
          padding: 1.33333vw 4vw;
          background: #fff;
          height: 12.26667vw;
          line-height: 12.26667vw;
          font-size: 4.53333vw;
          font-weight: 300;
          color: #030303;
          text-align: center;
          display: block;
          justify-content: space-between;
          position: relative;
          input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            color: inherit;
            font: inherit;
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 1px;
            background-color: #f5f5f5;
          }
    }
    &-local {
          padding: 1.33333vw 4vw;
          background: #fff;
          height: 12.26667vw;
          line-height: 12.26667vw;
          font-size: 4.53333vw;
          font-weight: 300;
          color: #030303;
          text-align: center;
          display: block;
          justify-content: space-between;
          position: relative;
          input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            color: inherit;
            font: inherit;
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 1px;
            background-color: #f5f5f5;
          }
    }
  }
}
.avatar-setter {
    background: rgba($color: #000000, $alpha: 0.5);
}
.infosetterbox {
  height: 100%;
  background: #f0f2f5;
}
.infolist {
  background: #fff;
  margin: 2.66667vw 0;
  padding: 1.33333vw 4vw;

  &-cell {
    height: 14.66667vw;
    line-height: 14.66667vw;
    display: flex;
    justify-content: space-between;
    position: relative;
    &:not(.mobile):after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 2.66667vw;
      height: 2.66667vw;
      border-top: 1px solid #b7b7b7;
      border-right: 1px solid #b7b7b7;
    }
    span {
      &.one {
        font-size: 3.73333vw;
        color: #595959;
      }
      &.two {
        font-size: 3.73333vw;
        color: #8c8c8c;
        margin-right: 6.66667vw;
      }
      img {
        width: 9.86667vw;
        height: 9.86667vw;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
}
</style>