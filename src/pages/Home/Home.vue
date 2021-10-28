<template>
  <div>
    <home-header></home-header>
    <home-swipper></home-swipper>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwipper from "./components/HomeSwipper.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipper,
  },
};
</script>

<style>
</style>