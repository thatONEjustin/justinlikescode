import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import swiper from '@thatonejustin/alpine-swiper' // @ts-nocheck

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.plugin(swiper)
}
