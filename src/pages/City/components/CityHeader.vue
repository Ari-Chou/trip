<template>
  <div>
    <div class="header">
      <div class="header-input">
        <img src="@/assets/search.png" alt="" />
        <input type="text" placeholder="城市｜地区｜国家" v-model="keywords" />
      </div>
      <router-link to="/">
        <div class="header-cancel">取消</div>
      </router-link>
    </div>
    <div class="search-content" ref="list" v-show="keywords">
      <ul>
        <li class="search-item" v-for="city in list" :key="city.id">
          {{ city.name }}
        </li>
        <li class="search-item" v-show="hasNoData">未找到搜索目的地</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "CityHeader",
  props: {
    cities: Object,
  },
  data() {
    return {
      keywords: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keywords() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keywords) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 200);
    },
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.list, { click: true });
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";

.header {
  height: 43px;
  padding: 0 10px;
  background: $bg-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-input {
    flex: 1;
    background: white;
    height: 70%;
    border-radius: 3px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
    }
    input {
      flex: 1;
      margin-left: 5px;
      color: #666;
    }
  }
  .header-cancel {
    font-size: weight;
    color: white;
    margin-left: 10px;
  }
}
.search-content {
  position: absolute;
  top: 43px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: white;
  overflow: hidden;
  .search-item {
    height: 20px;
    padding-left: 10px;
    line-height: 20px;
    background: white;
    border-bottom: 1px solid lightgray;
  }
}
</style>