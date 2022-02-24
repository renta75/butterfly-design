<template>
    <div>
        <home-intro></home-intro>

        <home-section-two></home-section-two>

        <home-section-three></home-section-three>

        <home-section-four></home-section-four>

        <home-section-five></home-section-five>

        <div class="contact-section">
            <div class="container">
                <contact-form></contact-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
        homeIntro: () => import('./home/HomeIntro.vue'),
        homeSectionTwo: () => import('./home/HomeSectionTwo.vue'),
        homeSectionThree: () => import('./home/HomeSectionThree.vue'),
        homeSectionFour: () => import('./home/HomeSectionFour.vue'),
        homeSectionFive: () => import('./home/HomeSectionFive.vue'),
        contactForm: () => import('@/components/ContactForm.vue'),
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import "@/assets/scss/_mixins.scss";

.home {
    width: 100%;
    height: 100vh;

    &__hero-section {
        display: flex;
    }
    &__dots-animation {
        position: absolute;
        z-index: 1;
    }
    &__hero-section-wrapper {
        padding-left: 15rem;
        position: relative;
        z-index: 10;
        padding-top: 12rem;
    }
    &__hero-section-h1 {
        font-family: "Colombo";
        color: $teal;
        font-size: 13rem;
        text-transform: uppercase;
    }
    &__hero-section-h2 {
        font-family: "Montserrat";
        color: $pink;
        font-size: 9rem;
        font-weight: 300;
        text-transform: uppercase;
        position: absolute;
        top: 300px;
    }
    &__hero-section-subheading {
        font-family: "MyriadPro";
        font-size: 36px;
        color: $white;
        padding-top: 8rem;
    }
    &__hero-section-buttons {
        display: flex;
        &__button {
            @include button;
            max-width: 15rem;
            margin-top: 6rem;
            position: relative;

            &:nth-child(1) {
                margin-right: 3rem;
            }
        }
        &__button-img {
            position: absolute;
            max-width: 3rem;
            left: -1rem;
            top: 0.55rem;
        }
        .gear-icon {
            top: 0.25rem;
        }
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
    margin: 5rem auto;
}

.laptop {
    margin: 8rem 1rem 0;
    flex: 0 0 25%;

    &__image {
        position: relative;
        z-index: 10;
        width: 100%;
        top: 1.25rem;
    }
    &__content {
        background: linear-gradient(
            90deg,
            rgb(22, 255, 255, 0.2) 0%,
            rgb(255, 24, 247, 0.2) 100%
        );
        height: 21rem;
        position: relative;
        top: -7rem;
        display: block;
        text-decoration: none;
        padding-top: 1rem;
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
        height: 8rem;
        font-family: "MyriadProLight";
        color: $white;
        padding: 1rem 3rem 0;
        font-size: 1.25rem;
    }
    &__link {
        display: block;
        text-align: center;
        color: $white;
        text-decoration: none;
        padding-top: 1.5rem;
    }
}

.section3 {
    position: relative;

    &__background-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        top: 1rem;
        mix-blend-mode: lighten;
        opacity: 0.8;
    }
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
        height: 22rem;
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
    height: 85vh;
    background: url("~@/assets/Section3-Butterfly-Arm.svg");
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
    padding-top: 8rem;

    .elevated-boxes {
        @include elevated-boxes;
        max-width: none;
        position: relative;
        border-radius: 5px;
        margin-top: 5rem;
    }

    &__button {
		@include button;
		max-width: 18rem;
		margin: 8rem 0 5rem;
	}

    &__button-email {
		@include button;
		width: 28rem;
		margin: 2rem 0;
        text-transform: lowercase;
        position: relative;
	}

    &__button-phone {
		@include button;
		width: 28rem;
		margin: 2rem 0;
        position: relative;
	}

    &__contact {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 8rem;

        &__heading {
            font-size: 2rem;
            color: $white;
            margin-top: 5rem;
        }
        &__text {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            color: $white;
            margin: 3rem 0 2rem;
        }
        &__slash {
            background: $teal;
            width: 2.5rem;
            height: 2px;
            display: inline-block;
            transform: rotate(115deg);
        }
        &__buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 50rem;

            .phone-icon {
                top: 0.25rem;
            }
        }
        &__icon {
            position: absolute;
            max-width: 3rem;
            left: -1rem;
            top: 0.55rem;
        }
    }
}



@media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .home {
        padding: 0 1rem;

        &__hero-section-wrapper {
            padding-left: 0;
        }

        &__hero-section-h1 {
            font-size: 11rem;
        }

        &__hero-section-butterfly-image {
            width: 40rem;
        }
    }

    .laptop {
        flex: 0 0 22%;

        &__content {
            height: 25rem;
        }
        &__text {
            height: 10rem;
        }
    }

    .section3 {
        &__box {
            height: 18rem;
            padding: 0 5rem;
        }
    }

    .section2, .section3, .section4, .section5, .contact-section {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    .home {
        padding: 10rem 1rem 0;

        &__hero-section-butterfly-image {
            width: 40rem;
        }

        &__hero-section-wrapper {
            padding: 0;
        }

        &__hero-section-h1 {
            font-size: 9rem;
        }

        &__hero-section-h2 {
            font-size: 7rem;
            top: 5rem;
        }
    }

    .section2 {
        flex-wrap: wrap;
        padding: 0 1rem;
    }

    .laptop {
        flex: 0 0 45%;
        margin: 1rem;
    }

    .section3 {
        padding: 0 1rem;

        &__title-wrapper {
            h1 {
                font-size: 4.5rem;
            }
            h2 {
                font-size: 3.5rem;
                top: -2rem;
            }
        }
        &__box {
            height: 15rem;
            padding: 1rem;
        }
    }

    .section4 {
        padding: 0 1rem;

        &__title-wrapper {
            h1 {
                font-size: 4.5rem;
            }
            h2 {
                font-size: 3.5rem;
                top: -2rem;
            }
        }
        &__section4-content-wrapper {
            padding-top: 5rem;
        }
    }

    .section5 {
        padding: 6rem 1rem 0;

        .elevated-boxes {
            &__wrapper {
                max-height: 29rem;
            }
            &__elevated-box {
                height: 32rem;
            }
        }

        &__contact {
            &__buttons {
                justify-content: center;
            }
        }
    }

    .contact-section {
        padding: 0 1rem;
    }
}


@media only screen and (max-width: 767px) {
    .home {
        padding: 0 0.5rem;
        height: auto;

        &__hero-section-butterfly-image {
            display: none;
        }

        &__hero-section-wrapper {
            padding: 8rem 0 0;
            margin: 0 auto;
        }
        &__hero-section-h1 {
            font-size: 3.75rem;
        }
        &__hero-section-h2 {
            font-size: 3.25rem;
            position: static;
            top: 0;
        }
        &__hero-section-subheading {
            font-size: 2rem;
            padding-top: 5rem;
        }
        &__hero-section-buttons {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            &__button, &__button:nth-child(1) {
                margin: 2rem 1rem;
            }
        }
    }

    .section2 {
        padding: 0 0.5rem;
        margin: 3rem 0 0;
        flex-direction: column;
    }

    .laptop {
        margin: 0;
    }

    .section3 {
        padding: 0 0.5rem;

        &__section3-wrapper {
            margin: 0;
        }
        &__background-video {
            display: none;
        }
        &__title-wrapper {
            h1 {
                font-size: 4rem;
            }
            h2 {
                font-size: 2.5rem;
                top: 0;
                margin-bottom: 2rem;
            }
        }
        &__box-wrapper-row {
            display: block;
        }
        &__box-wrapper-row:nth-child(even) {
            margin: 0;
        }
        &__box {
            width: 100%;
            padding: 1rem;
            height: auto;
        }
        &__box:nth-child(even), &__box:nth-child(odd) {
            text-align: left;
            margin: 0;
        }
    }

    .section4 {
        height: auto;
        background: url('~@/assets/hand-butterfly.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right 0 bottom 5rem;
        padding: 0 0.5rem;

        &__section4-wrapper {
            margin: 0;
        }
        &__title-wrapper {
            h1 {
                font-size: 4rem;
            }
            h2 {
                font-size: 2.5rem;
                top: 0;
                margin-bottom: 2rem;
            }
        }
        &__section4-content-wrapper {
            padding: 0;
        }
        &__button {
            margin: 15rem auto 0;
        }
    }

    .section5 {
        padding: 0 0.5rem;

        .elevated-boxes {
            &__wrapper {
                flex-direction: column;
                max-height: none;
                h3 {
                    padding: 0;
                }
                div {
                    position: static;
                }
            }
            &__top-img {
                position: static;
                transform: none;
            }
        }
        &__button {
            margin: 5rem auto;
        }
        &__contact {
            &__heading {
                margin: 0 0 2rem;
                text-align: center;
            }
            &__text {
                display: none;
            }
            &__buttons {
                flex-wrap: wrap;
                justify-content: center;

                a {
                    margin: 1rem 0.75rem;
                    font-size: 1rem;
                }
            }
        }
    }
}

@media only screen and (min-width: 425px) and (max-width: 767px) {
    .home {
        &__hero-section-butterfly-image {
            display: block;
            width: 560px;
            right: -360px;
            top: 13rem;
        }
        &__hero-section-h1 {
            padding-left: 1.5rem;
            font-size: 4.5rem;
        }
        &__hero-section-h2 {
            position: absolute;
            top: 10rem;
            padding-left: 1.5rem;
            font-size: 3.5rem;
        }
        &__hero-section-subheading {
            max-width: 50%;
            padding-left: 25px;
            padding-top: 40px;
            font-size: 3rem;
        }
        &__hero-section-buttons {
            margin-top: 1rem;
            padding-left: 1.1rem;
            justify-content: flex-start;
            width: 75%;

            &__button {
                margin: 1rem;
                max-width: 12rem;
                &:nth-child(1) {
                    margin: 1rem;
                }
            }
        }
    }
    .section2 {
        margin-top: 8rem;
    }
}

</style>