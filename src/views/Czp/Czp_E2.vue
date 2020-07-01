<template>
    <div class="box">
        <header>
            <van-nav-bar title="个人信息" left-arrow/>
        </header>
        <main>
            <van-cell-group>
                <van-cell title="头像" value="内容" is-link @click="showPopup"  />
                <van-popup
                        v-model="show"
                        position="bottom"
                        :style="{ height: '30%' }"
                >
                    <ul>
                        <li>拍照</li>
                        <li>从手机相册选择</li>
                        <li>取消</li>
                    </ul>
                </van-popup>
                <van-cell title="姓名" value="李木木" is-link  />
                <van-cell title="手机号码" value="13910199801" is-link  />
                <van-cell title="性别" value="女" is-link  />
                <van-cell title="出生日期" value="1998-05-21" is-link  />
                <van-cell title="所在城市" value="北京" is-link  />
                <van-cell title="年级" value="高一" is-link  />
                <van-cell title="学科" value="数学/语文/英语/物理/化学" is-link  />
            </van-cell-group>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Czp_E2",
        data(){
            return{
                show:false
            }
        },
        methods:{
            showPopup(){
                this.show = !this.show;
            },
        },
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    main{
        .van-cell-group{
            .van-cell{
                color: #333333;
                font-size: 12px;
            }
            .van-popup{
                ul{
                    width: 100%;
                    height: 100%;

                    li{
                        width: 100%;
                        height: 32.8%;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        border-bottom: 1px #ddd solid;
                        font-size: 14px;
                        color: #333333;
                    }
                }
            }
        }
    }
}
</style>