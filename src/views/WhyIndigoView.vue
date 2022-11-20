<template>
  <div class="bg-silver pb-24">
    <div>
      <BlockHeaderImage
        title="WHY INDIGO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
      />
    </div>
    <BlockOurTeam />
  </div>
  <div class="pb-24">
    <ElementCarousel class="py-24" />
    <BlockOurServices />
  </div>

  <BlockTestimonials />

  <BlockMediaHighlights />

  <BlockCtaText />
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src
import BlockOurTeam from "@/components/block/BlockOurTeam";
import BlockOurServices from "@/components/block/BlockOurServices";
import BlockHeaderImage from "@/components/block/BlockHeaderImage";

import ElementCarousel from "@/components/element/ElementCarousel";

import BlockCtaText from "@/components/block/BlockCtaText";
import BlockTestimonials from "@/components/block/BlockTestimonials";
import BlockMediaHighlights from "@/components/block/BlockMediaHighlights";
export default {
  components: {
    BlockOurTeam,
    BlockHeaderImage,

    BlockOurServices,
    ElementCarousel,

    BlockCtaText,
    BlockTestimonials,
    BlockMediaHighlights,
  },
};
</script>
