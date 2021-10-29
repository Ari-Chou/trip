<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swipperList" :key="item.id">
        <img :src="item.imageUrl" alt="swipper-list" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwipper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
      swipperList: [
        {
          id: 1,
          imageUrl:
            "https://dimg04.c-ctrip.com/images/0zg3b1200092vts6p023D.jpg",
        },
        {
          id: 2,
          imageUrl:
            "https://dimg04.c-ctrip.com/images/0zg6m1200092vzw0eCED1.jpg",
        },
      ],
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