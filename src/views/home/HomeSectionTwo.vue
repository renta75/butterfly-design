<template>
    <div class="container section2">
        <div class="laptop">
            <img
                src="@/assets/Laptop-Webdevelopment.png"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Web development</h3>
                <p class="laptop__text">
                    We create websites from concept to implementation. We are actively involved in all the steps required to create your project.
                </p>
                <router-link to="/services/web-development" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-eCommerce.png"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">ECommerce</h3>
                <p class="laptop__text">
                    End to end e-commerce solutions to start, grow and expand your online business.
                </p>
                <router-link to="/services/e-commerce" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-Maintenance.png"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Maintenance</h3>
                <p class="laptop__text">
                    WordPress website maintenance, optimization, recovery, fixes and support.
                </p>
                <router-link to="/services/maintenance" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-GraphicDesign.png"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Graphic Design</h3>
                <p class="laptop__text">
                    Logo Design and marketing materials printed and delivered to your door.
                </p>
                <router-link to="/services/graphic-design" class="laptop__link">Read More...</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeSectionTwo'
}
</script>