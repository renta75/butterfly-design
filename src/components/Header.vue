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
                    <router-link to="/services" class="header__link" @mouseenter.native="show = true" @mouseleave.native="show = false">
                        Services <img src="@/assets/Icon-DOWN.svg" alt="" :class="['header__arrow', show ? 'rotate' : '']">
                        <ul class="header__submenu" v-if="show" @click.stop="show = false">
                            <router-link to="/services/web-development"><li class="header__subitem">Development</li></router-link>
                            <router-link to="/services/e-commerce"><li class="header__subitem">E-Commerce</li></router-link>
                            <router-link to="/services/maintenance"><li class="header__subitem">Maintenance</li></router-link>
                            <router-link to="/services/graphic-design"><li class="header__subitem">Graphic Design</li></router-link>
                        </ul>
                    </router-link>
                </li>
                <li class="header__item">
                    <router-link to="/about">About us</router-link>
                </li>
                <li class="header__item">
                    <router-link :to="{ path: '/contact' }">Contact</router-link>
                </li>
            </ul>

            <div class="header__mobile-menu">
                <input type="checkbox" v-model="checked" />

                <span></span>
                <span></span>
                <span></span>

                <ul class="header__mobile-menu__list">
                    <router-link to="/"><li class="header__list-item">Home</li></router-link>
                    <router-link to="/services">
                        <li class="header__list-item">
                            Services
                        </li>
                    </router-link>
                    <ul class="header__submenu-mob">
                        <router-link to="/services/web-development"><li class="header__subitem-mob">Development</li></router-link>
                        <router-link to="/services/e-commerce"><li class="header__subitem-mob">E-Commerce</li></router-link>
                        <router-link to="/services/maintenance"><li class="header__subitem-mob">Maintenance</li></router-link>
                        <router-link to="/services/graphic-design"><li class="header__subitem-mob">Graphic Design</li></router-link>
                    </ul>
                    <router-link to="/about"><li class="header__list-item">About us</li></router-link>
                    <router-link :to="{ path: '/contact' }"><li class="header__list-item">Contact</li></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'header-component',
    data() {
        return {
            show: false,
            checked: false
        }
    },
    watch:{
        $route (){
            this.checked = false;
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.header__mobile-menu {
    display: none;
}

.rotate {
    transform: rotate(-180deg);
    transition: 0.3s ease;
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
    &__arrow {
        width: 0.8rem;
        position: relative;
        top: -0.15rem;
        transition: 0.3s ease;
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
    }
    &__submenu {
        position: absolute;
        background: $dark-blue;
        width: 100%;
        max-width: 15rem;
        padding: 1rem 1.65rem 0;
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
		height: 50vh;
        top: 3rem;
        right: -51px;
        padding: 0 0 1.5rem 0;
		text-align: left;
        background: $dark-blue;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        box-shadow: 0 4px 2px -2px #000;
    }

    .header__mobile-menu__list li {
        font-size: 1.5rem;
        padding-left: 1.25rem;
    }

    .header__list-item {
        padding: 10px 0;
    }

    .header__mobile-menu input:checked ~ ul {
        transform: none;
    }

    .header__submenu-mob {
        background: #160040;
        width: 100%;
        padding-left: 1rem;
        text-align: left;
    }

    .header__subitem-mob {
        font-size: 1.15rem !important;
        padding: 1rem 0;
    }
}
</style>