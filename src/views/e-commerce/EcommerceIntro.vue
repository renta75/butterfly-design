<template>
    <div class="container e-commerce__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="e-commerce__intro" />
        <div class="e-commerce__intro__text-wrapper">
            <h2 class="e-commerce__intro__heading">E COMMERCE</h2>
            <h3 class="e-commerce__intro__subheading">Custom online store for your business</h3>
            <p class="e-commerce__intro__text">We are offering a mix of professional web-design, user friendly
                interface, advanced features and an easy administration of your
                online shop. Easy to use, change, update and maintain, daily
                backups making sure that you will not lose your data no matter
                what would happen.
            </p>
        </div>
    </div>
</template>

<script>
import lottie from "@/components/lottie.vue";
import * as heroAnimation from "@/assets/e-commerce/eCommerce.json";

export default {
    name: 'ECommerceIntro',
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