<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imageUrl" alt="swipper-list" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwipper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: white;
}
.wrapper {
  height: 25vw;
  width: 100%;
  background: lightgrey;
  img {
    width: 100%;
  }
}
</style>