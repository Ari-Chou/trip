<template>
  <div class="container" @click="handleGallaryClose">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" alt="swipper-list" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    handleGallaryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  .wrapper {
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    img {
      width: 100%;
    }
    .swiper-pagination {
      bottom: -50px;
      color: white;
    }
  }
}
</style>