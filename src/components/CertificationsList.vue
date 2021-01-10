<template>
    <section class="w-full flex flex-wrap">
        <div
            v-for="(crt, index) in certification"
            :key="`certification-${index}`"
            class="lg:w-full px-2 py-2"
        >
            <Certification :data="crt" />
        </div>
    </section>
</template>
<script>
import Certification from "./Certification";
export default {
    name: "CertificationsList",
    components: {
        Certification
    }
};
</script>
