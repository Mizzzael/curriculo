<template>
    <section class="w-11/12 mx-auto">
        <section
            v-for="(lang, index) in langs"
            :key="`items-${index}`"
            class="w-full border rounded-md py-4 px-4 my-4"
        >
            <header class="w-full px-3 mx-auto py-4">
                <h4 class="text-md text-gray-500">
                    {{ lang.title }}
                </h4>
            </header>
            <ul class="w-full flex flex-wrap items-center">
                <li
                    class="py-1 px-1 mx-1"
                    v-for="(lang, index) in lang.list"
                    :key="`slill-${index}`"
                >
                    <LangIcon :lang="lang" />
                </li>
            </ul>
        </section>
    </section>
</template>
<script>
import { skills } from "../assets/js/skills.json";
import LangIcon from "./LangIcon";
export default {
    name: "Skills",
    data() {
        return {
            langs: skills
        };
    },
    components: {
        LangIcon
    }
};
</script>
