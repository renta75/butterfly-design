<template>
    <div class="maintenance__main-section__other-services">
        <h2 class="maintenance__main-section__other-services-h2">Check other services or contact us</h2>

        <div class="maintenance__main-section__other-services-wrapper">
            <div class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-Development-icon.svg" alt="">
                <router-link to="/services/web-development" class="maintenance__main-section__other-service-heading"><span>DEVELOPMENT</span></router-link>
            </div>

            <div class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-E-commerce-icon.svg" alt="">
                <router-link to="/services/e-commerce" class="maintenance__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
            </div>

            <div class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.svg" alt="">
                <router-link to="/services/graphic-design" class="maintenance__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MaintenanceOtherServices'
}
</script>