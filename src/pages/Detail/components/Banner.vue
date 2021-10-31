<template>
  <div>
    <div class="banner">
      <div class="container" @click="handleBannerClick">
        <img
          src="//img.alicdn.com/bao/uploaded/i1/724059099/O1CN01ImsyyE2H5OVz3FQgx_!!724059099.jpg_640x640q30.jpg_.webp"
          alt=""
        />
      </div>
      <div class="detail">
        <div class="top">
          <div class="brand">旅行就上Trip</div>
          <div class="number">200人购买</div>
        </div>
        <div class="main">
          <div class="title">上海门票</div>
          <div class="desc">
            三亚蜈支洲岛珊瑚酒店1-2晚亲子套餐含餐+往返船只+VIP登岛
          </div>
        </div>
        <div class="bottom">
          <div></div>
          <div class="price">¥200</div>
        </div>
      </div>
    </div>
    <gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></gallary>
  </div>
</template>

<script>
import Gallary from "@/common/Gallary/Gallary.vue";
export default {
  name: "Banner",
  components: {
    Gallary,
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "//img.alicdn.com/bao/uploaded/i1/724059099/O1CN01ImsyyE2H5OVz3FQgx_!!724059099.jpg_640x640q30.jpg_.webp",
        "//img.alicdn.com/bao/uploaded/i1/724059099/O1CN01ImsyyE2H5OVz3FQgx_!!724059099.jpg_640x640q30.jpg_.webp",
      ],
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.banner {
  .container {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background: red;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    background: #ffffff;
    border: 1px solid #f0f6fd;
    box-shadow: 0px 10px 40px rgba(222, 230, 237, 0.4);
    border-radius: 10px;
    margin: 5px 10px;
    padding: 10px;
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .brand {
        font-weight: 600;
        font-size: 15px;
        color: rgb(165, 165, 165);
      }
      .number {
        font-weight: 600;
        font-size: 15px;
        color: rgb(165, 165, 165);
      }
    }
    .main {
      margin-bottom: 10px;
      .title {
        color: green;
        font-weight: 800;
        font-size: 24px;
      }
      .desc {
        color: rgb(51, 51, 51);
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
        @include multiple-line-ellipsis();
        margin-top: 5px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 24px;
        font-weight: 800;
        color: red;
      }
    }
  }
}
</style>