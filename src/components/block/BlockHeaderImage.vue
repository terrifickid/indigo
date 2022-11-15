<template>
  <div class="mb-16">
    <div class="text-center">
      <div
        class="half flex items-center py-32 bg-center bg-cover -mb-8"
        style="background-image: url('header.jpg')"
      >
        <div class="container mx-auto text-white text-center px-8">
          <div class="grid grid-cols-12">
            <div
              class="col-span-12 md:col-start-2 md:col-span-10 xl:col-start-3 xl:col-span-8"
            >
              <p
                class="font-jost font-semibold text-5xl tracking-wider mb-6 uppercase"
              >
                {{ title }}
              </p>
              <p class="font-serify text-2xl leading-8">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-coral text-white px-8 uppercase py-5 tracking-widest mx-auto text-xs"
      >
        Book Today
      </button>
    </div>
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
