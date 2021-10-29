<template>
  <div>
    <div class="weekend-title">周末去哪玩儿</div>
    <div class="weekend-container" v-for="item of list" :key="item.id">
      <div class="content-wrapper">
        <div class="image-wrapper">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="detail-wrapper">
          <p class="title">{{ item.title }}</p>
          <p class="desc">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array,
  },
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