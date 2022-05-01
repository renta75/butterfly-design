<template>
    <div class="website-wrapper">
        <header-global />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <footer-global />
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
    metaInfo: {
        title: "Butterfly Design",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
        ],
        htmlAttrs: {
            lang: "en",
            amp: true,
        },
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}

.fade-enter-active {
  transition-delay: .3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
