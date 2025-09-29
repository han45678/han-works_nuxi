<template>
    <div class="banner">
        <div class="text">
            <div class="text_content">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="2500"
                >
                    HAN's WORKS
                </h1>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    data-aos-delay="300"
                >
                    Front-End Alchemist
                </h2>
                <div
                    class="btn"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    data-aos-delay="600"
                >
                    <button @click="$emit('to-works')">View Projects</button>
                    <button @click="$emit('to-about')">About Me</button>
                </div>
            </div>
        </div>
        <div
            class="arrow-down"
            @click="$emit('to-works')"
        >
            <span /><span /><span />
        </div>
    </div>
</template>
