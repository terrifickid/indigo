<template>
  <div class="bg-silver pb-24">
    <div>
      <BlockHeaderImage
        title="WHY INDIGO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
      />
    </div>
    <ElementHeading class="mb-6 text-center">Our Team</ElementHeading>
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div
          class="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 xl:col-span-4 xl:col-start-5"
        >
          <ElementParagraph class="text-center mb-24">
            Our staff is superior because not only are they doctors of physical
            therapy, they are board certified meaning they have the highest
            level of training available in our field.
          </ElementParagraph>
        </div>
      </div>
    </div>
    <ElementCarousel />
  </div>
  <div class="pb-24">
    <ElementCarousel class="py-24" />
    <ElementHeading class="mb-24 uppercase text-center"
      >Our Services</ElementHeading
    >
    <ElementServiceLeft
      title="PHYSICAL THERAPY"
      description="Our pelvic physical therapy team will provide ongoing collaboration with our client’s entire care team of choice, including medical doctors, wellness and alternative care providers."
    />
    <ElementServiceRight
      title="Dry Needling"
      description="Dry needling is a technique, different from acupuncture which is based on meridians in the body, that has a targeted form of myofascial release."
    />
    <ElementServiceLeft
      title="Bodywork"
      description="As you adjust to healing your body during your postpartum time, fourth trimester and beyond, postpartum massage will support support your body during transitions, and healing."
    />
    <ElementServiceRight
      title="Prenatal and Postpartum Yoga"
      description="Find a home in your body, guided by highly trained yoga instructors with our expert physical therapists, and rejoin community in our small group classes."
    />
  </div>

  <BlockTestimonials />

  <BlockMediaHighlights />

  <BlockCtaText />
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src
import BlockHeaderImage from "@/components/block/BlockHeaderImage";
import ElementHeading from "@/components/element/ElementHeading";
import ElementParagraph from "@/components/element/ElementParagraph";
import ElementCarousel from "@/components/element/ElementCarousel";
import ElementServiceLeft from "@/components/element/ElementServiceLeft";
import ElementServiceRight from "@/components/element/ElementServiceRight";
import BlockCtaText from "@/components/block/BlockCtaText";
import BlockTestimonials from "@/components/block/BlockTestimonials";
import BlockMediaHighlights from "@/components/block/BlockMediaHighlights";
export default {
  components: {
    BlockHeaderImage,
    ElementHeading,
    ElementParagraph,
    ElementCarousel,
    ElementServiceLeft,
    ElementServiceRight,
    BlockCtaText,
    BlockTestimonials,
    BlockMediaHighlights,
  },
};
</script>
