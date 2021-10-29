<template>
  <div class="icons-wrapper">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="container">
          <div class="icon-wrapper" v-for="item in page" :key="item.id">
            <img :src="item.imageUrl" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: [],
  },
  computed: {
    pages: function () {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";
@import "@/global-styles/mixin.scss";

.icon-wrapper >>> .swiper-container {
  height: 100%;
}
.icons-wrapper {
  width: 100%;
  height: 50vw;

  .icon-wrapper {
    height: 25vw;
    width: 25vw;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
    p {
      margin-top: 5px;
      width: 100%;
      text-align: center;
      @include ellipsis();
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
