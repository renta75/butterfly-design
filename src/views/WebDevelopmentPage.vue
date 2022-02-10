<template>
  <div class="web-development">

    <web-dev-intro></web-dev-intro>

    <web-dev-boxes></web-dev-boxes>

    <router-link to="/contact" class="web-development__button"><span>Contact us</span></router-link>

    <div class="web-development__main-section">

        <web-dev-images></web-dev-images>

        <web-dev-redesigning></web-dev-redesigning>

        <web-dev-other-services></web-dev-other-services>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebDevelopment',
  components: {
      webDevIntro: () => import('./web-dev/WebDevIntro.vue'),
      webDevBoxes: () => import('./web-dev/WebDevBoxes.vue'),
      webDevImages: () => import('./web-dev/WebDevImages.vue'),
      webDevRedesigning: () => import('./web-dev/WebDevRedesigning.vue'),
      webDevOtherServices: () => import('./web-dev/WebDevOtherServices.vue'),
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_mixins.scss';

.web-development {
    &__intro {
        @include service-page-intro;
        background-color: $dark-blue;
        height: 100vh;
        box-shadow: 0 40px 40px $dark-blue;
        padding-top: 8rem;

        .container {
            display: flex;
        }

        video {
            width: 40%;
            position: relative;
            top: -3rem;
        }

        &__text-wrapper {
            margin: 5rem 0 0 1rem;
            width: 60%;
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

@media only screen and (max-width: 767px) {
    .web-development {
        padding: 0 0.5rem;

        &__intro {
            height: auto;
            .container {
                flex-direction: column;
            }
            &__text-wrapper {
                margin: 0;
                width: 100%;
                text-align: center;
            }
            &__heading {
                font-size: 3rem;
            }
            video {
                width: 100%;
            }
        }

        &__elevated-boxes {
            &__wrapper {
                flex-direction: column;
                max-height: none;
            }
        }

        &__main-section {
            &__heading {
                font-size: 2.5rem;
            }
            &__img {
                width: 50%;
                flex: 0 0 50%;
                padding: 2rem;
            }
            &__h2 {
                font-size: 2rem;
            }
            &__h3 {
                font-size: 1rem;
            }
            &__list-wrapper {
                flex-direction: column;
                padding: 2rem 0;
            }
            &__list {
                padding: 0;
                text-align: left;
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
    }
}

</style>