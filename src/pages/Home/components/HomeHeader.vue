<template>
  <div class="header">
    <div class="header-left">
      <img src="@/assets/arrow-left.png" alt="" />
    </div>
    <div class="header-input">
      <img src="@/assets/search.png" alt="" />
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">
      <span>城市</span>
      <img src="@/assets/arrow-down.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeaer",
  data() {
    return {
      search: "",
    };
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
    }
  }
  .header-right {
    width: 60px;
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