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
const iconList = [
  {
    id: 1,
    name: "机票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_570x10000.jpg",
  },
  {
    id: 2,
    name: "酒店",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_570x10000.jpg",
  },
  {
    id: 3,
    name: "火车票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_570x10000.jpg",
  },
  {
    id: 4,
    name: "汽车票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_570x10000.jpg",
  },
  {
    id: 5,
    name: "门票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_570x10000.jpg",
  },

  {
    id: 6,
    name: "机票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_570x10000.jpg",
  },
  {
    id: 7,
    name: "酒店",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_570x10000.jpg",
  },
  {
    id: 8,
    name: "火车票火车票火车票火车票火车票",
    imageUrl:
      "//gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_570x10000.jpg",
  },
];
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: iconList,
    };
  },
  computed: {
    pages: function () {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
