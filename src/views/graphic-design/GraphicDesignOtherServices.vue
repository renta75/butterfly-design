<template>
    <div class="graphic-design__main-section__other-services">
        <h2 class="graphic-design__main-section__other-services-h2">Check other services or contact us</h2>

        <div class="graphic-design__main-section__other-services-wrapper">
            <div class="graphic-design__main-section__other-service">
                <img src="@/assets/services/Services-Development-icon.svg" alt="">
                <router-link to="/services/web-development" class="graphic-design__main-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
            </div>

            <div class="graphic-design__main-section__other-service">
                <img src="@/assets/services/Services-E-commerce-icon.svg" alt="">
                <router-link to="/services/e-commerce" class="graphic-design__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
            </div>

            <div class="graphic-design__main-section__other-service">
                <img src="@/assets/services/Services-Maintenance-Icon.svg" alt="">
                <router-link to="/services/maintenance" class="graphic-design__main-section__other-service-heading"><span>MAINTENANCE</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GraphicDesignOtherServices'
}
</script>