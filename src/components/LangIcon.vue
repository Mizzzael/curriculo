<template>
    <figure class="lang-icon border rounded-full flex flex-wrap items-center">
        <img class="mx-auto" :src="`/assets/langs/${lang}.svg`" alt="" />
    </figure>
</template>
<script>
export default {
    name: "LangIcon",
    props: ["lang"]
};
</script>
<style lang="stylus">
@media only screen and (min-width: 310px)
    .lang-icon
        width 60px
        height 60px
        & img
            max-width 35px
            max-height 35px
</style>
