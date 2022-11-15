<template>
  <div class="grid grid-cols-12 flex items-center">
    <div class="col-span-12 md:col-span-4">
      <div
        class="aspect-square w-full bg-white border flex items-center justify-end"
      >
        <div>
          <div class="aspect-square bg-white border md:w-64 md:-mr-32"></div>
        </div>
      </div>
    </div>

    <div class="col-span-12 md:col-span-8 flex items-center">
      <div class="p-8 md:pl-40 lg:pl-24 lg:pl-64">
        <ElementHeading>{{ title }}</ElementHeading>
        <ElementParagraph class="py-4">
          {{ description }}
        </ElementParagraph>
        <button
          class="mr-3 my-3 bg-white border border-coral text-coral px-8 uppercase py-5 tracking-widest text-sm"
        >
          Learn More
        </button>
        <button
          class="my-3 bg-coral border border-coral text-white px-8 uppercase py-5 tracking-widest text-sm"
        >
          Book Today
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ElementHeading from "@/components/element/ElementHeading";
import ElementParagraph from "@/components/element/ElementParagraph";
export default {
  props: ["title", "description", "layout"],
  components: {
    ElementHeading,
    ElementParagraph,
  },
};
</script>
