<template>
  <div class="graphic-design">
    <graphic-design-intro></graphic-design-intro>

    <div class="graphic-design__main-section">
        <graphic-design-images></graphic-design-images>

        <router-link :to="{ path: '/contact', hash: '#contact_form_anchor' }" class="graphic-design__button"><span>Contact us</span></router-link>

        <graphic-design-quote></graphic-design-quote>

        <graphic-design-other-services></graphic-design-other-services>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphicDesign',
  components: {
      graphicDesignIntro: () => import('./graphic-design/GraphicDesignIntro.vue'),
      graphicDesignImages: () => import('./graphic-design/GraphicDesignImages.vue'),
      graphicDesignQuote: () => import('./graphic-design/GraphicDesignQuote.vue'),
      graphicDesignOtherServices: () => import('./graphic-design/GraphicDesignOtherServices.vue'),
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_mixins.scss';

.graphic-design {
    &__intro {
        @include service-page-intro;
        height: 100vh;
        padding-top: 8rem;

        .container {
            display: flex;
        }

        video {
            width: 50%;
            position: relative;
            top: -3rem;
            mix-blend-mode: lighten;
            opacity: 0.8;
        }

        &__text-wrapper {
            width: 50%;
            margin: 8rem 0 0 1rem;
        }

        &__text {
            width: 80%;
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
            max-width: 960px;
            margin: 0 auto;
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
            text-decoration: none;

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
        padding-top: 8rem;

        .container {
            display: flex;
            align-items: center;
            max-width: 960px;
            margin: 0 auto;
            background-color: $dark-blue;
        }

        div {
            flex: 0 0 50%;
            height: 20rem;
        }

        .quote_div {
            display: flex;
            flex-direction: column;
            justify-content: center;
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
                mix-blend-mode: lighten;
            }
        }
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .graphic-design {
        &__intro {
            &__heading {
                font-size: 5rem;
            }
            &__subheading {
                font-size: 4rem;
            }
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    .graphic-design {
        &__intro {
            padding-top: 5rem;

            &__heading {
                font-size: 3.75rem;
            }
        }
    }
}


@media only screen and (max-width: 767px) {
    .graphic-design {
        padding: 0 0.5rem;

        &__intro {
            height: auto;

            .container {
                flex-direction: column;
            }
            video {
                width: 100%;
                top: 0;
            }
            &__text-wrapper {
                width: 100%;
                margin: 0;
                text-align: center;
            }
            &__heading {
                font-size: 3rem;
            }
            &__subheading {
                font-size: 2rem;
                width: 100%;
            }
            &__text {
                width: 100%;
            }
        }

        &__main-section {
            &__img {
                width: 100%;
                flex: 1 1 auto;
                padding: 2rem 0;
            }

            &__h3 {
                padding-top: 1rem;
            }

            &__other-services-h2 {
                &:before, &:after {
                    display: none;
                }
            }

            &__other-service-heading {
                font-size: 0.75rem;
            }
        }

        &__quote-section {
            padding: 0;

            .container {
                flex-direction: column;
            }

            &__quote-wrapper {
                background: linear-gradient(180deg, rgba(22, 255, 255, 0.25) 0%, rgba(19, 0, 55, 0) 100%);
            }

            div {
                height: auto;
            }
        }
    }
}

</style>