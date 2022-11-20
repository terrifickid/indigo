<template>
  <div>
    <BlockHeaderImage
      title="MEET OUR TEAM"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    />
  </div>
  <div class="container mx-auto px-5 my-24">
    <ElementHeading class="mb-6 border-b pb-3"
      >DOCTORS OF PHYSICAL THERAPY</ElementHeading
    >
    <div class="grid grid-cols-12 gap-4 mt-10">
      <div class="col-span-6 lg:col-span-3 mb-10">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5">
    <ElementHeading class="mb-6 border-b pb-3">Bodyworkers</ElementHeading>
    <div class="grid grid-cols-12 gap-4 mt-10">
      <div class="col-span-6 lg:col-span-3 mb-10">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
      <div class="col-span-6 lg:col-span-3">
        <div class="aspect-[6/7] bg-white border w-full mb-4"></div>
        <p class="text-coral font-semibold text-sm">DR. SAMANTHA DUFLO</p>
        <p class="text-coral text-sm">Owner & Founder</p>
      </div>
    </div>
  </div>

  <BlockCtaText />
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src
import BlockHeaderImage from "@/components/block/BlockHeaderImage";
import BlockCtaText from "@/components/block/BlockCtaText";
import ElementHeading from "@/components/element/ElementHeading";
export default {
  components: { BlockHeaderImage, ElementHeading, BlockCtaText },
};
</script>
