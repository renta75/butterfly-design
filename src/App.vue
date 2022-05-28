<template>
    <div class="website-wrapper">
        <header-global />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <footer-global v-show="loaded" />
    </div>
</template>

<script>
import HeaderGlobal from "./components/Header.vue";
import FooterGlobal from "./components/Footer.vue";

export default {
    components: {
        HeaderGlobal,
        FooterGlobal,
    },
    data() {
        return {
            loaded: false,
        };
    },
    metaInfo: {
        title: "Butterfly Design",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, user-scalable=no",
            },
        ],
        htmlAttrs: {
            lang: "en",
            amp: true,
        },
    },
    watch: {
        $route() {
            this.loaded = false;
            setTimeout(() => {
                this.loaded = true;
            }, 500);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";

.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.3s;
}

.fade-enter-active {
    transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
