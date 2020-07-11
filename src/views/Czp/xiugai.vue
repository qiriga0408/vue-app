 <template>
   <div>
       <header>
            设置密码
       </header>
    <input type="text" placeholder="求输入手机号" v-model="ss"> <span @click="yz">获取验证码</span>
  
    <input type="text" placeholder="亲输入验证码" v-model="ss1">
     <input type="text" placeholder="输入密码" v-model="ss2">

            <button @click="ck">确定</button>
   </div>

 </template>
 
 <script>
 export default {
     data(){
         return{
             ss:"",
             ss1:"",
             ss2:""

         }
     },
     methods:{
         yz(){
                
            this.$http.post('/api/app/smsCode',{mobile:this.ss,sms_type:"getPassword" }).then((res)=>{
                console.log(res)
            })
         },
         ck(){
               this.$http.post('/api/app/password',{mobile:this.ss, password:this.ss2,sms_code :this.ss1 }).then((res)=>{
                console.log(res)
            })
         }
     }
 }
 </script>
  
 <style>
 
 </style>