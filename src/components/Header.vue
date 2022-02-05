<template>
	<nav class="header">
		<div class="container header__wrapper">
			<div class="header__logo">
				<img alt="Logo" src="@/assets/logo.svg">
			</div>
			<ul class="header__list">
				<li class="header__item"><router-link to="/">Home</router-link></li>
				<li class="header__item"><router-link to="/about">About us</router-link></li>
				<li class="header__item"><router-link to="/services">Services</router-link></li>
				<li class="header__item"><router-link to="/contact">Contact</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99999;
	background-color: $dark-blue;
	box-shadow: 0 0 10px #000;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		padding-top: 1rem;
	}

    &__logo {
        width: 100%;
        max-width: 12.5rem;
		margin-bottom: 1rem;
    }
		&__list {
			display: flex;
			align-items: center;
		}
		&__item {
			a {
				color: $white;
				text-transform: uppercase;
				padding: 0 1.5rem;
				font-family: 'Montserrat';
				font-weight: 300;
				text-decoration: none;
			}
		}
		&__item:nth-last-child(1) {
			padding-right: 0px;
		}
}
</style>