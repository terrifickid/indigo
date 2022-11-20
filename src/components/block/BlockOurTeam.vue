<template>
  <ElementHeading class="mb-6 text-center">Our Team</ElementHeading>
  <div class="container mx-auto">
    <div class="grid grid-cols-12">
      <div
        class="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 xl:col-span-4 xl:col-start-5"
      >
        <ElementParagraph class="text-center mb-24">
          Our staff is superior because not only are they doctors of physical
          therapy, they are board certified meaning they have the highest level
          of training available in our field.
        </ElementParagraph>
      </div>
    </div>
  </div>
  <ElementCarousel />
</template>
<script>
import ElementHeading from "@/components/element/ElementHeading";
import ElementParagraph from "@/components/element/ElementParagraph";
import ElementCarousel from "@/components/element/ElementCarousel";
export default {
  components: { ElementHeading, ElementParagraph, ElementCarousel },
};
</script>
