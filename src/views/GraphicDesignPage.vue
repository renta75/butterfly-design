<template>
  <div class="graphic-design">
    <div class="container graphic-design__intro">
        <lottie :options="heroLottieOptions" v-on:animCreated="handleAnimation" class="graphic-design__intro" />
        <div class="graphic-design__intro__text-wrapper">
            <h2 class="graphic-design__intro__heading">GRAPHIC DESIGN</h2>
            <p class="graphic-design__intro__text">We design with data, crafting solutions around real customer activity. Creating new brands and digital experiences that engage and excite the customer. We undertake to understand your business and customer needs in order to deliver a product or service that really makes a difference.
            </p>
        </div>
    </div>

    <div class="graphic-design__main-section">
        <div class="graphic-design__main-section__images-wrapper">
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/IdentityDesign.svg" alt="">
                <h3 class="graphic-design__main-section__h3">IDENTITY DESIGN</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/BagsAndPackaging.svg" alt="">
                <h3 class="graphic-design__main-section__h3">BAGS & PACKAGING</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/BrochuresAndPublications.svg" alt="">
                <h3 class="graphic-design__main-section__h3">BROCHURES & PUBLICATIONS</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/MarketingCampaigns.svg" alt="">
                <h3 class="graphic-design__main-section__h3">MARKETING CAMPAIGNS</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/RetailAndMerchandising.svg" alt="">
                <h3 class="graphic-design__main-section__h3">RETAIL & MERCHANDISING</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/ExhibitionDesign.svg" alt="">
                <h3 class="graphic-design__main-section__h3">EXHIBITION DESIGN</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/AdvertisingCampaign.svg" alt="">
                <h3 class="graphic-design__main-section__h3">ADVERTISING CAMPAIGN</h3>
            </div>
            <div class="graphic-design__main-section__img">
                <img src="../assets/graphic-design/WebsiteAndAppDesign.svg" alt="">
                <h3 class="graphic-design__main-section__h3">WEBSITE & APP DESIGN</h3>
            </div>
        </div>

        <router-link to="/contact" class="graphic-design__button"><span>Contact us</span></router-link>

        <div class="graphic-design__quote-section">
            <div class="graphic-design__quote-section__quote-wrapper">
                <p class="graphic-design__quote-section__quote">
                    Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do and what you have to work with before you start.
                </p>

                <p class="graphic-design__quote-section__quote">Susan Kare</p>
            </div>

            <div class="graphic-design__quote-section__quote-img">
                <img src="../assets/graphic-design/PAGE-GraphDesign-mobile.png" alt="">
            </div>
        </div>

        <div class="graphic-design__main-section__other-services">
            <h2 class="graphic-design__main-section__other-services-h2">Check other services or contact us</h2>

            <div class="graphic-design__main-section__other-services-wrapper">
                <div class="graphic-design__main-section__other-service">
                    <img src="../assets/services/Services-Development-icon.svg" alt="">
                    <router-link to="/services/web-development" class="maintenance__main-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
                </div>

                <div class="graphic-design__main-section__other-service">
                    <img src="../assets/services/Services-E-commerce-icon.svg" alt="">
                    <router-link to="/services/e-commerce" class="maintenance__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
                </div>

                <div class="graphic-design__main-section__other-service">
                    <img src="../assets/services/Services-Maintenance-Icon.svg" alt="">
                    <router-link to="/services/maintenance" class="maintenance__main-section__other-service-heading"><span>MAINTENANCE</span></router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue';
import * as heroAnimation from "@/assets/graphic-design/GraphicDesign.json";

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

.graphic-design {
    &__intro {
        @include service-page-intro;
        width: 80%;
        align-items: flex-start;

        &__text-wrapper {
            margin-left: 1rem;
            margin-top: 3rem;
            width: 100%;
        }

        &__text {
            margin-top: 2rem;
        }
    }

    &__elevated-boxes {
        position: relative;
        border-radius: 5px;
        @include elevated-boxes;

        &__wrapper {
            h3 {
                padding-top: 0;
            }
        }

        &__elevated-box {
            top: -0.5rem;
            height: 21rem;
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
        }

        &__img {
            width: 25%;
            flex: 0 0 25%;
            padding: 3rem;

            img {
                width: 100%;
                max-width: 6rem;
            }
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
            padding: 3rem;
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

    &__quote-section {
        display: flex;
        align-items: center;

        div {
            flex: 0 0 50%;
        }

        &__quote-wrapper {
            background: linear-gradient(90deg, rgba(22, 255, 255, 0.25) 0%, rgba(19, 0, 55, 0) 100%);
        }

        &__quote {
            color: $white;
            padding: 2rem 1rem;
            text-align: left;
            font-family: 'Montserrat';

            &:nth-child(2) {
                padding: 0 1rem 1rem;
            }
        }

        &__quote-img {
            img {
                width: 100%;
            }
        }
    }
}

</style>