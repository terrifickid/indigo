<template>
  <div class="py-24 font-jost">
    <ElementHeading class="mb-6 text-center">Media Highlights</ElementHeading>
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div
          class="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 xl:col-span-4 xl:col-start-5"
        >
          <ElementParagraph class="text-center mb-24">
            Stay tuned on our social media @indigophysio or sign up for our
            newsletter to be notified of upcoming events.
          </ElementParagraph>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 sm:gap-4">
        <div class="col-span-12 sm:col-span-4 mb-12">
          <div class="w-full aspect-video bg-white border mb-8"></div>
          <p class="text-xs text-coral tracking-widest mb-2">APRIL 11, 2021</p>
          <p class="text-coral font-semibold tracking-widest mb-2">
            DR. SAM ON FOX45 NEW
          </p>
          <p>
            How to ease back into exercising this spring, if you’ve taken some
            time off
          </p>
        </div>
        <div class="col-span-12 sm:col-span-4 mb-12">
          <div class="w-full aspect-video bg-white border mb-8"></div>
          <p class="text-xs text-coral tracking-widest mb-2">APRIL 11, 2021</p>
          <p class="text-coral font-semibold tracking-widest mb-2">
            DR. SAM ON FOX45 NEW
          </p>
          <p>
            How to ease back into exercising this spring, if you’ve taken some
            time off
          </p>
        </div>
        <div class="col-span-12 sm:col-span-4 mb-12">
          <div class="w-full aspect-video bg-white border mb-8"></div>
          <p class="text-xs text-coral tracking-widest mb-2">APRIL 11, 2021</p>
          <p class="text-coral font-semibold tracking-widest mb-2">
            DR. SAM ON FOX45 NEW
          </p>
          <p>
            How to ease back into exercising this spring, if you’ve taken some
            time off
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ElementHeading from "@/components/element/ElementHeading";
import ElementParagraph from "@/components/element/ElementParagraph";
export default {
  components: { ElementHeading, ElementParagraph },
};
</script>
