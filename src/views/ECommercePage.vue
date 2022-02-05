<template>
  <div class="e-commerce">

    <ecommerce-intro></ecommerce-intro>

    <ecommerce-elevated-boxes></ecommerce-elevated-boxes>

    <router-link to="/contact" class="e-commerce__button"><span>Contact us</span></router-link>

    <ecommerce-accordions></ecommerce-accordions>

    <ecommerce-inline-boxes></ecommerce-inline-boxes>

    <ecommerce-store-features></ecommerce-store-features>

    <router-link to="/contact" class="ecommerce__bottom-section__button"><span>Contact us</span></router-link>

    <ecommerce-other-services></ecommerce-other-services>
  </div>
</template>

<script>
export default {
  name: 'ECommerce',
  components: {
      ecommerceIntro: () => import('./e-commerce/EcommerceIntro.vue'),
      ecommerceElevatedBoxes: () => import('./e-commerce/EcommerceElevatedBoxes.vue'),
      ecommerceAccordions: () => import('./e-commerce/EcommerceAccordions.vue'),
      ecommerceInlineBoxes: () => import('./e-commerce/EcommerceInlineBoxes.vue'),
      ecommerceStoreFeatures: () => import('./e-commerce/EcommerceStoreFeatures.vue'),
      ecommerceOtherServices: () => import('./e-commerce/EcommerceOtherServices.vue'),
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_mixins.scss';

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
                background-image: url('~@/assets/Icon-Kvacica.svg');
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