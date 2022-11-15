<template>
  <div class="bg-silver py-48 px-6">
    <carousel :items-to-show="1">
      <slide v-for="slide in 10" :key="slide">
        <div class="grid grid-cols-12">
          <div class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
            <p class="text-sm text-coral pt-12 invisible">KAREN SAFIE</p>
            <ElementHeading
              >INDIGO PHYSIOTHERAPY IS MY SAFE HAVEN! DR. SAM HAS BUILT AN
              INCREDIBLE PLACE FOR HEALING, WHERE WE FIND PROFESSIONALISM,
              EXPERIENCE AND CARING HELP. KAREN SAFIE</ElementHeading
            >
            <p class="text-sm text-coral pt-12">KAREN SAFIE</p>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ElementHeading from "@/components/element/ElementHeading";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    ElementHeading,
  },
};
</script>
