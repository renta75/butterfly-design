<template>
  <div class="e-commerce">
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
    <div class="container e-commerce__elevated-boxes">
        <div class="e-commerce__elevated-boxes__wrapper">
            <div>
                <img class="e-commerce__elevated-boxes__regular-img first-img" src="../assets/e-commerce/PAGE-Ecommerce-EasyNavigation.svg" alt="">
                <h3>EASY NAVIGATION</h3>
                <p>Easy navigation implementation of
                    your online store it's one of the most
                    important aspect of your online shop.
                    If a visitor doesn't find what he's
                    looking for it will be a lost
                    visitor. Lost visitor equal lost sale.</p>
            </div>
            <div class="e-commerce__elevated-boxes__elevated-box">
                <img class="e-commerce__elevated-boxes__regular-img" src="../assets/e-commerce/PAGE-Ecommerce-Responsive.svg" alt="">
                <h3>RESPONSIVE</h3>
                <p>We are all mobile these days and
                    mobile eCommerce it's growing way
                    faster than desktop eCommerce.
                    We will make sure that your store it's
                    100% compatible with all devices
                    and screen sizes.</p>
            </div>
            <div>
                <img class="e-commerce__elevated-boxes__regular-img" src="../assets/e-commerce/PAGE-Ecommerce-Speedoptimization.svg" alt="">
                <h3>SPEED OPTIMIZED</h3>
                <p>No matter how beautiful your website
                    looks like if it's slow you will lose
                    visitors. After building your store we will
                    use the best techniques to make your
                    website faster than most of the
                    websites out there.</p>
            </div>
        </div>
    </div>

    <router-link to="/contact" class="e-commerce__button"><span>Contact us</span></router-link>

    <div class="container section-accordions">
        <h2 class="section-accordions__heading">Creative solutions for smart businesses</h2>

        <div class="section-accordions__wrapper">
            <vsa-list>
                <vsa-item>
                    <vsa-heading>
                    Creative solutions for smart businesses
                    </vsa-heading>

                    <vsa-content>
                    A poor design will have a negative impact to your
                    customers. Your users have to love the look and
                    the user interface of your website.
                    </vsa-content>
                </vsa-item>

                <vsa-item>
                    <vsa-heading>
                    Advanced search
                    </vsa-heading>

                    <vsa-content>
                    A poor design will have a negative impact to your
                    customers. Your users have to love the look and
                    the user interface of your website.
                    </vsa-content>
                </vsa-item>

                <vsa-item>
                    <vsa-heading>
                    Online Payments
                    </vsa-heading>

                    <vsa-content>
                    A poor design will have a negative impact to your
                    customers. Your users have to love the look and
                    the user interface of your website.
                    </vsa-content>
                </vsa-item>

                <vsa-item>
                    <vsa-heading>
                    User registration
                    </vsa-heading>

                    <vsa-content>
                    A poor design will have a negative impact to your
                    customers. Your users have to love the look and
                    the user interface of your website.
                    </vsa-content>
                </vsa-item>
            </vsa-list>

            <img src="../assets/e-commerce/e-commerce-phone.png" alt="" class="section-accordions__image">
        </div>
    </div>

    <div class="container inline-boxes">
        <div class="inline-boxes__box">
            <img src="../assets/e-commerce/PAGE-Ecommerce-RepeatedTransactions.svg" alt="" class="inline-boxes__image">
            <h3 class="inline-boxes__heading">REPEATED TRANSACTIONS</h3>
            <p class="inline-boxes__text">Attract your customers with fidelity vouchers, gift cards, monthly raffle, vouchers or referral program.</p>
        </div>
        <div class="inline-boxes__box">
            <img src="../assets/e-commerce/PAGE-Ecommerce-StoreReports.svg" alt="" class="inline-boxes__image">
            <h3 class="inline-boxes__heading">STORE REPORTS</h3>
            <p class="inline-boxes__text">Recent Orders, Sales Summary, Coupons, Order Status, Shipping, Tax and many more with a clean design, responsive layout and option to export your reports as PDF, CSV or XLS.</p>
        </div>
        <div class="inline-boxes__box">
            <img src="../assets/e-commerce/PAGE-Ecommerce-InventoryManagment.svg" alt="" class="inline-boxes__image">
            <h3 class="inline-boxes__heading">INVENTORY MANAGEMENT</h3>
            <p class="inline-boxes__text">Having the correct information about your inventory is helping you all the time to stay up to date with every changes based on sales, sales of bundled item or other events that affect your inventory.</p>
        </div>
        <div class="inline-boxes__box">
            <img src="../assets/e-commerce/PAGE-Ecommerce-MarketingStrategy.svg" alt="" class="inline-boxes__image">
            <h3 class="inline-boxes__heading">MARKETING STRATEGY</h3>
            <p class="inline-boxes__text">To have sales your website has to be advertised. Based on your goals and your vision we offer you a well planed digital marketing strategy based on Social Media Implementation, Facebook Adds, Google Adds or Email Marketing.</p>
        </div>
    </div>

    <h2 class="ecommerce__bottom-section__h2">Other online store features</h2>

    <div class="ecommerce__bottom-section__list-wrapper">
        <ul class="ecommerce__bottom-section__list">
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
        </ul>
        <ul class="ecommerce__bottom-section__list">
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
            <li class="ecommerce__bottom-section__list-item">Audit the current website</li>
        </ul>
    </div>

    <router-link to="/contact" class="ecommerce__bottom-section__button"><span>Contact us</span></router-link>

    <div class="ecommerce__bottom-section__other-services">
        <h2 class="ecommerce__bottom-section__other-services-h2">Check other services or contact us</h2>

        <div class="ecommerce__bottom-section__other-services-wrapper">
            <div class="ecommerce__bottom-section__other-service">
                <img src="../assets/services/Services-Development-icon.svg" alt="">
                <router-link to="/services/web-development" class="maintenance__main-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
            </div>

            <div class="ecommerce__bottom-section__other-service">
                <img src="../assets/services/Services-Maintenance-Icon.svg" alt="">
                <router-link to="/services/maintenance" class="maintenance__main-section__other-service-heading"><span>MAINTENANCE</span></router-link>
            </div>

            <div class="ecommerce__bottom-section__other-service">
                <img src="../assets/services/Services-GraphicDesign-Icon.svg" alt="">
                <router-link to="/services/graphic-design" class="maintenance__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue';
import * as heroAnimation from "@/assets/e-commerce/eCommerce.json";

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

.e-commerce {
    &__elevated-boxes {
        position: relative;
        border-radius: 5px;
        @include elevated-boxes;

        &__wrapper {
            h3 {
                padding-top: 0;
            }
        }

        .first-img {
            max-width: 3rem;
        }

        &__elevated-box {
            top: -0.5rem;
            height: 21rem;
        }

        &__regular-img {
            max-width: 8rem;
        }
    }

    &__intro {
        @include service-page-intro;

        &__text-wrapper {
            margin-left: 1rem;
        }

        &__subheading {
            font-size: 4rem;
            color: $pink;
            font-family: 'Montserrat';
            margin: 2rem 0;
        }
    }

    &__button {
        @include button;

        margin: 5rem auto;
    }
}


.section-accordions {
    &__wrapper {
        display: flex;
        justify-content: center;
    }

    &__heading {
        font-size: 4rem;
        color: $pink;
        text-align: center;
        margin-bottom: 4rem;
    }

    .vsa-list {
        background-color: transparent;
        border: none;
        padding-top: 3rem;
    }

    .vsa-item {
        &--is-active &__heading, &:not(:last-of-type) {
            border: none;
        }

        &__trigger {
            color: $teal;

            &:hover, &:focus {
                color: $teal;
                background-color: transparent;
            }

            &__icon--is-default:before, &__icon--is-default:after {
                background-color: $teal;
            }
        }

        &__content {
            color: $white;
        }
    }

    &__image {
        max-width: 35rem;
    }
}

.inline-boxes {
    display: flex;

    &__box {
        text-align: center;
        background: #18084C;
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        flex: 0 0 25%;
        margin: 0 0.5rem;
        height: 28.75rem;
        position: relative;
    }

    &__image {
        max-width: 8rem;
        position: absolute;
        top: -4rem;
        left: 50%;
        transform: translateX(-50%);
    }

    &__heading {
        color: $pink;
        text-transform: uppercase;
        font-size: 1.25rem;
        margin-top: 7rem;
        margin-bottom: 2rem;
    }

    &__text {
        color: $white;
        padding: 0 2rem;
    }
}

.ecommerce {
    &__bottom-section {
        &__h2 {
            color: $white;
            text-align: center;
            font-size: 2.25rem;
            margin-top: 5rem;
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
            text-align: center;

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