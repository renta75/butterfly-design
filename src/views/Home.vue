<template>
    <div>
        <div class="home">
            <lottie
                :options="heroLottieOptions"
                v-on:animCreated="handleAnimation"
                class="home__dots-animation"
            />
            <div class="home__hero-section">
                <div class="home__hero-section-wrapper">
                    <h1 class="home__hero-section-h1">Butterfly</h1>
                    <h2 class="home__hero-section-h2">Design</h2>
                    <h3 class="home__hero-section-subheading">
                        Creative solutions for smart businesses
                    </h3>
                </div>

                <div class="home__hero-section-butterfly">
                    <img
                        src="../assets/Main-Butterfly.svg"
                        alt=""
                        class="home__hero-section-butterfly-image"
                    />
                </div>
            </div>
        </div>

        <div class="container section2">
            <div class="laptop">
                <img
                    src="../assets/Laptop-WebDevelopment.svg"
                    alt=""
                    class="laptop__image"
                />
                <router-link to="/services/web-development" class="laptop__content">
                    <h3 class="laptop__heading">Web development</h3>
                    <p class="laptop__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Optio ipsa iusto nam
                        enim sed!
                    </p>
                </router-link>
            </div>
            <div class="laptop">
                <img
                    src="../assets/Laptop-Ecommerce.svg"
                    alt=""
                    class="laptop__image"
                />
                <router-link to="/services/e-commerce" class="laptop__content">
                    <h3 class="laptop__heading">ECommerce</h3>
                    <p class="laptop__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Optio ipsa iusto nam
                        enim sed!
                    </p>
                </router-link>
            </div>
            <div class="laptop">
                <img
                    src="../assets/Laptop-Maintenance.svg"
                    alt=""
                    class="laptop__image"
                />
                <router-link to="/services/maintenance" class="laptop__content">
                    <h3 class="laptop__heading">Maintenance</h3>
                    <p class="laptop__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Optio ipsa iusto nam
                        enim sed!
                    </p>
                </router-link>
            </div>
            <div class="laptop">
                <img
                    src="../assets/Laptop-GraphDesign.svg"
                    alt=""
                    class="laptop__image"
                />
                <router-link to="/services/graphic-design" class="laptop__content">
                    <h3 class="laptop__heading">Graphic Design</h3>
                    <p class="laptop__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Optio ipsa iusto nam
                        enim sed!
                    </p>
                </router-link>
            </div>
        </div>

        <div class="section3">
            <div class="container section3__section3-wrapper">
                <div class="section3__title-wrapper">
                    <h1 class="section3__section3-h1">We help smart</h1>
                    <h2 class="section3__section3-h2">businesses succeed</h2>
                </div>
                <div class="section3__section3-content-wrapper">
                    <lottie
                        :options="section3Lottie"
                        v-on:animCreated="handleAnimation"
                        class="section3__lottieAnimation"
                    />
                    <div class="section3__box-wrapper">
                        <div class="section3__box-wrapper-row">
                            <div class="section3__box">
                                <h3 class="section3__box-heading">
                                    Lorem ipsum dolor
                                </h3>
                                <p class="section3__box-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class="section3__box">
                                <h3 class="section3__box-heading">
                                    Lorem ipsum dolor
                                </h3>
                                <p class="section3__box-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div class="section3__box-wrapper-row">
                            <div class="section3__box">
                                <h3 class="section3__box-heading">
                                    Lorem ipsum dolor
                                </h3>
                                <p class="section3__box-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class="section3__box">
                                <h3 class="section3__box-heading">
                                    Lorem ipsum dolor
                                </h3>
                                <p class="section3__box-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section4">
            <div class="container section4__section4-wrapper">
                <div class="section4__title-wrapper">
                    <h1 class="section4__section4-h1">For good times</h1>
                    <h2 class="section4__section4-h2">ahead of us</h2>
                </div>

                <div class="section4__section4-content-wrapper">
                    <p class="section4__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p class="section4__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        adipisicing elit.
                    </p>
                    <p class="section4__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        consectetur adipisicing elit.
                    </p>

                    <router-link to="/contact" class="section4__button"><span>Request a quote</span></router-link>
                </div>
            </div>
        </div>

        <div class="section5">
            <div class="container">
                <div class="elevated-boxes">
                    <div class="elevated-boxes__wrapper">
                        <div>
                            <img
                                class="elevated-boxes__top-img first-img"
                                src="../assets/whybutterflydesign.svg"
                                alt=""
                            />
                            <h3>Why butterfly design?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit adipisicing elit.
                            </p>
                        </div>
                        <div class="elevated-boxes__elevated-box">
                            <img
                                class="elevated-boxes__top-img"
                                src="../assets/missionandgoals.svg"
                                alt=""
                            />
                            <h3>Mission and goals</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit.
                            </p>
                        </div>
                        <div>
                            <img
                                class="elevated-boxes__top-img"
                                src="../assets/aboutbutterflydesign.svg"
                                alt=""
                            />
                            <h3>About butterfly design</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit
                                adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-section">
            <div class="container">
                <contact-form></contact-form>
            </div>
        </div>
    </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as heroAnimation from "@/assets/hero-section.json";
import * as section3Animation from "@/assets/section3-bg-butterfly";
import contactForm from "../components/ContactForm.vue";

export default {
    name: "Home",
    components: {
        lottie,
        contactForm,
    },
    data() {
        return {
            anim: null,
            heroLottieOptions: {
                animationData: heroAnimation.default,
            },
            section3Lottie: {
                animationData: section3Animation.default,
            },
        };
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import "../assets/scss/_mixins.scss";

.home {
    width: 100%;
    height: calc(100vh - 101px);
    background: url("../assets/home-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 9rem;

    &__hero-section {
        display: flex;
    }
    &__dots-animation {
        position: absolute;
        z-index: 1;
    }
    &__hero-section-wrapper {
        padding-left: 240px;
        position: relative;
        z-index: 10;
        margin-top: 3rem;
    }
    &__hero-section-h1 {
        font-family: "Colombo";
        color: $teal;
        font-size: 13rem;
        text-transform: uppercase;
        padding-top: 5rem;
    }
    &__hero-section-h2 {
        font-family: "Montserrat";
        color: $pink;
        font-size: 9rem;
        font-weight: 300;
        text-transform: uppercase;
        position: absolute;
        top: 200px;
    }
    &__hero-section-subheading {
        font-family: "MyriadPro";
        font-size: 36px;
        color: $white;
        padding-top: 8rem;
    }
    &__hero-section-butterfly-image {
        width: 960px;
        position: absolute;
        z-index: 10;
        top: 8.5rem;
        right: -220px;
    }
}

.section2 {
    display: flex;
    justify-content: space-between;
}

.laptop {
    margin: 8rem 1rem 0;
    &__image {
        position: relative;
        z-index: 10;
    }
    &__content {
        background: linear-gradient(
            90deg,
            rgb(22, 255, 255, 0.2) 0%,
            rgb(255, 24, 247, 0.2) 100%
        );
        height: 20rem;
        position: relative;
        top: -7rem;
        display: block;
        text-decoration: none;
    }
    &__heading {
        font-family: "Colombo";
        font-size: 2rem;
        text-transform: uppercase;
        color: $teal;
        text-align: center;
        padding: 4rem 0 0;
    }
    &__text {
        font-family: "MyriadPro";
        color: $white;
        padding: 1rem 3rem 0;
        font-size: 1.25rem;
    }
}

.section3 {
    &__section3-wrapper {
        position: relative;
        text-align: center;
        z-index: 10;
        margin-top: 3rem;
        flex-direction: column;
    }
    &__title-wrapper {
        @include overlapping-headers;
    }
    &__section3-content-wrapper {
        position: relative;
        margin-bottom: 10rem;
    }
    &__lottieAnimation {
        max-width: 50rem;
    }
    &__box-wrapper {
        position: absolute;
        top: 0;
        width: 100%;
    }
    &__box-wrapper-row {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    &__box-wrapper-row:nth-child(even) {
        margin-top: 1rem;
    }
    &__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        width: 50%;
        height: 20rem;
        padding: 0 10rem;
    }
    &__box:nth-child(odd) {
        text-align: right;
        background: linear-gradient(
            270deg,
            rgba(0, 255, 255, 0.25),
            rgba(19, 0, 55, 1)
        );
        mix-blend-mode: normal;
    }
    &__box:nth-child(even) {
        text-align: left;
        margin-left: 1rem;
        background: linear-gradient(
            90deg,
            rgba(0, 255, 255, 0.25),
            rgb(19, 0, 55, 1)
        );
    }
    &__box-heading {
        font-size: 1.75rem;
        margin-bottom: 2rem;
        color: $teal;
        text-transform: uppercase;
        font-family: "Montserrat";
    }
    &__box-text {
        color: $white;
        font-family: "Montserrat";
    }
}

.section4 {
    height: 100vh;
    background: url("../assets/Section3-Butterfly-Arm.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right -15rem top;

    &__section4-wrapper {
        position: relative;
        text-align: center;
        z-index: 10;
        margin-top: 3rem;
        flex-direction: column;
    }
    &__title-wrapper {
        @include overlapping-headers;
    }
    &__section4-content-wrapper {
        text-align: left;
        padding-top: 8rem;
    }
    &__text {
        color: $white;
        font-size: 1.15rem;
        font-weight: bold;
        font-style: italic;
        padding-bottom: 3rem;
    }
    &__button {
        @include button;
    }
}

.section5 {
    height: 75vh;
    padding-top: 8rem;

    .elevated-boxes {
        @include elevated-boxes;
        position: relative;
        border-radius: 5px;
        margin-top: 5rem;
    }
}
</style>