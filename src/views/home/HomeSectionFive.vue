<template>
    <div class="section5">
        <div class="container">
            <div class="elevated-boxes">
                <div class="elevated-boxes__wrapper">
                    <div>
                        <img
                            class="elevated-boxes__top-img first-img"
                            src="@/assets/whybutterflydesign.svg"
                            alt=""
                        />
                        <h3>Why butterfly design?</h3>
                        <p>
                            We believe in process of metamorphoses. Like the ugly caterpillar at first,
                            we believe in transforming our societies into beautiful butterfly. People and
                            organizations will come to us to transform their current stage of visual
                            identity or products.
                        </p>
                    </div>
                    <div class="elevated-boxes__elevated-box">
                        <img
                            class="elevated-boxes__top-img"
                            src="@/assets/missionandgoals.svg"
                            alt=""
                        />
                        <h3>Mission and goals</h3>
                        <p>
                            To help adding value to your business
                            through digital design solutions and
                            related services by providing original
                            solutions to all types of businesses and
                            making the creative process as simple as
                            possible and understandable for people f
                            rom all areas of expertise.

                        </p>
                    </div>
                    <div>
                        <img
                            class="elevated-boxes__top-img"
                            src="@/assets/aboutbutterflydesign.svg"
                            alt=""
                        />
                        <h3>About butterfly design</h3>
                        <p>
                            We are looking to make a big impact on people's lives, small and medium
                            businesses, helping businesses and
                            individuals to get their own place online, we are going
                            beyond expectations
                            and always overdeliver.
                        </p>
                    </div>
                </div>
            </div>

            <div class="section5__contact">
                <router-link to="/about" class="section5__button"><span>About us</span></router-link>

                <h3 class="section5__contact__heading">Let's build something great together</h3>

                <div class="section5__contact__text">
                    <span>Call back assistance</span>
                    <span class="section5__contact__slash"></span>
                    <span>Project consulting</span>
                    <span class="section5__contact__slash"></span>
                    <span>Detailed project estimate</span>
                </div>

                <div class="section5__contact__buttons">
                    <router-link to="/contact" class="section5__button-email"><img src="@/assets/Button-Email.svg" alt="" class="section5__contact__icon"><span>contact@butterflydesign.hr</span></router-link>
                    <router-link to="/contact" class="section5__button-phone"><img src="@/assets/Button-Phone.svg" alt="" class="section5__contact__icon phone-icon"><span>+385 914777020</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeSectionFive'
}
</script>