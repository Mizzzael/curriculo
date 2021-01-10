<template>
    <section class="w-full">
        <figure class="lg:w-11/12 mx-auto">
            <img
                :src="`/assets/img/certificados/${imagename}.jpg`"
                class="w-auto mx-auto"
                alt=""
            />
        </figure>
    </section>
</template>
<script>
export default {
    name: "CertificationDoc",
    data() {
        return {
            imagename: this.$route.params.code
        };
    }
};
</script>
