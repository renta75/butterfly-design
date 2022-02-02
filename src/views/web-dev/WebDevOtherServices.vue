<template>
    <div class="web-development__main-section__other-services">
        <h2 class="web-development__main-section__other-services-h2">Check other services or contact us</h2>

        <div class="web-development__main-section__other-services-wrapper">
            <div class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-E-commerce-icon.svg" alt="">
                <router-link to="/services/e-commerce" class="web-development__main-section__other-service-heading"><span>E-COMMERCE</span></router-link>
            </div>

            <div class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-Maintenance-Icon.svg" alt="">
                <router-link to="/services/maintenance" class="web-development__main-section__other-service-heading"><span>MAINTENANCE</span></router-link>
            </div>

            <div class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.svg" alt="">
                <router-link to="/services/graphic-design" class="web-development__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WebDevOtherServices'
}
</script>