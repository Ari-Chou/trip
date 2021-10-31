<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">我的位置</div>
        <div class="location-wrapper">
          <div class="location">{{ this.currentCity }}</div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <ul class="hot-list">
          <li
            v-for="hotCity in hotCities"
            :key="hotCity.id"
            @click="handleHotCityClick(hotCity.name)"
          >
            {{ hotCity.name }}
          </li>
        </ul>
      </div>
      <div class="area" v-for="(city, key) in cities" :key="key" :ref="key">
        <div class="title">{{ key }}</div>
        <ul class="all-list">
          <li
            v-for="inner in city"
            :key="inner.id"
            @click="handleHotCityClick(inner.name)"
          >
            {{ inner.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },
  methods: {
    handleHotCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations({
      changeCity: "changeCity", //将vuex中的changeCity映射到组件计changeCity方法中
    }),
  },
  computed: {
    ...mapState({
      currentCity: "city", //将vuex中的city映射到组件计算属性currentCity中
    }),
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
        console.log(element);
      }
    },
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, { click: true });
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";
.city-list {
  position: absolute;
  top: 43px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .area {
    .title {
      background: rgba(102, 102, 102, 0.164);
      border-bottom: 1px solid white;
      height: 20px;
      line-height: 20px;
      padding-left: 10px;
    }
    .location-wrapper {
      padding: 10px 0;
    }
    .location {
      height: 20px;
      width: 60px;
      border: 1px solid $bg-color;
      padding: 5px 10px;
      line-height: 20px;
      text-align: center;
      margin-left: 20px;
    }
    .hot-list {
      padding: 5px 10px;
      display: flex;
      flex-wrap: wrap;
      li {
        height: 20px;
        border: 1px solid lightgray;
        text-align: center;
        line-height: 20px;
        margin: 10px 20px;
        padding: 5px 10px;
      }
    }
    .all-list {
      li {
        height: 20px;
        line-height: 20px;
        padding: 2px 10px;
        border-bottom: 1px solid lightgray;
      }
    }
  }
}
</style>