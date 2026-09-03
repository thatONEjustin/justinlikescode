import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";

// @ts-ignore
import swiper from "@thatonejustin/alpine-swiper";

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect);
    Alpine.plugin(swiper);
};
