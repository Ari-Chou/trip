<template>
  <div class="header">
    <div class="header-input">
      <img src="@/assets/search.png" alt="" />
      <input type="text" placeholder="城市｜地区｜国家" />
    </div>
    <router-link to="/">
      <div class="header-cancel">取消</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
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
</style>