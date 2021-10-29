<template>
  <div>
    <city-header></city-header>
    <city-list
      v-bind:currentLocation="currentCity"
      :hotCities="hotCities"
      :cities="cities"
    ></city-list>
    <alphabet v-bind:cities="cities"></alphabet>
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
    };
  },
  methods: {
    getCityInfoSucc(res) {
      console.log(res.data);
      const cityInfo = res.data;
      if (cityInfo.ret && cityInfo.data) {
        this.currentCity = cityInfo.data.city;
        this.hotCities = cityInfo.data.hotCities;
        this.cities = cityInfo.data.cities;
      }
    },
  },
  mounted() {
    axios.get("/api/city.json").then(this.getCityInfoSucc);
  },
};
</script>

<style>
</style>