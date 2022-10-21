<template>
  <div class="text-center -mb-3">
    <div
      class="half flex items-center py-32 bg-center bg-cover -mb-12"
      style="background-image: url('header.jpg')"
    >
      <div class="container mx-auto text-white text-center px-8">
        <p
          class="font-jost font-semibold text-5xl tracking-wider mb-6 uppercase"
        >
          {{ title }}
        </p>
        <p class="font-serify text-2xl leading-8">{{ description }}</p>
      </div>
    </div>
    <button
      class="bg-coral text-white px-8 uppercase py-5 tracking-widest mx-auto -mb-12 text-xs"
    >
      Book Today
    </button>
  </div>
</template>
<script>
export default {
  props: ["title", "description"],
};
</script>
<style>
.half {
  min-height: 50vh;
}
</style>
