<template>
    <div>
        <footer>
            <ul>
                <li>
                    <van-icon name="home-o" />
                   <router-link to="/Xl">首页</router-link> 
                </li>
                <li>
                    <van-icon name="bar-chart-o" />
                    <router-link to="/Zh">课程</router-link>
                </li>
                <li>  
                    <van-icon name="thumb-circle-o" />
                    <router-link to="/Sxl">约课记录</router-link>
                </li>
                 <li>  
                     <van-icon name="records" />
                    <router-link to="/Qrg">练习</router-link>
                </li>
                    
                <li @click="ss">
                    <van-icon name="contact" />
                    我的
        
                </li>
            </ul>
        </footer>
    </div>
</template>


<script>
export default {
    name:"Footer",

    methods:{
    ss(){
         var xl=window.localStorage.getItem("remember_token")
        if(xl){
           
        this.$router.push({path:'/Czp/Czp_E1'}) 
        }else{
             this.$router.push({path:'/qrgCodeLogin'}) 
        }
        
    }
    } 
   
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none; 
}

</style>