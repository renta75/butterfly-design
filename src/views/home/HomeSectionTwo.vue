<template>
    <div class="container section2">
        <div class="laptop">
            <img
                src="@/assets/Laptop-WebDevelopment.svg"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Web development</h3>
                <p class="laptop__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Optio ipsa iusto nam
                    enim sed!
                </p>
                <router-link to="/services/web-development" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-Ecommerce.svg"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">ECommerce</h3>
                <p class="laptop__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Optio ipsa iusto nam
                    enim sed!
                </p>
                <router-link to="/services/e-commerce" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-Maintenance.svg"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Maintenance</h3>
                <p class="laptop__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Optio ipsa iusto nam
                    enim sed!
                </p>
                <router-link to="/services/maintenance" class="laptop__link">Read More...</router-link>
            </div>
        </div>
        <div class="laptop">
            <img
                src="@/assets/Laptop-GraphDesign.svg"
                alt=""
                class="laptop__image"
            />
            <div class="laptop__content">
                <h3 class="laptop__heading">Graphic Design</h3>
                <p class="laptop__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ipsa iusto nam enim sed! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Optio ipsa iusto nam
                    enim sed!
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