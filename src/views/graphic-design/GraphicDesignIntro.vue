<template>
    <div class="container graphic-design__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="graphic-design__intro" />
        <div class="graphic-design__intro__text-wrapper">
            <h2 class="graphic-design__intro__heading">GRAPHIC DESIGN</h2>
            <p class="graphic-design__intro__text">We design with data, crafting solutions around real customer activity. Creating new brands and digital experiences that engage and excite the customer. We undertake to understand your business and customer needs in order to deliver a product or service that really makes a difference.
            </p>
        </div>
    </div>
</template>

<script>
import lottie from "@/components/lottie.vue";
import * as heroAnimation from "@/assets/graphic-design/GraphicDesign.json";

export default {
    name: 'GraphicDesignIntro',
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