<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'AboutCarousel'
}
</script>