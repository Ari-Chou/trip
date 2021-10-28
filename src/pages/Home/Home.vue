<template>
  <div>
    <home-header></home-header>
    <home-swipper></home-swipper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwipper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipper,
    HomeIcons,
  },
};
</script>

<style>
</style>