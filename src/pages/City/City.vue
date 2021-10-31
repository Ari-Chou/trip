<template>
  <div>
    <city-header v-bind:cities="cities"></city-header>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    ></city-list>
    <alphabet
      v-bind:cities="cities"
      v-on:change="handleAlphabetClick"
    ></alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/CityHeader.vue";
import CityList from "./components/CityList.vue";
import Alphabet from "./components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CityList,
    Alphabet,
  },
  data() {
    return {
      currentCity: "",
      hotCities: [],
      cities: {},
      letter: "",
    };
  },
  methods: {
    getCityInfoSucc(res) {
      console.log(res.data);
      const cityInfo = res.data;
      if (cityInfo.ret && cityInfo.data) {
        this.hotCities = cityInfo.data.hotCities;
        this.cities = cityInfo.data.cities;
      }
    },
    handleAlphabetClick(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    axios.get("/api/city.json").then(this.getCityInfoSucc);
  },
  activated() {
    console.log("actived");
  },
};
</script>

<style>
</style>