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
                <li>
                    <van-icon name="contact" />
                    <router-link to="/qrgCodeLogin">我的</router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none; 
}

</style>