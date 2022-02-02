<template>
    <div class="container web-development__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="web-development__intro" />
        <div class="web-development__intro__text-wrapper">
            <h2 class="web-development__intro__heading">WEB DEVELOPMENT SOLUTIONS</h2>
            <p class="web-development__intro__text">A website is a very important part of the marketing process of a
                business. Here, at Butterfly Media we mix an original and creative
                design with the message you want your business to communicate
                to your customers in order to create a strong connection between
                your brand and your customers through technology.
            </p>
        </div>
    </div>
</template>

<script>
import lottie from "@/components/lottie.vue";
import * as heroAnimation from "@/assets/web-development/WebDevelopment.json";

export default {
    name: 'WebDevIntro',
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