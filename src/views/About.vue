<template>
    <div class="about">
        <about-intro></about-intro>

        <about-metamorph></about-metamorph>

        <about-carousel></about-carousel>

        <div class="about__contact">
            <h2>THE CONTACT BUTTON IS RIGHT HERE</h2>

            <router-link to="/contact" class="about__button"><span>Contact us</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    components: {
        aboutIntro: () => import('./about/AboutIntro.vue'),
        aboutMetamorph: () => import('./about/AboutMetamorphSection.vue'),
        aboutCarousel: () => import('./about/AboutCarousel.vue'),
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";

.about {
    &__intro-wrapper {
        padding-top: 12rem;
    }

    &__title-wrapper {
        text-align: center;
        margin-bottom: 8rem;

        h1 {
            font-family: "Colombo";
            color: $teal;
            font-size: 6.25rem;
            text-transform: uppercase;
        }
    }

    &__large-butterfly {
        display: flex;
        padding-left: 15rem;

        &__text-wrapper {
            width: 55%;
        }

        &__heading {
            font-size: 4rem;
            color: $pink;
            font-family: 'Montserrat';
        }

        &__text {
            color: $white;
            font-size: 2rem;
            font-family: 'MyriadPro';
            padding-top: 2rem;
            width: 75%;
        }

        &__img {
            width: 100%;
            max-width: 30rem;
            position: absolute;
            right: 15rem;
            top: 10rem;
        }
    }

    &__metamorph {
        margin-top: 20rem;
        background-color: $dark-blue;
        height: 100vh;
        box-shadow: 0 40px 40px $dark-blue, 0 -40px 100px $dark-blue;
        padding-top: 8rem;
        width: 100%;

        &__heading {
            color: $white;
            font-size: 2rem;
            font-family: 'MyriadPro';
            margin-bottom: 3rem;
            text-align: center;
        }

        &__wrapper {
            display: flex;
        }

        &__lists {
            padding: 5rem 0 0 5rem;
        }

        &__pink-heading {
            color: $pink;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
        }

        &__list {
            margin-bottom: 3rem;

            li {
                counter-increment: item;
                color: $white;
                font-family: 'Montserrat';
                padding-bottom: 1rem;
            }

            li:before {
                margin-right: 10px;
                content: counter(item);
                color: $teal;
                display: inline-block;
                font-weight: bold;
            }
        }
    }

    &__overlapping-headers {
        text-align: center;
        margin: 3rem auto;

        @include overlapping-headers;
    }

    &__carousel-slider {
        background: linear-gradient(270deg, rgba(19, 0, 55, 0) 0%, rgba(22, 255, 255, 0.25) 100%);
        color: $white;
        padding: 5rem;

        h2 {
            font-size: 2rem;
            font-family: 'Montserrat';
            color: $pink;
            text-align: center;
            max-width: 28rem;
            margin: 0 auto 2rem;
        }

        p {
            font-size: 1.25rem;
            font-family: 'Montserrat';

            &:nth-of-type(2) {
                margin-top: 2rem;
            }
        }

        ul {
            margin-bottom: 1rem;
        }

        ul li {
            font-size: 1.25rem;
            font-family: 'Montserrat';
        }
    }

    &__contact {
        display: flex;
        max-width: 960px;
        width: 100%;
        margin: 5rem auto;
        align-items: center;
        justify-content: space-between;

        h2 {
            color: $teal;
            font-family: 'Colombo';
            font-size: 3rem;
            max-width: 60%;
        }
    }

    &__button {
        @include button;
        max-width: 15rem;
    }
}

.VueCarousel-dot {
    padding: 0 !important;
    margin: 0.25rem;
}
</style>