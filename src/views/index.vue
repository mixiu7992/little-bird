<template>
    <div>
        <page-header v-bind:titles="titles" v-on:nav-select="scrollTo"></page-header>
        <content-section :class="'section-'+key" v-for="(section, key) in sections" :key="key">
            <p slot="title">{{ section.title }}</p>
            <p slot="content">{{ section.content }}t</p>
        </content-section>
        <div style="width: 100%;height: 1000px; background-color: beige"></div>
    </div>
</template>

<script>
    import PageHeader from '@/components/Header.vue'
    import ContentSection from "@/components/ContentSection";
    import _ from 'lodash'

    export default {
        name: "index",
        components: {PageHeader, ContentSection},
        data() {
            return {
                sections: [
                    {'title': '公司介绍', 'content': '小鸟创意文化有限公司是由香港和内地知名媒体人、资深影视製作团队以及IT精英共同创办。'},
                    {'title': '公司业务', 'content': '网络直播：图片直播、视频直播\n' +
                            '品牌视频：优质纪录片、企业宣传片\n' +
                            '媒体公关：新闻发布会、国际公关稿\n'},
                    {'title': '合作品牌', 'content': '为大型财经论坛、金融峰会、新闻发佈会、 明星演唱会、娱乐时尚活动等进行现场网 络视频直播、图片直播、电视媒体转播;\n' +
                            '是路透社的直播合作战略伙伴，为路透社 提供专属技术服务。\n'},
                    {'title': '支持媒体', 'content': '为大型财经论坛、金融峰会、新闻发佈会、 明星演唱会、娱乐时尚活动等进行现场网 络视频直播、图片直播、电视媒体转播;\n' +
                            '是路透社的直播合作战略伙伴，为路透社 提供专属技术服务。\n'},
                ]
            }
        },
        methods: {
            scrollTo(keyPath) {
                let op = {
                    offset: -100
                }
                this.$scrollTo('.section-'+keyPath, op)
            }
        },
        computed: {
            titles() {
                return _.map(this.sections, 'title')
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
