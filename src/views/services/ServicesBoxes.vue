<template>
    <div class="container services-wrapper">
        <div class="services-wrapper__box">
            <img class="services-wrapper__top-img" src="@/assets/services/Services-Development-icon.svg" alt="">
            <h3 class="services-wrapper__heading">Development</h3>
            <p class="services-wrapper__text">Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet
            </p>
            <router-link to="/services/web-development" class="services-wrapper__link"><span>Read More</span></router-link>
        </div>
        <div class="services-wrapper__box">
            <img class="services-wrapper__top-img" src="@/assets/services/Services-E-commerce-icon.svg" alt="">
            <h3 class="services-wrapper__heading">E-commerce</h3>
            <p class="services-wrapper__text">Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet
            </p>
            <router-link to="/services/e-commerce" class="services-wrapper__link"><span>Read More</span></router-link>
        </div>
        <div class="services-wrapper__box">
            <img class="services-wrapper__top-img" src="@/assets/services/Services-Maintenance-Icon.svg" alt="">
            <h3 class="services-wrapper__heading">Maintenance</h3>
            <p class="services-wrapper__text">Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet
            </p>
            <router-link to="/services/maintenance" class="services-wrapper__link"><span>Read More</span></router-link>
        </div>
        <div class="services-wrapper__box">
            <img class="services-wrapper__top-img" src="@/assets/services/Services-GraphicDesign-Icon.svg" alt="">
            <h3 class="services-wrapper__heading">Graphic Design</h3>
            <p class="services-wrapper__text">Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet
            </p>
            <router-link to="/services/graphic-design" class="services-wrapper__link"><span>Read More</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesBoxes'
}
</script>