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
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit adipisicing elit.
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
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit.
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
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit
                            adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit adipisicing elit.
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
                    <router-link to="/contact" class="section5__button-email"><img src="@/assets/Button-Email.svg" alt="" class="section5__contact__icon"><span>contact@butterfly.design</span></router-link>
                    <router-link to="/contact" class="section5__button-phone"><img src="@/assets/Button-Phone.svg" alt="" class="section5__contact__icon phone-icon"><span>+353 879827181</span></router-link>
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