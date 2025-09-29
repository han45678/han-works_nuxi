<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

// styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// store (kept as any to avoid missing-import TS errors if auto-import is used)
const commonStore = useCounterStore() as any

// Vite glob as URL (eager) -> typed as Record<string, string>
const images = import.meta.glob('/assets/images/works/**/*.webp', {
    eager: true,
    as: 'url'
}) as Record<string, string>

// helper: collect images for a given id
const getImagesById = (id: string | number, quantity: number): string[] => {
    const base = `/assets/images/works/${id}/`
    return Array.from({ length: quantity }, (_, i) => images[`${base}${i + 1}.webp`])
        .filter(Boolean) as string[]
}
</script>

<template>
    <div
        v-if="commonStore.winOpen && commonStore.winInfo"
        class="win"
    >
        <div class="win_content">
            <button @click="commonStore.setWinOpen(false)" />
            <h2>{{ commonStore.winInfo.title }}</h2>

            <div class="pic">
                <Swiper
                    :slides-per-view="1"
                    :space-between="0"
                    loop
                    grab-cursor
                    navigation
                    :modules="[Navigation]"
                >
                    <SwiperSlide
                        v-for="(src, index) in getImagesById(
                            commonStore.winInfo.id,
                            commonStore.winInfo.quantity
                        )"
                        :key="index"
                    >
                        <img
                            :src="src"
                            :alt="`${commonStore.winInfo.title} - ${index + 1}`"
                        >
                    </SwiperSlide>
                </Swiper>
            </div>

            <p>{{ commonStore.winInfo.text }}</p>
        </div>
        <div class="mask" @click="commonStore.setWinOpen(false)" />
    </div>
</template>