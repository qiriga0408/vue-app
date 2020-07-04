<template>
    <div class="box">
        <header>
            <router-link to="/Czp" tag="span"><</router-link>
            <a>个人信息</a>
        </header>
        <main>
            <van-cell-group>
                <van-cell title="头像" value="内容" is-link @click="showPopup1"  />
                <van-popup
                        v-model="show1"
                        position="bottom"
                        :style="{ height: '30%' }"
                >
                    <ul>
                        <li>拍照</li>
                        <li>从手机相册选择</li>
                        <li>取消</li>
                    </ul>
                </van-popup>
                <van-cell title="姓名" value="李木木" is-link @click="showPopup2" />
                <van-popup
                        v-model="show2"
                        position="bottom"
                        :style="{width:'100%', height: '100%' }"
                >
                    <div class="show_top">
                        <a @click="qx2()"><</a>
                        <span>修改姓名</span>
                        <strong>保存</strong>
                    </div>
                    <div>
                        <p>
                            <input type="text" placeholder="李木木">
                        </p>
                    </div>
                </van-popup>
                <van-cell title="手机号码" value="13910199801" is-link  />
                <van-cell title="性别" value="女" is-link @click="showPopup3"  />
                <van-popup
                        v-model="show3"
                        position="bottom"
                        :style="{width:'100%', height: '100%' }"
                >
                    <div class="show_top">
                        <a @click="qx3()"><</a>
                        <span>修改性别</span>
                        <strong>保存</strong>
                    </div>
                    <div>
                        <p>
                            <li>男</li>
                            <li>女</li>
                        </p>
                    </div>
                </van-popup>
                <van-cell title="出生日期" value="1998-05-21" is-link @click="showPopup4" />
                <van-popup
                        v-model="show4"
                        position="bottom"
                        :style="{width:'100%', height: '35%' }"
                >
                    <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            title="选择年月日"
                            :min-date="minDate"
                            :max-date="maxDate"
                    />
                </van-popup>
                <van-cell title="所在城市" value="北京" is-link @click="showPopup5" />
                <van-popup
                        v-model="show5"
                        position="bottom"
                        :style="{width:'100%', height: '35%' }"
                >
                    <van-picker
                            title="标题"
                            show-toolbar
                            :columns="columns"
                    />
                </van-popup>
                <van-cell title="年级" value="高一" is-link @click="showPopup6" />
                <van-popup
                        v-model="show6"
                        position="bottom"
                        :style="{width:'100%', height: '35%' }"
                >
                    <van-picker
                            title="标题"
                            show-toolbar
                            :columns="columns2"
                    />
                </van-popup>
                <van-cell title="学科" value="数学/语文/英语/物理/化学" is-link @click="showPopup7"  />
                <van-popup
                        v-model="show7"
                        position="center"
                        round
                        closeable
                        :style="{width:'80%', height: '60%'  }"
                >
                 <h2>学科选择</h2>
                </van-popup>
            </van-cell-group>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Czp_E2",
        data(){
            return{
                show1:false,
                show2:false,
                show3:false,
                show4:false,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                show5:false,
                columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
                columns2: ['高一', '高二', '高三', '初一', '初二'],
                show6:false,
                show7:false,

            }
        },
        methods:{
            showPopup1(){
                this.show1 = !this.show1;
            },
            showPopup2(){
                this.show2 = !this.show2;
            },
            qx2(){
                this.show2 = !this.show2;
            },
            showPopup3(){
                this.show3 = !this.show3;
            },
            qx3(){
                this.show3 = !this.show3;
            },
            showPopup4(){
                this.show4 = !this.show4;
            },
            formatter(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`;
                }
                return val;
            },
            showPopup5(){
                this.show5 = !this.show5;
            },
            showPopup6(){
                this.show6 = !this.show6;
            },
            showPopup7(){
                this.show7 = !this.show7;
            },
        },
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    header{
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        span{
            flex: 2;
            margin: 0 15px;
            font-size: 24px;
        }
        a{
            flex: 3;
        }
    }
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
                .show_top{
                    width: 100%;
                    height: 38px;
                    border-bottom: 2px #ddd solid;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
            }
        }
    }
}
</style>