<template>
    <div class="ecommerce__bottom-section__other-services">
        <h2 class="ecommerce__bottom-section__other-services-h2">Check other services or contact us</h2>

        <div class="ecommerce__bottom-section__other-services-wrapper">
            <div class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-Development-icon.svg" alt="">
                <router-link to="/services/web-development" class="ecommerce__bottom-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
            </div>

            <div class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-Maintenance-Icon.svg" alt="">
                <router-link to="/services/maintenance" class="ecommerce__bottom-section__other-service-heading"><span>MAINTENANCE</span></router-link>
            </div>

            <div class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.svg" alt="">
                <router-link to="/services/graphic-design" class="ecommerce__bottom-section__other-service-heading"><span>GRAPHIC DESIGN</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ECommerceOtherServices'
}
</script>