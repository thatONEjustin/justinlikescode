import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'

// @ts-nocheck
import swiper from '@thatonejustin/alpine-swiper'

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.plugin(swiper)
}
