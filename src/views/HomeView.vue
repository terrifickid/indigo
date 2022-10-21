<template>
  <div class="home">
    <div
      class="min-h-screen bg-cover bg-center flex items-center justify-center py-24"
      :style="{ backgroundImage: 'url(hero1.jpg)' }"
    >
      <div>
        <div
          class="text-white font-jost font-semibold text-5xl tracking-wider mb-6 uppercase text-center"
          style="line-height: 65px"
        >
          WHOLE-BODY<br />HEALING. FOR ALL BODIES.
        </div>
        <div class="grid grid-cols-12">
          <div
            class="col-span-10 col-start-2 lg:col-span-6 lg:col-start-4 text-center"
          >
            <p class="font-serify text-2xl leading-9 text-center text-white">
              We challenge traditional models of care in pursuit of true
              healing. We offer a safe and welcoming environment for all people
              to receive one-on-one, private and personalized treatment sessions
              focusing on individual goals around healing, wellness, movement
              and function.
            </p>
            <button
              class="bg-coral text-white px-12 uppercase py-6 mx-auto mt-8 text-xs"
              style="letter-spacing: 0.2em"
            >
              Book Today
            </button>
          </div>
        </div>
      </div>
    </div>
    <BlockLogos />
    <BlockTextCols />
    <BlockCtaText />
  </div>
</template>

<script>
// @ is an alias to /src
import BlockLogos from "@/components/block/BlockLogos";
import BlockTextCols from "@/components/block/BlockTextCols";
import BlockCtaText from "@/components/block/BlockCtaText";
export default {
  name: "HomeView",
  components: { BlockLogos, BlockTextCols, BlockCtaText },
};
</script>
