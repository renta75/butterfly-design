<template>
    <div class="ecommerce__bottom-section__other-services">
        <h2 class="ecommerce__bottom-section__other-services-h2">Check other services or contact us</h2>

        <div class="ecommerce__bottom-section__other-services-wrapper">
            <router-link to="/services/web-development" class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-Development-Icon.png" alt="">
                <h4 class="ecommerce__bottom-section__other-service-heading"><span>DEVELOPMENT</span></h4>
            </router-link>

            <router-link to="/services/maintenance" class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-Maintenance-Icon.png" alt="">
                <h4 class="ecommerce__bottom-section__other-service-heading"><span>MAINTENANCE</span></h4>
            </router-link>

            <router-link to="/services/graphic-design" class="ecommerce__bottom-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.png" alt="">
                <h4 class="ecommerce__bottom-section__other-service-heading"><span>GRAPHIC DESIGN</span></h4>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ECommerceOtherServices'
}
</script>