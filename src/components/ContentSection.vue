<template>
    <div class="row content">
        <h1>
            <slot name="title"></slot>
        </h1>
        <p>
            <slot name="content"></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ContentSection"
    }
</script>

<style scoped lang="scss">
    .row {
        position: relative;
        width: 100%;
        max-width: 940px;
        margin: 0 auto;
        padding: 0 2%;
    }
    .content {
        padding: 50px 2% 50px;
    }
    h1 {
        font-size: 30px;
        line-height: 1.8;
        text-transform: uppercase;
        text-align: left;
    }
    p {
        margin-bottom: 20px;
        font-size: 17px;
        text-align: left;
        line-height: 2;
    }
</style>
