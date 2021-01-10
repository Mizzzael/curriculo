<template>
    <section class="w-full py-2 px-2">
        <section class="w-full px-4 py-4 shadow rounded-md mx-auto">
            <header class="w-full py-1 px-4">
                <h4 class="text-md font-normal py-2">
                    {{ data.title }}
                </h4>
                <p class="text-xs text-gray-400">
                    <i class="fa fa-graduation-cap"></i> {{ data.school }}
                </p>
            </header>
            <section class="w-full py-2 px-6">
                <p class="text-xs text-gray-600">
                    <i class="fa fa-quote-left"></i> {{ data.description }}
                    <i class="fa fa-quote-right"></i>
                </p>
            </section>
            <footer class="w-full px-4 py-2">
                <router-link :to="`/certifications/${data.code}`">
                    <span
                        class="certification.btn shadow px-4 py-2 rounded-sm text-sm text-gray-400"
                    >
                        Certificado
                    </span>
                </router-link>
            </footer>
        </section>
    </section>
</template>
<style lang="stylus">
.certification\\.btn
    transition linear 200ms all
    &:hover
        background-color #F5F5F4
</style>
<script>
export default {
    name: "Certification",
    props: ["data"]
};
</script>
