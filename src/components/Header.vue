<template>
    <nav class="header">
        <div class="container header__wrapper">
            <div class="header__logo">
                <router-link to="/">
                    <img alt="Logo" src="@/assets/menu-logo.svg" />
                </router-link>
            </div>
            <ul class="header__list">
                <li class="header__item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="header__item">
                    <router-link to="/about">About us</router-link>
                </li>
                <li class="header__item">
                    <router-link to="/services">Services</router-link>
                </li>
                <li class="header__item">
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>

            <div class="header__mobile-menu">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul class="header__mobile-menu__list">
                    <router-link to="/"><li>Home</li></router-link>
                    <router-link to="/about"><li>About us</li></router-link>
                    <router-link to="/services"><li>Services</li></router-link>
                    <router-link to="/contact"><li>Contact</li></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.header__mobile-menu {
    display: none;
}

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
        margin-bottom: 1rem;

        img {
            width: 12.5rem;
            height: 100%;
        }
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
            font-family: "Montserrat";
            font-weight: 300;
            text-decoration: none;
        }
    }
    &__item:nth-last-child(1) {
        padding-right: 0px;
    }
}

@media only screen and (max-width: 767px) {
    .header__list {
        display: none;
    }

    .header__mobile-menu {
        display: block;
        position: relative;
        top: 0.5rem;
        right: 1rem;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }

    .header__mobile-menu a {
        text-decoration: none;
        color: $white;
        transition: color 0.3s ease;
    }

    .header__mobile-menu input {
        display: block;
        width: 40px;
        height: 2rem;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        -webkit-touch-callout: none;
    }

    .header__mobile-menu span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: #cdcdcd;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    .header__mobile-menu span:first-child {
        transform-origin: 0% 0%;
    }

    .header__mobile-menu span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    .header__mobile-menu input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: $white;
    }

    .header__mobile-menu input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    .header__mobile-menu input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    .header__mobile-menu__list {
        position: absolute;
        width: 22rem;
		height: 60vh;
        right: -51px;
        padding: 1.5rem 3.5rem 1.5rem 1.5rem;
		text-align: right;
        background: $dark-blue;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    .header__mobile-menu__list li {
        padding: 10px 0;
        font-size: 22px;
    }

    .header__mobile-menu input:checked ~ ul {
        transform: none;
    }
}
</style>