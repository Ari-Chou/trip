<template>
  <ul>
    <li
      v-for="letter in letters"
      :key="letter"
      :ref="letter"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ letter }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (const letter in this.cities) {
        letters.push(letter);
      }
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    //the click
    handleClick(e) {
      this.$emit("change", e.target.innerText);
      console.log(e.target.innerText);
    },
    //the touch and move
    handleTouchStart() {
      this.touchStatus = true;
    },

    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 43;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
          console.log(e.touches);
          console.log(index);
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
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