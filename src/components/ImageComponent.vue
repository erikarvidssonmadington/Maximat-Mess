<script>
import { ref } from "vue";
export default {
  name: "ImageComponent",
  setup() {
    const imgPositions = ref({});
    const loaded = ref(false);
    const showingSlideComponent = ref(1);

    return { imgPositions, loaded, showingSlideComponent };
  },
  mounted() {
    this.updatePosistion();
    this.loaded = true;
  },
  computed: {
    newSize1() {
      return window.innerWidth == 320 && window.innerHeight == 250
        ? "100%"
        : window.innerWidth == 980 && window.innerHeight == 300
        ? `${parseInt(this.size.split("%")[0]) * 1.3}%`
        : this.size;
    },
    newSize2() {
      return window.innerWidth == 320 && window.innerHeight == 250
        ? "100%"
        : window.innerWidth == 980 && window.innerHeight == 300
        ? `${parseInt(this.size2.split("%")[0]) * 1.3}%`
        : this.size2;
    },
    newSize3() {
      return window.innerWidth == 320 && window.innerHeight == 250
        ? "100%"
        : window.innerWidth == 980 && window.innerHeight == 300
        ? `${parseInt(this.size3.split("%")[0]) * 1.3}%`
        : this.size3;
    },
  },
  methods: {
    updatePosistion() {
      this.imgPositions = {
        "Top Left": {
          position: "topLeft",
          gridSize: {
            column: `${this["newSize" + this.showingSlideComponent]} 1fr 1fr`,
            row: `${this["newSize" + this.showingSlideComponent]}  1fr 1fr`,
          },
        },
        "Top Center": {
          position: `topCenter`,
          gridSize: {
            column: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
            row: `${this["newSize" + this.showingSlideComponent]} 1fr 1fr`,
          },
        },
        "Top Right": {
          position: `topRight`,
          gridSize: {
            column: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
            row: `${this["newSize" + this.showingSlideComponent]} 1fr 1fr`,
          },
        },
        "Center Left": {
          position: `centerLeft`,
          gridSize: {
            column: `${this["newSize" + this.showingSlideComponent]} 1fr 1fr`,
            row: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
          },
        },
        "Center Center": {
          position: `centerCenter`,
          gridSize: {
            column: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
            row: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
          },
        },
        "Center Right": {
          position: `centerRight`,
          gridSize: {
            column: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
            row: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
          },
        },
        "Bottom Left": {
          position: `bottomLeft`,
          gridSize: {
            column: `${this["newSize" + this.showingSlideComponent]} 1fr 1fr`,
            row: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
          },
        },
        "Bottom Center": {
          position: `bottomCenter`,
          gridSize: {
            column: `1fr ${this["newSize" + this.showingSlideComponent]} 1fr`,
            row: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
          },
        },
        "Bottom Right": {
          position: `bottomRight`,
          gridSize: {
            column: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
            row: `1fr 1fr ${this["newSize" + this.showingSlideComponent]}`,
          },
        },
      };
    },
    animateIn(el, time) {
      el.classList.remove("in");
      el.classList.add("out");
      setTimeout(() => {
        el.classList.remove("out");
        el.classList.add("in");
      }, time);
    },
  },
  props: {
    image: String,
    background: String,
    position: String,
    size: String,
    image2: String,
    background2: String,
    position2: String,
    size2: String,
    image3: String,
    background3: String,
    position3: String,
    size3: String,

    imageBefore: Boolean,
    imageBefore2: Boolean,
    imageBefore3: Boolean,
    showingSlide: Number,
    products: Number,
  },
  watch: {
    size() {
      this.updatePosistion();
    },
    size2() {
      this.updatePosistion();
    },
    size3() {
      this.updatePosistion();
    },
    showingSlide(newVal, oldVal) {
      this.animateIn(this.$refs.background, 500);
      this.animateIn(this.$refs.image, 900);
      setTimeout(() => {
        this.showingSlideComponent = newVal;
        this.updatePosistion();
      }, 500);
    },
  },
};
</script>

<template>
  <div v-if="loaded" :style="{}">
    <div
      class="background in"
      ref="background"
      :style="{
        background: `url(${
          this.showingSlideComponent == 1
            ? this.background
            : this['background' + this.showingSlideComponent]
        })`,
      }"
    ></div>
    <div
      class="container"
      :class="
        imgPositions[
          this.showingSlideComponent == 1
            ? this.position
            : this[`position${this.showingSlideComponent}`]
        ].position
      "
      :style="{
        'z-index':
          this.showingSlideComponent == 1
            ? this.imageBefore == true
              ? 10
              : 0
            : this[`imageBefore${this.showingSlideComponent}`] == true
            ? 10
            : 0,
        'grid-template-columns':
          imgPositions[
            this.showingSlideComponent == 1
              ? this.position
              : this[`position${this.showingSlideComponent}`]
          ].gridSize.column,
        'grid-template-rows':
          imgPositions[
            this.showingSlideComponent == 1
              ? this.position
              : this[`position${this.showingSlideComponent}`]
          ].gridSize.row,
      }"
    >
      <div
        class="grid"
        :class="
          imgPositions[
            this.showingSlideComponent == 1
              ? this.position
              : this[`position${this.showingSlideComponent}`]
          ].position
        "
      >
        <div
          ref="image"
          class="image in"
          :style="{
            background: `url(${
              this.showingSlideComponent == 1
                ? this.image
                : this['image' + this.showingSlideComponent]
            })`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: var(--img-container-padding);
  width: var(--img-container-width);
  height: var(--img-container-height);
  left: var(--img-container-left);
  display: grid;
  opacity: 1;
  position: relative;

  &.centerCenter {
    width: var(--img-container-width-center);
    .centerCenter {
      .image {
        // background-size: var(--img-img-size-center) !important;
        // background-size: contain !important;
      }
    }
  }
  &.bottomCenter {
    width: var(--img-container-width-center);
    .bottomCenter {
      .image {
        // background-size: var(--img-img-size-center) !important;
      }
    }
  }
  &.topCenter {
    .topCenter {
      .image {
        // background-size: var(--img-img-size-center) !important;
      }
    }
    width: var(--img-container-width-center);
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;

  &.in {
    animation: animateInBg 0.66s ease-in;
  }
  &.out {
    animation: animateOutBg 0.66s ease-in;
  }
}

.image {
  width: 100%;
  height: 100%;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: inherit !important;
  opacity: 0;
  &.in {
    animation: animateIn 0.66s ease-out forwards;
  }
  &.out {
    animation: animateOut 0.66s ease-out forwards;
  }
}

.__nordby {
  .image {
    background-size: var(--img-img-size) !important;
  }
}

.__svinesund {
  &.centerCenter {
    width: var(--img-container-width-center);
    .centerCenter {
      .image {
        // background-size: var(--img-img-size-center) !important;
        background-size: contain !important;
      }
    }
  }
}

@keyframes animateIn {
  0% {
    transform: translate(0, 15px);
    opacity: 0;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
@keyframes animateOut {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }

  100% {
    transform: translate(0, -15px);
    opacity: 0;
  }
}

@keyframes animateOutBg {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
@keyframes animateInBg {
  0% {
    transform: scale(1.2);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

p .grid {
  padding: var(--img-container-padding);
}

.grid.topLeft {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-position: top left !important;
}

.grid.topCenter {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-position: top center !important;
}

.grid.topRight {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background-position: top right !important;
}

.grid.centerLeft {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-position: center left !important;
}

.grid.centerCenter {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-position: center center !important;
}

.grid.centerRight {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  background-position: center right !important;
}

.grid.bottomLeft {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background-position: bottom left !important;
}

.grid.bottomCenter {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  background-position: bottom center !important;
}

.grid.bottomRight {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background-position: bottom right !important;
}
</style>
