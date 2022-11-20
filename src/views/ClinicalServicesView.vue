<template>
  <div>
    <BlockHeaderImage
      title="CLINICAL SERVICES"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    />
  </div>
  <div class="py-12">
    <BlockOurServices />
  </div>
  <BlockCtaText />
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src
import BlockHeaderImage from "@/components/block/BlockHeaderImage";
import BlockOurServices from "@/components/block/BlockOurServices";
import BlockCtaText from "@/components/block/BlockCtaText";
export default {
  components: { BlockHeaderImage, BlockOurServices, BlockCtaText },
};
</script>
