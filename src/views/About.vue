<template>
    <div class="about">
        <div class="container about__intro-wrapper">
            <div class="about__title-wrapper">
                <h1 class="about__h1">ABOUT US</h1>
            </div>
        </div>

        <div class="about__large-butterfly">
            <div class="about__large-butterfly__text-wrapper">
                <h2 class="about__large-butterfly__heading">
                    Why Butterfly Design?
                </h2>
                <p class="about__large-butterfly__text">
                    We believe in process of metamorphoses. Like the ugly
                    caterpillar at first, we believe in transforming our
                    societies into beautiful butterfly.
                </p>
            </div>

            <img src="../assets/about-us/PAGE-AboutUs-Butterfly.svg" alt="" class="about__large-butterfly__img">
        </div>

        <div class="container about__metamorph">
            <h2 class="about__metamorph__heading">The process of metamorphoses (our approach)</h2>

            <div class="about__metamorph__wrapper">
                <img src="../assets/about-us/PAGE-AboutUs-Butterfly-Circle.png" alt="">

                <div class="about__metamorph__lists">
                    <h3 class="about__metamorph__pink-heading">Let things simplify in 5 stages of butterflies life:</h3>
                    <ol class="about__metamorph__list">
                        <li class="about__metamorph__list-item">Egg</li>
                        <li class="about__metamorph__list-item">Chrysalis</li>
                        <li class="about__metamorph__list-item">Caterpillar</li>
                        <li class="about__metamorph__list-item">Cacoon</li>
                        <li class="about__metamorph__list-item">Beautiful butterfly</li>
                    </ol>

                    <h3 class="about__metamorph__pink-heading">At every stage the “work” is done by:</h3>
                    <ol class="about__metamorph__list">
                        <li class="about__metamorph__list-item">Taking your ideas. Yes, we know how to listen for “seeding eggs”.</li>
                        <li class="about__metamorph__list-item">Making an early prototype. Shy, shy, shy like little “chrysalis”.</li>
                        <li class="about__metamorph__list-item">Making an advanced prototype. Ugly but functional “caterpillar”.</li>
                        <li class="about__metamorph__list-item">Leave as alone and feedback very fast. Most of working is “inside cocoon”</li>
                        <li class="about__metamorph__list-item">Finally, the product is done. The “beautiful butterfly”.</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="container about__overlapping-headers">
            <h1 class="about__overlapping-headers-h1">www.butterfly.design</h1>
            <h2 class="about__overlapping-headers-h2">THE GLOVE IN THE DARK</h2>
        </div>

        <carousel :per-page="1" :mouse-drag="false">
            <slide>
                <div class="container about__carousel-slider">
                    <h2>ONE STORY FROM BALKAN’S PENSINSULA</h2>
                    <p>
                        There was one land so called Yugoslavia. The one was made of 7 nations and 3 religions. There where no country like this in the world by its structure. Yugoslav communist’s leader Tito leads the nations since his death. When Tito dies the dark sided members of communist party take a lead. The Yugoslavia ended in bloody and cruel war between nations.
                    </p>

                    <p>
                        Darkness of the war in Yugoslavia is still present with scarfs they leaved.
                        Three current countries were vastly damaged in the war:
                    </p>

                    <ul>
                        <li>Bosnia and Herzegovina</li>
                        <li>Croatia</li>
                        <li>Serbia</li>
                    </ul>

                    <p>That is where we came from...</p>
                </div>
            </slide>
            <slide>
                <div class="container about__carousel-slider">
                    <h2>FOR GOOD TIMES AHEAD OF US</h2>
                    <p>
                        We believe in the good times ahead of us. So, we founded the Butterfly design
                        to be the medium for regional cooperation between intelligent creative people.
                        We believe that free open-minded people exist in every country, and we want to cooperate.
                    </p>

                    <p>In what we believe:</p>
                    <ul>
                        <li>- We believe in top skilled us. Our works shows a “little” bit of that...</li>
                        <li>- We are “crazy” about our job. Just look at this design, it’s outstanding</li>
                        <li>- We are brave and bold. We never give-up!</li>
                    </ul>
                </div>
            </slide>
        </carousel>

        <div class="about__contact">
            <h2>THE CONTACT BUTTON IS RIGHT HERE</h2>

            <router-link to="/contact" class="about__button"><span>Contact us</span></router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/_mixins.scss";

.about {
    &__intro-wrapper {
        margin-top: 12rem;
    }

    &__title-wrapper {
        text-align: center;
        margin: 8rem 0;

        h1 {
            font-family: "Colombo";
            color: $teal;
            font-size: 6.25rem;
            text-transform: uppercase;
        }
    }

    &__large-butterfly {
        display: flex;
        padding-left: 15rem;

        &__text-wrapper {
            width: 55%;
        }

        &__heading {
            font-size: 4rem;
            color: $pink;
            font-family: 'Montserrat';
        }

        &__text {
            color: $white;
            font-size: 2rem;
            font-family: 'MyriadPro';
            padding-top: 2rem;
            width: 75%;
        }

        &__img {
            width: 100%;
            max-width: 30rem;
            position: absolute;
            right: 15rem;
            top: 10rem;
        }
    }

    &__metamorph {
        margin-top: 20rem;

        &__heading {
            color: $white;
            font-size: 2rem;
            font-family: 'MyriadPro';
            margin-bottom: 3rem;
            text-align: center;
        }

        &__wrapper {
            display: flex;
        }

        &__lists {
            padding: 5rem 0 0 5rem;
        }

        &__pink-heading {
            color: $pink;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
        }

        &__list {
            margin-bottom: 3rem;

            li {
                counter-increment: item;
                color: $white;
                font-family: 'Montserrat';
                padding-bottom: 1rem;
            }

            li:before {
                margin-right: 10px;
                content: counter(item);
                color: $teal;
                display: inline-block;
                font-weight: bold;
            }
        }
    }

    &__overlapping-headers {
        text-align: center;
        margin: 3rem auto;

        @include overlapping-headers;
    }

    &__carousel-slider {
        background: linear-gradient(270deg, rgba(19, 0, 55, 0) 0%, rgba(22, 255, 255, 0.25) 100%);
        color: $white;
        padding: 5rem;

        h2 {
            font-size: 2rem;
            font-family: 'Montserrat';
            color: $pink;
            text-align: center;
            max-width: 28rem;
            margin: 0 auto 2rem;
        }

        p {
            font-size: 1.25rem;
            font-family: 'Montserrat';

            &:nth-of-type(2) {
                margin-top: 2rem;
            }
        }

        ul {
            margin-bottom: 1rem;
        }

        ul li {
            font-size: 1.25rem;
            font-family: 'Montserrat';
        }
    }

    &__contact {
        display: flex;
        max-width: 960px;
        width: 100%;
        margin: 5rem auto;
        align-items: center;
        justify-content: space-between;

        h2 {
            color: $teal;
            font-family: 'Colombo';
            font-size: 3rem;
            max-width: 60%;
        }
    }

    &__button {
        @include button;
        max-width: 15rem;
    }
}

.VueCarousel-dot {
    padding: 0 !important;
    margin: 0.25rem;
}
</style>