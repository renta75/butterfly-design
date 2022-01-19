<template>
  <div class="maintenance">
    <div class="container maintenance__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="maintenance__intro__img" />
        <div class="maintenance__intro__text-wrapper">
            <h2 class="maintenance__intro__heading">MAINTENANCE</h2>
            <h3 class="maintenance__intro__subheading">Maintaining websites it’s technical and tedious, let us do it for you!</h3>
            <p class="maintenance__intro__text">Wordpress Website Maintenance, Setup, Fixes and Optimization custom made for your needs</p>
        </div>
    </div>

    <div class="maintenance__main-section">
        <div class="maintenance__main-section__images-wrapper">
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-ContentUpdates.svg" alt="">
                <h3 class="maintenance__main-section__h3">CONTENT UPDATES</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-CoreUpdates.svg" alt="">
                <h3 class="maintenance__main-section__h3">CORE UPDATES</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-Backups.svg" alt="">
                <h3 class="maintenance__main-section__h3">BACKUPS</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-SpeedOptimization.svg" alt="">
                <h3 class="maintenance__main-section__h3">SPEED OPTIMIZATION</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-Security.svg" alt="">
                <h3 class="maintenance__main-section__h3">SECURITY</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-ThemesAndPlugins.svg" alt="">
                <h3 class="maintenance__main-section__h3">THEMES & PLUGINS</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-HostingAndDomain.svg" alt="">
                <h3 class="maintenance__main-section__h3">HOSTING & DOMAIN</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-CustomTweaks.svg" alt="">
                <h3 class="maintenance__main-section__h3">CUSTOM TWEAKS</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
            <div class="maintenance__main-section__img">
                <img src="../assets/maintenance/PAGE-Maintenance-ChatSupport.svg" alt="">
                <h3 class="maintenance__main-section__h3">CHAT SUPPORT</h3>
                <p class="maintenance__main-section__text">Have your website content
                    updated as often as you
                    need while you look after
                    your business.
                </p>
            </div>
        </div>

        <div class="container maintenance__elevated-boxes">
            <div class="maintenance__elevated-boxes__wrapper">
                <div>
                    <h3 class="maintenance__elevated-boxes__heading">STARTER PLAN</h3>
                    <h5 class="maintenance__elevated-boxes__price">€ <span>40</span>/month</h5>
                    <ul class="maintenance__main-section__list">
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                    </ul>
                    <router-link to="/contact" class="maintenance__elevated-boxes__button"><span>Get Started</span></router-link>
                </div>
                <div class="maintenance__elevated-boxes__elevated-box">
                    <h3 class="maintenance__elevated-boxes__heading">BASIC PLAN</h3>
                    <h5 class="maintenance__elevated-boxes__price">€ <span>65</span>/month</h5>
                    <ul class="maintenance__main-section__list">
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                    </ul>
                    <router-link to="/contact" class="maintenance__elevated-boxes__button"><span>Get Started</span></router-link>
                </div>
                <div>
                    <h3 class="maintenance__elevated-boxes__heading">PRO PLAN</h3>
                    <h5 class="maintenance__elevated-boxes__price">€ <span>95</span>/month</h5>
                    <ul class="maintenance__main-section__list">
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                        <li class="maintenance__main-section__list-item">Audit website</li>
                    </ul>
                    <router-link to="/contact" class="maintenance__elevated-boxes__button"><span>Get Started</span></router-link>
                </div>
            </div>
        </div>

        <div class="maintenance__main-section__other-services">
            <h2 class="maintenance__main-section__other-services-h2">Check other services or contact us</h2>

            <div class="maintenance__main-section__other-services-wrapper">
                <div class="maintenance__main-section__other-service">
                    <img src="../assets/services/Services-Development-icon.svg" alt="">
                    <router-link to="/services/web-development" class="maintenance__main-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
                </div>

                <div class="maintenance__main-section__other-service">
                    <img src="../assets/services/Services-E-commerce-icon.svg" alt="">
                    <router-link to="/services/e-commerce" class="maintenance__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
                </div>

                <div class="maintenance__main-section__other-service">
                    <img src="../assets/services/Services-GraphicDesign-Icon.svg" alt="">
                    <router-link to="/services/graphic-design" class="maintenance__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue';
import * as heroAnimation from "@/assets/maintenance/Maintenance.json";

export default {
  name: 'Home',
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

<style lang="scss">
@import '../assets/scss/_mixins.scss';

.maintenance {
    &__intro {
        @include service-page-intro;

        &__text-wrapper {
            margin: 3rem 0 0 1rem;
        }

        &__subheading {
            font-size: 4rem;
            color: $pink;
            font-family: 'Montserrat';
            margin: 1rem 0 2rem;
            width: 85%;;
        }

        &__text {
            width: 75%;;
        }
    }

    &__elevated-boxes {
        position: relative;
        border-radius: 5px;
        @include elevated-boxes;

        &__wrapper {
            max-height: 45rem;

            div {
                flex: 0 0 33.333333%;
            }

            h3 {
                padding-top: 0;
            }
        }

        &__elevated-box {
            top: -0.5rem;
            height: 46rem;
        }

        &__heading {
            margin-top: 3rem;
        }

        &__price {
            color: $pink;
            margin-top: 2rem;

            span {
                font-size: 3rem;
                font-family: 'Colombo'
            }
        }

        &__button {
            @include button;
            max-width: 12rem;
            font-size: 1rem;
            margin: 0 auto;
        }
    }

    &__button {
        @include button;

        margin: 5rem auto;
    }

    &__main-section {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;

        &__heading {
            font-family: 'Montserrat';
            color: $pink;
            font-size: 4rem;
            padding: 2rem 0;
        }

        &__subheading {
            font-family: 'Montserrat';
            color: $white;
            padding-bottom: 5rem;
        }

        &__images-wrapper {
            display: flex;
            flex-wrap: wrap;
            margin: 5rem 0;
        }

        &__img {
            width: 30%;
            flex: 0 0 33.333333%;
            padding: 1rem;

            img {
                width: 100%;
                max-width: 6rem;
            }
        }

        &__text {
            color: $white;
            margin: 2rem 0 4rem;
        }

        &__h3 {
            color: $pink;
            padding-top: 2rem;
            font-size: 1.25rem;
        }

        &__h2 {
            color: $white;
            text-align: center;
            font-size: 2.25rem;
        }

        &__list-wrapper {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }

        &__list {
            padding: 2rem;
        }

        &__list-item {
            color: $white;
            padding: 0.5rem 0;

            &::before {
                content: '';
                display: inline-block;
                height: 1rem;
                width: 1rem;
                background-size: 1rem 1rem;
                background-image: url('../assets/Icon-Kvacica.svg');
                background-repeat: no-repeat;
            }
        }

        &__button {
            @include button;

            margin: 0 auto;
            max-width: 12rem;
        }

        &__other-services-h2 {
            @include styled-heading;
        }

        &__other-services-wrapper {
            display: flex;
            justify-content: space-between;
            max-width: 45rem;
            margin: 0 auto;
        }

        &__other-service {
            img {
                max-width: 5rem;
                height: 5.5rem;
            }
        }

        &__other-service-heading {
            color: $pink;
            display: block;
            text-decoration: none;
        }
    }
}

</style>