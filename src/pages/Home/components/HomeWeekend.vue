<template>
  <div>
    <div class="weekend-title">周末去哪玩儿</div>
    <div class="weekend-container">
      <div class="content-wrapper">
        <div class="image-wrapper">
          <img
            src="//dimg11.c-ctrip.com/images/hotel/1000/10/d185c983e00945e1b9037ce5fa7528e3_R_300_120.jpg"
            alt=""
          />
        </div>
        <div class="detail-wrapper">
          <p class="title">乌兰察布 | 跟团游</p>
          <p class="desc">
            乌兰察布乌兰哈达火山地质公园0购物纯玩1日游+宇航服拍摄
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
};
</script>

<style lang="scss" scoped>
.weekend-title {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 800;
  padding: 0 10px;
}
.weekend-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;

  .content-wrapper {
    border-bottom: 1px solid lightgray;
    .image-wrapper {
      width: 100%;
      height: 22vw;
      overflow: hidden;
      background: red;
      img {
        width: 100%;
      }
    }
    .detail-wrapper {
      padding: 10px 10px;

      .title {
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .desc {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
}
</style>