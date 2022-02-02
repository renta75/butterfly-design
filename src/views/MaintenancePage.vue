<template>
  <div class="maintenance">

    <maintenance-intro></maintenance-intro>

    <div class="maintenance__main-section">

        <maintenance-images></maintenance-images>

        <maintenance-elevated-boxes></maintenance-elevated-boxes>

        <maintenance-other-services></maintenance-other-services>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  components: {
      maintenanceIntro: () => import('./maintenance/MaintenanceIntro.vue'),
      maintenanceImages: () => import('./maintenance/MaintenanceImages.vue'),
      maintenanceElevatedBoxes: () => import('./maintenance/MaintenanceElevatedBoxes.vue'),
      maintenanceOtherServices: () => import('./maintenance/MaintenanceOtherServices.vue'),
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/_mixins.scss';

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

</style>