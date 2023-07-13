<script setup lang="ts">
import { ref, computed } from 'vue'

import ShowPoster from '@/components/ShowPoster.vue'
import type { Show } from '@/services/showModel'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const currentItem = ref<number>(0)
const breakpoints = {
    500: {
        itemsToShow: 2,
        itemsToScroll: 2,
        snapAlign: "center"
    },
    700: {
        itemsToShow: 3.5,
        itemsToScroll: 3.5,
        snapAlign: "center"
    },
    1024: {
        itemsToShow: 6,
        itemsToScroll: 6,
        snapAlign: "start"
    }
}
const props = withDefaults(
    defineProps<{
        title: string
        shows: Show[]
        posterWidth: number
        noResultsText: string
        isLoading?: boolean
    }>(),
    {
        posterWidth: 1,
        title: "All Shows",
        isLoading: false
    }
)

</script>

<template>
    <div v-if="!isLoading">
        <div>
            <div>
                <h2 class="text-h1">Top Rated {{ title }}</h2>
            </div>
        </div>

        <Carousel v-model="currentItem" :items-to-show="1" :items-to-scroll="1" :breakpoints="breakpoints" :transition="500"
            snapAlign="start">
            <Slide v-for="show, index in shows" :key="index">
                <div class="carousel__item">
                    <RouterLink :to="`/show/${show.id}`">
                        <transition name="slide" :duration="500" appear>
                            <ShowPoster :src="show.image?.medium" :name="show.name" />
                        </transition>
                    </RouterLink>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
    <div v-else>
        <span class="loader">Loading...</span>
    </div>
</template>

<style lang="scss">
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
    color: white;
    box-sizing: content-box;
    background-color: black;
}
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__slide {
    padding: 10px;
}

.text-h1 {
    color: white;
    font-size: 2.125em;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.00735em;
    padding: 2rem;
}
.loader{
    height: 100%;
    min-height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>