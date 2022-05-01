<template>
    <div class="web-development__main-section__other-services">
        <h2 class="web-development__main-section__other-services-h2">Check other services or contact us</h2>

        <div class="web-development__main-section__other-services-wrapper">
            <router-link to="/services/maintenance" class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-E-commerce-Icon.png" alt="">
                <h4 class="web-development__main-section__other-service-heading"><span>E-COMMERCE</span></h4>
            </router-link>

            <router-link to="/services/maintenance" class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-Maintenance-Icon.png" alt="">
                <h4 class="web-development__main-section__other-service-heading"><span>MAINTENANCE</span></h4>
            </router-link>

            <router-link to="/services/graphic-design" class="web-development__main-section__other-service">
                <img src="@/assets/services/Services-GraphicDesign-Icon.png" alt="">
                <h4 class="web-development__main-section__other-service-heading"><span>GRAPHIC DESIGN</span></h4>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WebDevOtherServices'
}
</script>