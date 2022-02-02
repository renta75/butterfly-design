<template>
    <div class="container maintenance__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="maintenance__intro__img" />
        <div class="maintenance__intro__text-wrapper">
            <h2 class="maintenance__intro__heading">MAINTENANCE</h2>
            <h3 class="maintenance__intro__subheading">Maintaining websites it’s technical and tedious, let us do it for you!</h3>
            <p class="maintenance__intro__text">Wordpress Website Maintenance, Setup, Fixes and Optimization custom made for your needs</p>
        </div>
    </div>
</template>

<script>
import lottie from "@/components/lottie.vue";
import * as heroAnimation from "@/assets/maintenance/Maintenance.json";

export default {
    name: 'MaintenanceIntro',
    components: {
        lottie
    },
    data() {
        return {
            anim: null,
            heroLottieOptions: {
                animationData: heroAnimation.default
            }
        };
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        }
    }
}
</script>