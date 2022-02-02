<template>
    <div class="contact-form">
		<h2 class="contact-form__heading">How can we help?</h2>

		<div class="contact-form__wrapper">
			<div class="contact-form__frm-wrapper">
				<form action="#">
					<input type="text" placeholder="your appreciated name">
					<input type="text" placeholder="your@awesome.email">
					<textarea name="" id="" cols="30" rows="10" placeholder="your finest message"></textarea>
				</form>

				<router-link to="/contact" class="contact-form__button"><span>Contact us</span></router-link>
			</div>
			<div class="contact-form__info">
				<h3 class="contact-form__info__heading">You’ve got questions, we’ve got answers</h3>
				<p class="contact-form__info__text">Open weekdays: 9am - 5pm</p>
				<h3 class="contact-form__info__heading">Let’s talk?</h3>
				<h3 class="contact-form__info__heading">Share your excitement with us.</h3>
				<p class="contact-form__info__text">You can also check us out and follow us on social media</p>

				<div class="contact-form__icons">
					<img src="@/assets/contact/Icon-Facebook.svg" alt="">
					<img src="@/assets/contact/Icon-Instagram.svg" alt="">
					<img src="@/assets/contact/Icon-Telegram.svg" alt="">
					<img src="@/assets/contact/Icon-Twitter.svg" alt="">
					<img src="@/assets/contact/Icon-Youtube.svg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.contact-form {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	height: 70vh;

	&__heading {
		font-size: 2rem;
		color: $white;
		margin-bottom: 5rem;
		text-align: center;
	}

	&__frm-wrapper, &__info {
		width: 50%;
	}

	&__wrapper {
		display: flex;

		input, textarea {
			display: block;
			width: 75%;
			background: #231051;
			box-shadow: none;
			border: none;
			border-radius: 3px;
		}

		input {
			height: 3rem;
			margin-bottom: 1rem;
			padding: 1rem;
		}

		textarea {
			padding: 1rem;
		}

		::placeholder {
			color: #4D2F96;
		}
	}

	&__info {
		&__heading {
			width: 75%;
			font-size: 1.5rem;
			color: $pink;
			font-family: 'Montserrat';
		}

		&__text {
			color: $white;
			font-family: 'MyriadPro';
			padding: 2rem 0;
		}
	}

	&__button {
		@include button;
		max-width: 28rem;
		margin: 2rem 0;
	}

	&__icons {
		display: flex;

		img {
			max-width: 2rem;
			margin-right: 1rem;
		}
	}
}
</style>