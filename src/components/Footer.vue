<template>
	<nav class="footer">
		<div class="container footer__wrapper">
            <div class="footer__logo-wrapper">
                <img alt="Logo" src="@/assets/logo.svg" class="footer__logo" width="">
                <span class="footer__text">contact@butterfly.design</span>
                <span class="footer__text">some street 123 NY</span>
                <span class="footer__text">+123 45 666 666</span>
            </div>

            <div class="footer__services-wrapper">
                <h3 class="footer__services-heading">Services</h3>
                <span class="footer__text">Web development</span>
                <span class="footer__text">E-commerce</span>
                <span class="footer__text">Maintenance</span>
                <span class="footer__text">Graphic design</span>
            </div>

            <div class="footer__resources-wrapper">
                <h3 class="footer__services-heading">Resources</h3>
                <span class="footer__text">FAQ</span>
                <span class="footer__text">Privacy Policy</span>
                <span class="footer__text">Terms and Conditions</span>
            </div>

            <div class="footer__newsletter-wrapper">
                <h3 class="footer__services-heading">Newsletter</h3>
                <p class="footer__text">Subscribe for new and great deals</p>

                <div class="footer__newsletter-field">
                    <input type="text" placeholder="your@awesome.email">
                    <div class="footer__button"><span>GO</span></div>
                </div>
            </div>
        </div>

        <div class="footer__icons">
            <img src="@/assets/contact/Icon-Facebook.svg" alt="">
            <img src="@/assets/contact/Icon-Instagram.svg" alt="">
            <img src="@/assets/contact/Icon-Telegram.svg" alt="">
            <img src="@/assets/contact/Icon-Twitter.svg" alt="">
            <img src="@/assets/contact/Icon-Youtube.svg" alt="">
        </div>

        <p class="footer__copy">&copy; 2022 Butterfly Design by ELIXStudio</p>
	</nav>
</template>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

.footer {
    background: #1c1831;
    margin-top: 5rem;

    &__logo {
        width: 100%;
        height: 100%;
        max-width: 12rem;
        padding-top: 2.25rem;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
    }

    &__services-heading {
        color: $teal;
        font-family: 'Colombo';
        font-size: 1.25rem;
        text-transform: uppercase;
        margin: 3rem 0 1rem;
    }

    &__text {
        color: $white;
        display: block;
        padding: .25rem 0;
    }

    &__newsletter-field {
        display: flex;
    }

    input {
        flex: 0 0 75%;
        background: #231051;
        box-shadow: none;
        border: none;
        border-radius: 6px;
        margin-top: .25rem;
        margin-bottom: 1rem;
        padding: .5rem;
    }

    ::placeholder {
        color: #4D2F96;
    }

    &__button {
        @include button;
        height: 2rem;
        border-radius: 6px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: .25rem;
    }

    &__icons {
		display: flex;
        justify-content: center;
        padding-top: 2rem;

		img {
            width: 100%;
            height: 100%;
			max-width: 2rem;
			margin-right: 1rem;
		}
	}

    &__copy {
        text-align: center;
        color: $white;
        padding: 2rem 0;
    }
}


@media only screen and (max-width: 767px) {
    .footer {
        &__wrapper {
            display: none;
        }
    }
}
</style>