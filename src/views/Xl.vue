<template>
    <div id="shouye">
        <div class="content">
            <p>首页内容</p>
           
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer"
export default {
    name:"Xl",
     components:{Footer},
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.$axios.get("data.json").then((res)=>{
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scoped>

</style>