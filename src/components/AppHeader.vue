<template>
  <nav class="bg-white text-black fixed w-screen shadow z-50">
    <div class="container-fluid mx-auto">
      <div class="grid grid-cols-12 min-w-full items-center py-5 px-8 xl:px-16">
        <div class="hidden lg:block lg:col-span-5">
          <ul class="font-jost text-sm">
            <li class="inline-block mr-5 xl:mr-10">
              <router-link to="/why" class="hover:underline"
                >WHY INDIGO</router-link
              >
            </li>
            <li class="inline-block mr-5 xl:mr-10">
              <router-link to="/clinical-services" class="hover:underline"
                >CLINICAL SERVICES</router-link
              >
            </li>
            <li class="inline-block">
              <router-link to="/meet-our-team" class="hover:underline"
                >MEET OUR TEAM</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-span-12 lg:col-span-2">
          <router-link to="/"
            ><img class="mx-auto" src="indigo_logo.svg"
          /></router-link>
        </div>

        <div class="col-span-2 hidden lg:block lg:col-span-5 text-left">
          <ul class="font-jost text-sm float-right">
            <li class="inline-block mr-5 xl:mr-10">
              <router-link to="/locations" class="hover:underline"
                >LOCATIONS</router-link
              >
            </li>
            <li class="inline-block mr-5 xl:mr-10">
              <router-link to="/pricing-help" class="hover:underline"
                >PRICING & HELP</router-link
              >
            </li>
            <li class="inline-block">
              <button
                class="bg-coral text-white px-8 uppercase py-5 tracking-widest"
              >
                Book Today
              </button>
            </li>
          </ul>

          <button class="lg:hidden" @click="toggle = !toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
