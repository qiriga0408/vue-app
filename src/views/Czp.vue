<template>
    <div id="my">
        <main>
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Czp",
    components:{Footer},
}
</script>
<style lang="scss" scoped>
#my{
    width: 100%;
    height: 100%;
}
</style>