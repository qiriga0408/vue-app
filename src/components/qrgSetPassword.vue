<template>
    <div class="qrgsetpassword">
        <header>
            <van-nav-bar
                    title="设置密码"
                    right-text="跳过"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            />
        </header>
        
        <ul>
            <li>
                <input type="password" placeholder="请设置密码" v-model="onePas" />
            </li>
            <li>
                <input type="password" placeholder="请再次确认密码" v-model="twoPas" />
            </li>
        </ul>
        <div class="btn">
            <button @click="btnChange()">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pas",
        data(){
            return{
                onePas:'',
                twoPas:''
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/qrgBoarding');
            },
            onClickRight(){
                this.$router.push('/Czp')
            },
           btnChange(){
               if(this.onePas==this.twoPas){
                    var ss= window.localStorage.getItem("mobile")
                    console.log(ss)
                    var ss1=window.localStorage.getItem("sms_code")
                this.$http.post("/api/app/password",{mobile:ss,password:this.onePas,sms_code:ss1}).then((res)=>{
                 window.localStorage.setItem("password",this.onePas)
                    
                }).catch((error)=>{
                    console.log(error);

                })
               }else{
                   alert("密码不一致")
               }
                 
            }
        }
    }
</script>

<style lang="scss" scoped>
.qrgsetpassword{
    width: 100%;
    height: 100%;
    ul{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        li{
            width: 60%;
            margin: .3rem auto;
            border-bottom: .01rem #ddd solid;
            input[type=password]{
                width: auto;
                height:.4rem;
                border: none;
                outline: none;
                font-size: .3rem;
            }
        }
    }
    .btn{
        display: flex;
        justify-content: space-around;
        button{
            display: block;
            width: 80%;
            height:.5rem;
            background: #EB6100;
            border: none;
            outline: none;
            color: white;
            border-radius: .03rem;
            margin:.15rem 0;
        }
    }
}
</style>