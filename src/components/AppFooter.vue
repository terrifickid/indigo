<template>
  <div class="bg-silver font-jost font-normal">
    <div class="py-24 container mx-auto text-center">
      <router-link to="/"
        ><img class="mx-auto mb-12" src="indigo_logo.svg"
      /></router-link>
      <p class="text-sm tracking-wider mb-16">
        <span class="block lg:inline"
          ><router-link to="/" class="hover:underline"
            >WHY INDIGO</router-link
          ></span
        >
        <span class="dot block lg:inline my-3">&#9679;</span>
        <span class="block lg:inline"
          ><router-link to="/" class="hover:underline"
            >CLINICAL SERVICES</router-link
          ></span
        >
        <span class="dot block lg:inline my-3">&#9679;</span>
        <span class="block lg:inline"
          ><router-link to="/" class="hover:underline"
            >MEET OUR TEAM</router-link
          ></span
        >
        <span class="dot block lg:inline my-3">&#9679;</span>
        <span class="block lg:inline"
          ><router-link to="/" class="hover:underline"
            >LOCATIONS</router-link
          ></span
        >
        <span class="dot block lg:inline my-3">&#9679;</span>
        <span class="block lg:inline"
          ><router-link to="/" class="hover:underline"
            >PRICING & HELP</router-link
          ></span
        >
      </p>
      <p class="flex justify-center mb-16">
        <a href="/"><img class="mx-2" src="facebook.svg" /></a>
        <a href="/"><img class="mx-2" src="instagram.svg" /></a>
        <a href="/"><img class="mx-2" src="linkedin.svg" /></a>
        <a href="/"><img class="mx-2" src="spotify.svg" /></a>
        <a href="/"><img class="mx-2" src="youtube.svg" /></a>
      </p>
      <p class="opacity-50 uppercase tracking-wider text-sm">
        &copy; 2022 Indigo | Physical Therapy Clinic • All images are ©
        Copyrighted 2020 Indigo Physiotherapy, LLC.
      </p>
    </div>
  </div>
</template>
<style scoped>
.dot {
  font-size: 12px;
  @apply text-coral mx-3;
}
</style>
