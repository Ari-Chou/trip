<template>
  <div>
    <router-link tag="div" to="/" v-show="showABS">
      <div class="header-abs">
        <img src="@/assets/arrow-left.png" alt="" />
      </div>
    </router-link>

    <div class="header-fixed" v-show="!showABS" :style="opacityStyle">
      <router-link to="/">
        <img src="@/assets/arrow-left.png" alt="" />
      </router-link>
      <div class="title">项目详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showABS: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 50) {
        let opacity = scrollTop / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity: opacity,
        };
        this.showABS = false;
      } else {
        this.showABS = true;
      }
      console.log(document.documentElement.scrollTop);
    },
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang='scss' scoped>
@import "@/global-styles/color.scss";
.header-abs {
  position: absolute;
  top: 20px;
  left: 10px;
  background: rgba(0, 0, 0, 0.356);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  img {
    width: 100%;
    transform: scale(0.7);
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $bg-color;
  height: 43px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  img {
    transform: scale(0.9);
  }
  .title {
    flex: 1;
    text-align: center;
    color: white;
    font-weight: 600;
  }
}
</style>