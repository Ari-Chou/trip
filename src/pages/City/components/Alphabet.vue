<template>
  <ul>
    <li v-for="(city, key) in cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/color.scss";
ul {
  position: fixed;
  top: 43px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    color: $bg-color;
    margin-bottom: 5px;
    font-weight: 600;
  }
}
</style>