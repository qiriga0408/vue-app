<template>
    <div>
        <footer>
            <ul>
                <li>
                   <router-link to="/Xl">首页</router-link> 
                </li>
                <li>
                    <router-link to="/Zh">课程</router-link>
                </li>
                <li>  
                <router-link to="/Sxl">约课记录</router-link>
                </li>
                 <li>  
                    <router-link to="/Qrg">练习</router-link>
                </li>
                <li>
                    <router-link to="/Czp">我的</router-link>
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