<template>
  <carousel :wrapAround="true" :snapAlign="'center'" :breakpoints="breakpoints">
    <slide v-for="slide in 10" :key="slide">
      <div
        class="bg-white border w-full h-64 m-2 rounded-lg cursor-pointer"
      ></div>
    </slide>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      breakpoints: {
        // 700px and up
        0: {
          itemsToShow: 2.5,
        },
        // 1024 and up
        1024: {
          itemsToShow: 5.5,
        },
      },
    };
  },
};
</script>
