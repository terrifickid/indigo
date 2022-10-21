<template>
  <AppHeader />
  <div class="pt-20">
    <router-view />
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
<style lang="scss"></style>
