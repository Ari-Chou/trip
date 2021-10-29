<template>
  <div>
    <home-header></home-header>
    <home-swipper></home-swipper>
    <home-icons></home-icons>
    <recommend></recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwipper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import Recommend from "./components/Recommend.vue";
import HomeWeekend from "./components/HomeWeekend.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipper,
    HomeIcons,
    Recommend,
    HomeWeekend,
  },
};
</script lang="scss" scoped>




<style>
</style>