<template>
    <div>
        <footer>
            <ul>
                <li>
                   <router-link to="/shouye">首页</router-link> 
                </li>
                <li>
                    <router-link to="/fenlei">分类</router-link>
                </li>
                <li>  
                <router-link to="/shopping">购物车</router-link>
                </li>
                <li>
                    <router-link to="/my">我的</router-link>
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