<template>
    <div class="website-wrapper">
        <header-global />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
<<<<<<< HEAD
        <footer-global />
=======
        <footer-global v-if="loaded" />
>>>>>>> d3f0247f4d13774720bbec468d1e7708270addf8
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
            }, 1000);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";

<<<<<<< HEAD
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}

.fade-enter-active {
  transition-delay: .3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
=======
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
>>>>>>> d3f0247f4d13774720bbec468d1e7708270addf8
}
</style>
