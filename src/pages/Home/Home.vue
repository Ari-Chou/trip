<template>
  <div>
    <home-header v-bind:city="city"></home-header>
    <home-swipper v-bind:list="swiperList"></home-swipper>
    <home-icons v-bind:list="iconList"></home-icons>
    <recommend v-bind:list="recommendList"></recommend>
    <home-weekend v-bind:list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwipper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import Recommend from "./components/Recommend.vue";
import HomeWeekend from "./components/HomeWeekend.vue";
export default {
  name: "Home",
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  components: {
    HomeHeader,
    HomeSwipper,
    HomeIcons,
    Recommend,
    HomeWeekend,
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      const homeIfon = res.data;
      if (homeIfon.ret && homeIfon.data) {
        this.city = homeIfon.data.city;
        this.swiperList = homeIfon.data.swiperList;
        this.iconList = homeIfon.data.iconList;
        this.recommendList = homeIfon.data.recommendList;
        this.weekendList = homeIfon.data.weekendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script lang="scss" scoped>




<style>
</style>