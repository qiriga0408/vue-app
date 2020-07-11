<template>
    <div>
        <div class="loding_img">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" />
        </div>    
        <div class="loding_loding">
            <div>
                <div ref="div1" class="inp">
                    <input v-model="user" placeholder="请输入手机号" />
                    <span :class="flag?'qrg':'qrg1'"  @click="pass">{{tst}}</span>
                </div>
                <div ref="div2" class="inp">
                    <input  v-model="code" placeholder="请输入短信验证码" />
                </div>
                <div class="loding_loding_Registration">
                    <div>*未注册的手机号将自动注册</div>
                    <div v-on:click="password">使用密码登录</div>
                </div>
                <button class="btn" @click="login">登录</button>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    name:'qrgBoarding',
    data(){
        return{
            user:'',
            code:'',
            sj:60,
            flag:true,
            tst:"获取验证码"

        }
    },
    methods:{
        password(){
            this.$router.push('/qrgCodeLogin')
        },
        //获取验证码
        pass(){
       if(this.flag){
            this.$http.post('/api/app/smsCode',{
                mobile:this.user,
                sms_type:'login' 
            }).then((res)=>{
     
                   this.id=setInterval(()=>{
                this.sj --
                this.tst=`发送验证码(${this.sj})`
    this.flag=false
                if(this.sj<=0){
                     this.tst=`发送验证码`
               this.sj=60
               this.flag=true
                    clearInterval(this.id)  
                        
                }
               

            },1000)

           
                console.log(res)
            }).catch(error=>{
                console.log(error + "报错了555")
            }) 
            }
        },
        //登录
        login(){


            this.$http.post('/api/app/login',{
                mobile:this.user,
                sms_code:this.code,
                type:2,
                client:1 
            }).then((res)=>{
                
                window.localStorage.setItem("remember_token",res.data.data.remember_token)
                window.localStorage.setItem("userid",res.data.data.id)
                window.localStorage.setItem("mobile",res.data.data.mobile)
                window.localStorage.setItem("sms_code",this.code)
                if(res.data.data.isnew==2){
                     this.$router.push({path:'/qrgSetPassword'})
                }else{
                     this.$router.push({path:'/Czp/Czp_E1'})
                }
                
                
               
            }).catch(error=>{
                console.log(error+"报错了")
            })
        }
    },
    created(){
     
    
    
    },
    mounted(){

    }
}
</script>

<style scoped>
.loding_img{
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
}
.loding_img img{
    width: 60%;
}
.loding_loding{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loding_loding>div{
    width: 100%;
    /* background: pink; */
}
.loding_loding>div>.inp{
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}
.loding_loding>div>.inp>input{
    width: 100%;
    height: 50%;
    border:none;
    outline: none;
    background: #F0F2F5;
}
.loding_loding_Registration{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* font-size: 0.4rem; */
    /* background: red; */
    color: gray;
}
.btn{
    width: 100%;
    height: 1rem;
    border: none;
    outline: none;
    color: white;
    border-radius: 20px;
    background: #FE7D2F;
    margin-top: 1.5rem;
    font-size: 0.6rem;
}
.qrg{
    color:#FE7D2F;

}
.qrg1{
    color: grey;
}
</style>