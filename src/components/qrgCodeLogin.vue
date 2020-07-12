<template>
    <div class="codelogin">
        <div class="loding_img">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" />
        </div>    
        <div class="loding_loding">
            <div>
                <div ref="div1" class="inp">
                    <input placeholder="请输入手机号"  v-model="ss"/>
                </div>
                <div ref="div2" class="inp">
                    <input   placeholder="请输入密码" v-model="ss1" />
                </div>
                <div class="loding_loding_Registration">
                    <div v-on:click="password">找回密码</div>
                    <div v-on:click="reg">注册/验证码登录</div>
                </div>
                <button class="btn" @click="dlu">登录</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            ss:"",
            ss1:""
        }
    },
    methods:{

        password(){
            this.$router.push('/qrgPassword')
        },
        reg(){
            this.$router.push('/qrgBoarding')
        },
        dlu(){
            this.$http.post('/api/app/login',{
                mobile:this.ss,
            password:this.ss1,
                type:1
          
            }).then((res)=>{
             
                console.log(res)
                window.localStorage.setItem("remember_token",res.data.data.remember_token)
              
 window.localStorage.setItem("mobile",res.data.data.mobile)
                if(res.data.code==200){
                    this.$router.push({path:'/Czp/Czp_E1'}) 
                }else{
                    alert("账号密码不正确")
                }
                   
                
                  
            }).catch(error=>{
                console.log(error+"报错了")
            })
        }
            
        
    }
}
</script>

<style scoped>
.codelogin{
    width: 100%;
    height: 100%;

}
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
    width: 70%;
    /* background: pink; */
}
.loding_loding>div>.inp{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}
.loding_loding>div>.inp>input{
    width: 100%;
    height: 90%;
    border:none;
    outline: none;
    background: #F0F2F5;
}
.loding_loding_Registration{
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4rem;
    /* background: red; */
    color: gray;
}
.btn{
    width: 80%;
    height: 1rem;
    border: none;
    outline: none;
    color: white;
    border-radius: 20px;
    background: #FE7D2F;
    margin-top: 1.5rem;
    font-size: 0.6rem;
}
</style>