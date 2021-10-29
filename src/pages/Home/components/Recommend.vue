<template>
  <div class="total">
    <div class="title">热销推荐</div>
    <div class="wrapper">
      <div class="card" v-for="item of list" :key="item.id">
        <div class="card-image">
          <img
            src="//gw.alicdn.com/bao/uploaded/i4/2856437246/O1CN01janwqw23OiYkfnwZS_!!2856437246.jpg_790x10000Q75.jpg_.webp"
            alt=""
          />
        </div>
        <div class="detail-wrapper">
          <div>
            <div class="card-title">{{ item.title }}</div>
            <div class="card-desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="card-detail">
            <div>
              <span>{{ item.price }}</span>
              <span>{{ item.numberOfBuy }}</span>
            </div>
            <span class="more">...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";

.title {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 800;
  padding: 0 10px;
}
.wrapper {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .card {
    border-radius: 3px;
    border: 1px solid #f0f6fd;
    box-shadow: 0px 10px 40px rgba(222, 230, 237, 0.4);
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: auto;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    .card-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .detail-wrapper {
      padding: 10px 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .card-title {
        font-weight: 600;
        font-size: 24px;
        color: rgb(82, 155, 105);
      }
      .card-desc {
        color: rgb(51, 51, 51);
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
        @include multiple-line-ellipsis();
        margin-top: 5px;
      }
      .card-detail {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
          font-weight: 600;
        }
        span:nth-child(1) {
          font-size: 24px;
          color: red;
        }
        span:nth-child(2) {
          color: rgb(197, 196, 196);
        }
        .more {
          font-size: 24px;
          color: red !important;
        }
      }
    }
  }
}
</style>