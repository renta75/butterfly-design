<template>
  <div class="web-development">
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
    <div class="container web-development__elevated-boxes">
        <div class="web-development__elevated-boxes__wrapper">
            <div>
                <img class="web-development__elevated-boxes__regular-img first-img" src="../assets/web-development/PAGE-WebDevelopment-Personalisation.svg" alt="">
                <h3>PERSONALISATION</h3>
                <p>Every project it’s unique, has it’s unique goal and purpose, it’s unique design. It’s not just a website it’s your image.</p>
            </div>
            <div class="web-development__elevated-boxes__elevated-box">
                <img class="web-development__elevated-boxes__regular-img" src="../assets/web-development/PAGE-WebDevelopment-administration.svg" alt="">
                <h3>ADMINISTRATION</h3>
                <p>Every website will be delivered with a modern, flexible, personalized CMS being easy to use edit and update.</p>
            </div>
            <div>
                <img class="web-development__elevated-boxes__regular-img" src="../assets/web-development/PAGE-WebDevelopment-Professionalism.svg" alt="">
                <h3>PROFESSIONALISM</h3>
                <p>Web standards complient, cross browser compatibility and responsive for the best view and experience on all type of devices.</p>
            </div>
        </div>
    </div>

    <router-link to="/contact" class="web-development__button"><span>Contact us</span></router-link>

    <div class="web-development__main-section">
        <h2 class="web-development__main-section__heading">WordPress Web Development</h2>
        <p class="web-development__main-section__subheading">
            WordPress is the most popular CMS in the world powering 25% of all sites across the
            web and that’s why it’s our content management system of choice. Being open source
            and very flexible it is possible to provide complex solutions for a low price.
            Here are few types of websites that can be developed with WordPress
        </p>

        <div class="web-development__main-section__images-wrapper">
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-Business.svg" alt="">
                <h3 class="web-development__main-section__h3">BUSINESS WEBSITES</h3>
            </div>
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-Ecommerce.svg" alt="">
                <h3 class="web-development__main-section__h3">E-COMMERCE WEBSITES</h3>
            </div>
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-NonProfit.svg" alt="">
                <h3 class="web-development__main-section__h3">NON PROFIT WEBSITES</h3>
            </div>
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-MembershipWebsites.svg" alt="">
                <h3 class="web-development__main-section__h3">MEMBERSHIP WEBSITES</h3>
            </div>
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-EventsWebsites.svg" alt="">
                <h3 class="web-development__main-section__h3">EVENTS WEBSITES</h3>
            </div>
            <div class="web-development__main-section__img">
                <img src="../assets/web-development/PAGE-WebDevelopment-Blog-Websites.svg" alt="">
                <h3 class="web-development__main-section__h3">BLOG WEBSITES</h3>
            </div>
        </div>

        <h2 class="web-development__main-section__heading">Website redesign</h2>
        <p class="web-development__main-section__subheading">
            When a website it’s not bringing the desired results or the design layout it’s old or does
            not represent the company anymore, low visitors or not user-friendly it is time for a new
            design. When a website doesn’t accomplish your goals or the layout is not user-friendly
            it is time for a change. Bad site mapping, lack of quality content, pages or features hard
            to find, poor usability or old SEO practices which brings low search engine rankings are
            elements that shouldn’t be present in your website.
        </p>

        <h2 class="web-development__main-section__h2">Steps we take when we redesign a website</h2>

        <div class="web-development__main-section__list-wrapper">
            <ul class="web-development__main-section__list">
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
            </ul>
            <ul class="web-development__main-section__list">
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
                <li class="web-development__main-section__list-item">Audit the current website</li>
            </ul>
        </div>

        <router-link to="/contact" class="web-development__main-section__button"><span>Contact us</span></router-link>

        <div class="web-development__main-section__other-services">
            <h2 class="web-development__main-section__other-services-h2">Check other services or contact us</h2>

            <div class="web-development__main-section__other-services-wrapper">
                <div class="web-development__main-section__other-service">
                    <img src="../assets/services/Services-E-commerce-icon.svg" alt="">
                    <router-link to="/services/e-commerce" class="maintenance__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
                </div>

                <div class="web-development__main-section__other-service">
                    <img src="../assets/services/Services-Maintenance-Icon.svg" alt="">
                    <router-link to="/services/maintenance" class="maintenance__main-section__other-service-heading"><span>MAINTENANCE</span></router-link>
                </div>

                <div class="web-development__main-section__other-service">
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
import * as heroAnimation from "@/assets/web-development/WebDevelopment.json";

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

.web-development {
    &__intro {
        @include service-page-intro;

        &__text-wrapper {
            margin-left: 1rem;
            width: 75%;
        }

        &__text {
            margin-top: 2rem;
        }
    }

    &__elevated-boxes {
        @include elevated-boxes;
        margin: 5rem auto;
        position: relative;
        border-radius: 5px;

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
            width: 30%;
            flex: 0 0 33.333333%;
            padding: 5rem;
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
}

</style>