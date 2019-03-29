<template>
    <div class="container-header" style="height: 500px">
        <div class="pageHeader-navigation" :class="{ sticky: showNav }">
            <div style="width: 100%; margin: 0 auto; position: relative">
                <div style="padding-right: 50px">
                    <el-menu :default-active="activeIndex" mode="horizontal" class="nav" @select="didSelected">
                        <el-menu-item :index="''+index" v-for="(title, index) in titles" :key="index">
                            <a>{{ title }}</a>
                        </el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
        <div class="nav-bg">
            <h1><span>小鸟创意，让品牌飞</span><br>小鸟创意</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Header",
        data: function () {
            return {
                activeIndex: '',
                scrollBottom: '',
                scrollTop: '',
            }
        },
        props: {
            titles: Array
        },
        watch: {
            // titles: {
            //     deep: true,
            //     handler(val, oldVal) {
            //         console.log(val, oldVal)
            //     }
            // }
        },
        methods: {
            scrollHandler() {
                this.scrollBottom = window.scrollY + window.innerHeight
                this.scrollTop = window.scrollY
            },
            didSelected(key, keyPath) {
                console.log(keyPath)
                this.$emit('nav-select', keyPath)
            },
        },
        computed: {
            showNav() {
                return this.scrollTop > 100
            }
        },
        mounted() {
            this.scrollTop = window.scrollY;
            this.scrollBottom = window.scrollY + window.innerHeight;
            window.addEventListener('scroll', this.scrollHandler)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollHandler)
        }
    }
</script>

<style scoped lang="scss">

    // colores
    $color: #8f8f8f;
    $color2: #e8f380;

    .container-header {
        width: 100%;
        min-height: 500px;
        margin: 0 auto;
        position: relative;
        /*padding: 0 2%;*/
    }

    .pageHeader-navigation {
        position: fixed;
        max-height: 70px;
        z-index: 999;
        width: 100%;
        padding-top: 17px;
        background: none;
        overflow: hidden;
        transition: all 0.3s;
        opacity: 0;
        top: -100px;
        padding-bottom: 1px;
    }

    .sticky {
        background-color: #fff;
        opacity: 1;
        top: 0px;
    }

    .nav {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .el-menu-item {
            display: inline-block;
            margin-left: 35px;
            line-height: 1.5;
        }
        a {
            color: #888888;
            text-transform: uppercase;
            font-size: 12px;
        }
    }

    .nav-bg {
        position: relative;
        background: #333 url(http://srdjanpajdic.com/slike/2.jpg) no-repeat center center fixed;
        background-size: cover;
        text-align: center;
        color: #FFF;
        height: 100%;
        width: 100%;
        letter-spacing: 2px;
        margin: 0 auto;
        display: flex;

        h1 {
            font-size: 50px;
            line-height: 1.3;
            margin: auto;

            span {
                font-size: 25px;
                color: $color;
                border-bottom: 2px solid $color2;
                padding-bottom: 20px;
                line-height: 3;
            }
        }
    }
</style>
