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
    height: calc(100vh - 69px);

    &__hero-section {
        display: flex;
    }
    &__dots-animation {
        position: absolute;
        z-index: 1;
    }
    &__hero-section-wrapper {
        padding-left: 240px;
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
            max-width: 13rem;
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
</style>