<template>
  <div>
    <home-header></home-header>
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
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwipper,
    HomeIcons,
    Recommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "",
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      const homeIfon = res.data;
      if (homeIfon.ret && homeIfon.data) {
        this.swiperList = homeIfon.data.swiperList;
        this.iconList = homeIfon.data.iconList;
        this.recommendList = homeIfon.data.recommendList;
        this.weekendList = homeIfon.data.weekendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  },
};
</script lang="scss" scoped>




<style>
</style>