<template>
    <div class="maintenance__main-section__other-services">
        <h2 class="maintenance__main-section__other-services-h2">Check other services or contact us</h2>

        <div class="maintenance__main-section__other-services-wrapper">
            <router-link to="/services/web-development" class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-Development-icon.svg" alt="">
                <h4 class="maintenance__main-section__other-service-heading"><span>DEVELOPMENT</span></h4>
            </router-link>

            <router-link to="/services/e-commerce" class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-E-commerce-icon.svg" alt="">
                <h4 class="maintenance__main-section__other-service-heading"><span>E-COMMERCE</span></h4>
            </router-link>

            <router-link to="/services/graphic-design" class="maintenance__main-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.svg" alt="">
                <h4 class="maintenance__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></h4>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MaintenanceOtherServices'
}
</script>