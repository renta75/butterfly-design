<template>
  <div class="contact">
    <div class="container contact__intro-wrapper">
        <div class="contact__title-wrapper">
            <h1 class="contact__h1">CONTACT US</h1>
        </div>
    </div>

    <div class="container contact__contact-info">
        <div class="contact__contact-info__letsmeet">
            <img src="@/assets/contact/LetsMeet.svg" alt="" class="contact__contact-info__image image-size">
            <h3 class="contact__contact-info__heading">LET'S MEET</h3>
            <p class="contact__contact-info__text">Pollerton Big, Carlow Co, Carlow, Ireland</p>
            <p class="contact__contact-info__pink">+353 879827181</p>
        </div>
        <div class="contact__contact-info__hireus">
            <img src="@/assets/contact/HireUs.svg" alt="" class="contact__contact-info__image image-size">
            <h3 class="contact__contact-info__heading">HIRE US!</h3>
            <p class="contact__contact-info__text">Send us your brief, we’re ready</p>
            <p class="contact__contact-info__pink">info@butterfly.design</p>
        </div>
        <div class="contact__contact-info__creative">
            <img src="@/assets/contact/Creative.svg" alt="" class="contact__contact-info__image">
            <h3 class="contact__contact-info__heading">CREATIVE?</h3>
            <p class="contact__contact-info__text">Pro at your area? We’re all ears</p>
            <p class="contact__contact-info__pink">Let’s be partners</p>
        </div>
    </div>

    <contact-form></contact-form>
  </div>
</template>

<script>
import contactForm from '@/components/ContactForm.vue';

export default {
    components: {
        contactForm
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_mixins.scss';

.contact {
    &__intro-wrapper {
        margin-top: 12rem;
    }

    &__title-wrapper {
        text-align: center;
        margin: 8rem 0;

        h1 {
            font-family: 'Colombo';
            color: $teal;
            font-size: 6.25rem;
            text-transform: uppercase;
        }
    }

    &__contact-info {
        display: flex;
        text-align: center;

        div {
            flex: 0 0 33.33333%;
            padding: 0 8rem 7rem;
        }

        &__image {
            width: 100%;
            max-width: 10rem;
        }

        .image-size {
            height: 5.65rem;
        }

        &__heading {
            color: $teal;
            font-family: 'Colombo';
            font-size: 2rem;
            margin: 1rem 0;
        }

        &__text {
            color: $white;
            margin-bottom: 1rem;
        }

        &__pink {
            color: $pink;
            font-size: 1.25rem;
        }
    }
}

</style>