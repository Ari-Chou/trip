<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <img src="@/assets/home.svg" alt="" />
      </div>
    </router-link>

    <div class="header-input">
      <img src="@/assets/search.png" alt="" />
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{ this.city }}</span>
        <img src="@/assets/arrow-down.png" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeaer",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style lang="scss" scpoed>
@import "@/global-styles/color.scss";

.header {
  height: 43px;
  background: $bg-color;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    width: 32px;
    padding: 0 5px;
    img {
      transform: scale(0.8);
      font-weight: 800;
    }
  }

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
  .header-right {
    min-width: 60px;
    line-height: 43px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    img {
      transform: scale(0.8);
    }
    span {
      margin-right: -2px;
      margin-top: 1px;
    }
  }
}
</style>