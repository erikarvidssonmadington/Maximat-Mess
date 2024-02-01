<template>
  <div class="textContainer">
    <div :key="index" v-for="index in newPrdoNr">
      <div
        class="headerPrice"
        :style="{
          display:
            showingSlideComponent == index
              ? this.style == 'MaxiMat' || this.style == 'Svinesund'
                ? 'grid'
                : 'block'
              : 'none',
          background: this[`backgroundColor${index > 1 ? index : ''}`],
        }"
        v-if="
          (this.style == 'MaxiMat' && showingSlideComponent == index) ||
          (this.style == 'Svinesund' && showingSlideComponent == index)
        "
        :ref="index + 'container'"
      >
        <i></i>
        <div class="header">
          <div
            :ref="index + 'header'"
            v-html="
              index > 1
                ? this[`productNameCompute${index}`]
                : this.productNameCompute
            "
          ></div>
        </div>
        <div
          class="info"
          :style="{
            'font-family': this.fontFamily ? this.fontFamily : 'Futura',
            'font-weight': this.fontFamily == 'Futura' ? 500 : '',
          }"
        >
          <div
            :ref="index + 'info'"
            v-html="
              index > 1
                ? this[`productInfoFormated${index}`]
                : this.productInfoFormated
            "
          ></div>
        </div>
        <div class="price">
          <div
            :class="
              this[`priceOr${index > 1 ? index : ''}`].length == 0 &&
              this[`priceText${index > 1 ? index : ''}`].length == 0
                ? 'full'
                : ''
            "
          >
            <div
              :ref="index + 'priceKr'"
              :style="{
                color: this.priceColor,
              }"
              v-html="index > 1 ? this[`priceKr${index}`] : this.priceKr"
            ></div>
          </div>
          <div>
            <div
              :ref="index + 'priceOr'"
              :style="{
                color: this.priceColor,
              }"
              v-html="index > 1 ? this[`priceOr${index}`] : this.priceOr"
            ></div>
          </div>
          <div
            :class="
              this[`priceOr${index > 1 ? index : ''}`].length == 0 ? 'top' : ''
            "
          >
            <div
              :ref="index + 'priceText'"
              :style="{
                color: this.priceTextColor,
              }"
              v-html="index > 1 ? this[`priceText${index}`] : this.priceText"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="headerPrice-n"
        :class="index > 1 ? this[`position${index}`] : position"
        :style="{
          display:
            showingSlideComponent == index
              ? this.style == 'Nordby'
                ? 'block'
                : 'grid'
              : 'none',
          background: 1 != 1 ? `rgb(0 0 0 / 0%)` : '#000',
        }"
        v-if="this.style == 'Nordby' && showingSlideComponent == index"
        :ref="index + 'container'"
      >
        <i></i>
        <div class="header">
          <div
            :ref="index + 'header'"
            v-html="
              index > 1
                ? this[`productNameCompute${index}`]
                : this.productNameCompute
            "
          ></div>
        </div>
        <div class="info">
          <div
            :ref="index + 'info'"
            v-html="
              index > 1
                ? this[`productInfoFormated${index}`]
                : this.productInfoFormated
            "
          ></div>
        </div>
        <div
          class="price"
          :class="{
            oneNumber: this[`priceKr${index > 1 ? index : ''}`].length == 1,
            underText:
              this[`priceUnderTextComputed${index > 1 ? index : ''}`].length >
              0,
          }"
          ref="price"
        >
          <div
            :class="
              this[`priceOr${index > 1 ? index : ''}`].length == 0 &&
              this[`priceText${index > 1 ? index : ''}`].length == 0
                ? 'full'
                : ''
            "
          >
            <div
              :ref="index + 'priceKr'"
              :style="{
                color: this.priceColor,
              }"
              v-html="index > 1 ? this[`priceKr${index}`] : this.priceKr"
            ></div>
          </div>
          <div>
            <div
              :ref="index + 'priceOr'"
              :style="{
                color: this.priceColor,
              }"
              v-html="index > 1 ? this[`priceOr${index}`] : this.priceOr"
            ></div>
          </div>
          <div
            :class="
              this[`priceOr${index > 1 ? index : ''}`].length == 0 ? 'top' : ''
            "
          >
            <div
              :ref="index + 'priceText'"
              :style="{
                color: this.priceTextColor,
              }"
              v-html="index > 1 ? this[`priceText${index}`] : this.priceText"
            ></div>
          </div>
        </div>
        <div class="underPriceText">
          <div
            :ref="index + 'underPriceText'"
            :style="{
              color:
                index > 1
                  ? this[`priceUnderTextColor${index}`]
                  : this.priceUnderTextColor,
            }"
            v-html="
              index > 1
                ? this[`priceUnderTextComputed${index}`]
                : this.priceUnderTextComputed
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showingSlideComponent = ref(1);
    // const showingSlide = ref(1);
    // const changeSlide = ref(true);

    return {
      showingSlideComponent,
      // showingSlide,
      // changeSlide,
    };
  },
  props: {
    backgroundColor: String,
    priceColor: String,
    price: String,
    priceText: String,
    priceTextColor: String,
    priceUnderText: String,
    priceUnderTextSmall: String,
    priceUnderTextColor: String,
    productName: String,
    productNameSmall: String,
    productInfo: String,
    productInfoSmall: String,
    position: String,
    backgroundColor2: String,
    priceColor2: String,
    price2: String,
    priceText2: String,
    priceTextColor2: String,
    priceUnderText2: String,
    priceUnderText2Small: String,
    priceUnderTextColor2: String,
    productName2: String,
    productName2Small: String,
    productInfo2: String,
    productInfo2Small: String,
    position2: String,
    backgroundColor3: String,
    priceColor3: String,
    price3: String,
    priceText3: String,
    priceTextColor3: String,
    priceUnderText3: String,
    priceUnderText3Small: String,
    priceUnderTextColor3: String,
    productName3: String,
    productName3Small: String,
    productInfo3: String,
    productInfo3Small: String,
    position3: String,

    style: String,
    startAd: Boolean,
    showingSlide: Number,
    fontFamily: String,
    products: Number,
    size: Object,
  },
  computed: {
    productNameCompute() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.productNameSmall.length > 0
      ) {
        return this.productNameSmall;
      } else {
        return this.productName;
      }
    },
    productNameCompute2() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.productName2Small.length > 0
      ) {
        return this.productName2Small;
      } else {
        return this.productName2;
      }
    },
    productNameCompute3() {
      if (
        window.innerHeight <= 401 &&
        window.innerWidth <= 321 &&
        this.productName3Small > 0
      ) {
        return this.productName3Small;
      } else {
        return this.productName3;
      }
    },
    priceUnderTextComputed() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.priceUnderTextSmall.length > 0
      ) {
        return this.priceUnderTextSmall;
      } else {
        return this.priceUnderText;
      }
    },
    priceUnderTextComputed2() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.priceUnderText2Small.length > 0
      ) {
        return this.priceUnderText2Small;
      } else {
        return this.priceUnderText2;
      }
    },

    priceUnderTextComputed3() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.priceUnderText3Small > 0
      ) {
        return this.priceUnderText3Small;
      } else {
        return this.priceUnderText3;
      }
    },
    newPrdoNr() {
      return this.products == 1
        ? [1]
        : this.products == 2
        ? [1, 2]
        : this.products == 3
        ? [1, 2, 3]
        : [];
    },
    priceKr() {
      return this.price.split(".")[0] || "";
    },
    priceOr() {
      return this.price.split(".")[1] || "";
    },
    priceKr2() {
      return this.price2.split(".")[0] || "";
    },
    priceOr2() {
      return this.price2.split(".")[1] || "";
    },
    priceKr3() {
      return this.price3.split(".")[0] || "";
    },
    priceOr3() {
      return this.price3.split(".")[1] || "";
    },
    productInfoFormated() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.productInfoSmall.length > 0
      ) {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfoSmall):
            return (
              this.productInfoSmall.trim().split("/ SEK")[0] +
              "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfoSmall):
            return (
              this.productInfoSmall.trim().split("/ SEK")[0] +
              "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfoSmall):
            return (
              this.productInfoSmall.trim().split("/ SEK")[0] +
              "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfoSmall):
            return (
              this.productInfoSmall.trim().split("/ SEK")[0] +
              "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfoSmall.trim();
        }
      } else {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfo):
            return (
              this.productInfo.trim().split("/ SEK")[0] + "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfo):
            return (
              this.productInfo.trim().split("/ SEK")[0] + "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfo):
            return (
              this.productInfo.trim().split("/ SEK")[0] + "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfo):
            return (
              this.productInfo.trim().split("/ SEK")[0] + "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfo.trim();
        }
      }
    },
    productInfoFormated2() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.productInfo2Small.length > 0
      ) {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfo2Small):
            return (
              this.productInfo2Small.trim().split("/ SEK")[0] +
              "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfo2Small):
            return (
              this.productInfo2Small.trim().split("/ SEK")[0] +
              "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfo2Small):
            return (
              this.productInfo2Small.trim().split("/ SEK")[0] +
              "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfo2Small):
            return (
              this.productInfo2Small.trim().split("/ SEK")[0] +
              "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfo2.trim();
        }
      } else {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfo2):
            return (
              this.productInfo2.trim().split("/ SEK")[0] +
              "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfo2):
            return (
              this.productInfo2.trim().split("/ SEK")[0] + "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfo2):
            return (
              this.productInfo2.trim().split("/ SEK")[0] + "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfo2):
            return (
              this.productInfo2.trim().split("/ SEK")[0] +
              "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfo2.trim();
        }
      }
    },
    productInfoFormated3() {
      if (
        window.innerHeight <= 400 &&
        window.innerWidth <= 320 &&
        this.productInfo3Small.length > 0
      ) {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfo3Small):
            return (
              this.productInfo3Small.trim().split("/ SEK")[0] +
              "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfo3Small):
            return (
              this.productInfo3Small.trim().split("/ SEK")[0] +
              "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfo3Small):
            return (
              this.productInfo3Small.trim().split("/ SEK")[0] +
              "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfo3Small):
            return (
              this.productInfo3Small.trim().split("/ SEK")[0] +
              "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfo3.trim();
        }
      } else {
        switch (true) {
          case this.setInfoEndColor("/ SEK", this.productInfo3):
            return (
              this.productInfo3.trim().split("/ SEK")[0] +
              "<span> / SEK </span>"
            );
            break;
          case this.setInfoEndColor("/SEK", this.productInfo3):
            return (
              this.productInfo3.trim().split("/ SEK")[0] + "<span> /SEK </span>"
            );
            break;
          case this.setInfoEndColor("/sek", this.productInfo3):
            return (
              this.productInfo3.trim().split("/ SEK")[0] + "<span> /sek </span>"
            );
            break;
          case this.setInfoEndColor("/ sek", this.productInfo3):
            return (
              this.productInfo3.trim().split("/ SEK")[0] +
              "<span> / sek </span>"
            );
            break;

          default:
            return this.productInfo3.trim();
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.$refs["1container"]) {
          this.rezizeAllText(this.showingSlide);
          this.$refs["1container"][0]
            ? this.$refs["1container"][0].classList.add("animateIn")
            : "";
        }
      }, 200);
    });
  },
  methods: {
    setInfoEndColor(val, string) {
      return string.trim().endsWith(val);
    },
    isOverflown(
      { clientHeight, scrollHeight, clientWidth, scrollWidth },
      startVal
    ) {
      let overflow = {
        overflow:
          scrollHeight - startVal.height > clientHeight ||
          scrollWidth > clientWidth,
        type:
          scrollHeight > clientHeight
            ? "height"
            : scrollWidth > clientWidth
            ? "width"
            : "none",
      };

      return overflow;
    },
    resizeText({
      element,
      elements,
      minSize = window.innerWidth >= 400 ? 10 : 1,
      maxSize = 150,
      step = 0.2,
      unit = "px",
      change = this.style == "MaxiMat" || this.style == "Svinesund"
        ? 0.95
        : window.innerWidth >= 400
        ? 0.95
        : 0.9,
    }) {
      (elements || [element]).forEach((el) => {
        let i = minSize;
        let overflow = false;
        let overflowRes = false;

        if (el != undefined) {
          const parent = el.parentNode;
          if (el && el.parentNode) {
          } else {
            return;
          }
          const startVal = {
            height: parent.scrollHeight - parent.clientHeight,
            width: parent.scrollWidth - parent.clientWidth,
          };

          if (parent.className.includes("info")) {
            switch (`${window.innerWidth}x${window.innerHeight}`) {
              case "300x600":
                maxSize = 18;
                break;
              case "180x500":
                maxSize = 14;
                break;

              default:
                break;
            }
          }

          change = parent.parentNode.className.includes("price") ? 1 : change;
          change =
            this.style == "Nordby" &&
            parent.parentNode.className.includes("header")
              ? 0.95
              : change;

          while (!overflow && i < maxSize) {
            el.style.fontSize = `${i}${unit}`;

            overflow = this.isOverflown(parent, startVal).overflow;
            overflowRes = this.isOverflown(parent, startVal);
            if (!overflow) i += step;
          }

          if (change != 1) {
            this.style == "MaxiMat" || this.style == "Svinesund"
              ? el
                ? (el.style.fontSize = `${i - step}${unit}`)
                : ""
              : el
              ? (el.style.fontSize = `${i - step}${unit}`)
              : "";
          } else {
            el.style.fontSize = `${i}${unit}`;
          }
          setTimeout(() => {
            parent.style.opacity = 1;
            el.style.opacity = 1;
          }, 500);
        }
      });
    },
    rezizeAllText(slide) {
      // this.$nextTick(() => {
      this.$refs[`${slide}header`]
        ? this.resizeText({ element: this.$refs[`${slide}header`][0] })
        : "";
      this.$refs[`${slide}info`]
        ? this.resizeText({ element: this.$refs[`${slide}info`][0] })
        : "";
      this.$refs[`${slide}priceKr`]
        ? this.resizeText({
            element: this.$refs[`${slide}priceKr`][0],
            change: 1,
          })
        : "";
      this.$refs[`${slide}priceOr`]
        ? this.resizeText({
            element: this.$refs[`${slide}priceOr`][0],
            change: 1,
          })
        : "";
      this.$refs[`${slide}priceText`]
        ? this.resizeText({
            element: this.$refs[`${slide}priceText`][0],
            change: 1,
            maxSize: this.size.maxFontSizeUnder,
          })
        : "";

      if (this.$refs[`${slide}underPriceText`] != undefined) {
        this.resizeText({
          element: this.$refs[`${slide}underPriceText`][0],
          change: 1,
        });
      }
      if (this.$refs.price != undefined) {
        this.priceOr.split("").length == 1
          ? this.$refs.price[0].classList.add("one")
          : this.$refs.price[0].classList.remove("one");
      }
      // });
    },
  },
  watch: {
    productName(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    productInfo(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceKr(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceOr(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceText(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    productName2(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    productInfo2(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceKr2(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceOr2(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceText2(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    productName3(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    productInfo3(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceKr3(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceOr3(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    priceText3(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    fontFamily(newVal, oldVal) {
      this.rezizeAllText(this.showingSlide);
    },
    style(newVal, oldVal) {
      this.$nextTick(() => {
        this.rezizeAllText(this.showingSlide);
      });
    },
    showingSlide(newVal, oldVal) {
      this.$refs[this.showingSlideComponent + "container"][0].classList.remove(
        "animateIn"
      );
      this.$refs[this.showingSlideComponent + "container"][0].classList.add(
        "animateOut"
      );
      setTimeout(() => {
        this.showingSlideComponent = newVal;
        // this.setTimeout(() => {
        this.$nextTick(() => {
          this.rezizeAllText(this.showingSlide);
          this.$refs[
            this.showingSlideComponent + "container"
          ][0].classList.remove("animateOut");
          this.$refs[newVal + "container"]
            ? this.$refs[newVal + "container"][0].classList.add("animateIn")
            : "";
        });
        // }, 30);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.textContainer {
  z-index: var(--text-z-index);
}

.headerPrice {
  height: 100%;
  position: var(--info-position);
  bottom: var(--info-bottom);
  height: var(--info-height);
  width: var(--info-width);
  // font-family: var(--text-font);
  right: var(--info-right);
  display: grid;
  grid-template-columns: var(--info-bottom-grid-columns);
  grid-template-rows: var(--info-bottom-grid-rows);
  grid-gap: var(--info-bottom-grid-gap);
  // padding: var(--headerPrice-padding);

  & > * {
    opacity: 0;
  }

  &.animateIn > * {
    opacity: 1;
    animation: animateIn 0.99s ease-out;
  }

  &.animateOut > * {
    animation: animateOut 0.99s ease-out;
  }
}

.__nordby {
  .headerPrice-n {
    position: absolute;
    // left: 5vh;
    top: var(--info-n-top);
    left: var(--info-n-left);
    width: var(--info-n-width);
    height: var(--info-n-height);
    background: url("https://delivered-by-madington.com/mess/client-content/uploads/0ZwNUnmPbPosvsUNnEyR/media/0199d911-f782-4a1f-a338-ceee5932de3e.png") !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    --p: 10px;
    /* padding */
    opacity: 0;

    &.Bottom {
      top: var(--info-n-top-bottom);
    }
    &.Top {
      top: var(--info-n-top-top);
    }
    &.Left {
      left: var(--info-n-left-left);
    }
    &.Right {
      left: var(--info-n-left-right);
    }

    &.center {
      top: var(--info-n-top-center);
      left: var(--info-n-left-center);
    }

    &.animateIn {
      animation: animateIn 0.66s ease-out forwards;
    }

    &.animateOut {
      animation: animateOut 0.66s ease-out forwards;
    }

    .header {
      white-space: pre-line;
      line-height: 1;
      width: 75%;
      left: 50%;
      transform: translate(-50%, 0px);
      margin: var(--info-header-margin);
      height: var(--info-header-height);
      // width: var(--info-header-width);
      margin-left: var(--info-header-margin-left);
    }

    .header > div {
      font-weight: 700;
      text-align: center;
      top: 0;
      position: absolute;
      width: 99%;
      justify-content: center;
      align-items: center;
      width: 99%;
      margin: 0 0.5%;
      display: flex;
    }

    .price {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      line-height: 1;
      font-weight: 700;
      text-align: center;
      height: var(--info-price-height);
      justify-content: center;
      letter-spacing: -0.09em;

      &.underText {
        @media (min-width: 318px) and (max-width: 322px) and (min-height: 398px) and (max-height: 402px) {
          height: var(--info-price-height-under);
        }
      }

      &.oneNumber {
        margin-left: -14%;
      }

      @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
          margin-bottom: 2%;
          justify-content: start;
        }
      }

      div {
        align-items: baseline;
        display: grid;
        // opacity: 0;

        &:nth-of-type(2) {
          margin-top: var(--info-price-ore-margin);
        }

        &:nth-of-type(3) {
          align-items: baseline;
        }
      }

      .full {
        grid-column: 1/3;

        div:nth-of-type(1) {
          margin-left: inherit;
        }
      }

      .top {
        grid-row: 1/2;
        margin-top: var(--info-price-ore-margin);
      }
    }

    .underPriceText {
      // position: relative;
      position: absolute;
      bottom: 12%;
      left: 50%;
      transform: translate(-50%, 0px);
      font-size: 1px;
      height: var(--info-price-underPrice-height);
      display: block;
      // width: 45%;
      width: var(--info-price-underPrice-width);
      margin: -7% auto auto auto;
      text-align: center;
      font-weight: 700;

      div {
        // opacity: 0;
        display: block;
        position: absolute;
        top: 0;
        text-align: center;
        width: 100%;
        letter-spacing: -0.6px;
      }
      @media (min-width: 318px) and (max-width: 322px) and (min-height: 398px) and (max-height: 402px) {
        bottom: 9.5%;
      }
    }
  }

  @keyframes animateIn {
    0% {
      transform: translate(0, 5%);
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
      transform: translate(0, -5%);
      opacity: 0;
    }
  }

  .headerPrice-n > * {
    font-family: Futura;
  }

  .headerPrice-n i,
  .headerPrice-n::before {
    content: "";
    float: left;
    height: 100%;
    width: 50%;
    shape-outside: radial-gradient(
      farthest-side at right,
      transparent calc(100% - var(--p)),
      #fff 0
    );
  }

  .headerPrice-n i {
    float: right;
    shape-outside: radial-gradient(
      farthest-side at left,
      transparent calc(100% - var(--p)),
      #fff 0
    );
  }

  .headerPrice-n > .info {
    // opacity: 0;
    font-weight: 700;
    display: block;
    text-align: center;
    height: var(--info-info-height);
    line-height: 1.1;
    font-size: 1px;
    margin-top: -1.5%;

    span {
      color: rgb(200, 16, 46);
      white-space: nowrap;
      // display: block;
      // position: relative;
    }
  }
}

.price {
  display: grid;
  //   grid-template-columns: max(80px) 20px;
  grid-template-columns: var(--info-price-grid-template-columns);
  grid-template-rows: var(--info-price-grid-template-rows);

  &.one {
    grid-template-columns: var(--info-price-grid-template-columns-one);
  }

  div {
    white-space: nowrap;
    // overflow: hidden;
    position: relative;

    div {
      display: block;
    }

    &:nth-of-type(1) {
      div {
        margin-left: auto;
      }
    }

    &:nth-of-type(2) {
      // margin-top: 32%;
      margin-top: var(--info-price-ore-margin);

      div {
        // margin-left: auto;
      }
    }

    &:nth-of-type(3) {
      // margin-top: -20%;
      margin-top: -9%;
      text-align: left;

      div {
        // margin-left: auto;
      }
    }
  }

  & > div:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    // justify-content: end;
    // max-height: 50px !important;
  }

  & > div:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    // align-items: bottom !important;
    margin-left: 0;
    text-align: left;
    // align-items: end !important;
    // height: 20px !important;
  }

  & > div:nth-of-type(3) {
    // align-items: baseline !important;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    //   height: 20px !important;
  }

  .full {
    grid-column: 1/3 !important;

    div:nth-of-type(1) {
      margin-left: inherit;
    }
  }

  .top {
    margin-top: var(--info-price-ore-margin);
    grid-row: 1/2;
  }
}

.headerPrice > * {
  color: #fff;
  //   width: 100%;
  //   height: 100%;
}

.headerPrice > .bottomText {
  display: grid;
  /* grid-template-columns: var(--info-bottom-grid-columns);
  grid-template-rows: var(--info-bottom-height); */
  grid-gap: 10px;
  height: var(--info-bottom-height);
}

.header {
  position: relative;
  height: var(--info-header-height);
  width: 100%;
  grid-column: var(--info-header-columns);
  grid-row: var(--info-header-rows);
  // white-space: nowrap;
  margin-top: auto;
  // opacity: 0;
}

.header > div {
  // transition: opacity 0.3s ease-in-out;
  //   opacity: 0;
  position: relative;
  align-items: center;
  display: flex;
  /* margin: 10px auto auto 10px; */
  margin: var(--info-margin);
  height: 100%;
  // width: calc(100% - 5vw);
  width: var(--info-margin-width);
}

.headerPrice > .info {
  opacity: 0;
  position: relative;
  overflow: hidden;
  color: #fff;
  grid-column: var(--info-info-columns);
  grid-row: var(--info-info-rows);
  margin: var(--info-margin);
  height: var(--info-info-height);
  line-height: var(--info-info-line-height);
  font-size: 1px;
}

.headerPrice > .info > div {
  // transition: opacity 0.3s ease-in-out;
  //   opacity: 0;
  font-size: 1px;
  position: relative;
  // display: flex;
  align-items: center;
  /* margin: 0 0 0 10px; */
  /* width: fit-content; */
  width: calc(100% - 1vw);
  height: 100%;

  span {
    color: yellow;
    white-space: nowrap;
    // display: block;
    // position: relative;
  }
}

.__svinesund {
  .headerPrice > .price {
    margin-top: var(--info-price-margin);
  }
}

.headerPrice > .price {
  font-family: Futura;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.09em;

  /* margin: var(--info-price-margins); */
  grid-column: var(--info-price-columns);
  grid-row: var(--info-price-rows);
  // align-self: end;
  height: var(--info-price-height);
  margin-top: var(--info-price-marginTop);
  // margin-top: auto;

  .top {
    margin-top: var(--info-price-ore-margin);
    grid-row: 1/2;

    align-items: baseline;

    background: none;
  }
}

.headerPrice > .price > div {
  position: relative;
  display: flex;
  align-items: center;
  // padding-right: 10px;
  padding-right: 3%;
  align-items: center;
  /* width: fit-content; */
  // max-width: 90%;
  height: 100%;

  &:nth-of-type(3) {
    margin-top: 10px;
    align-items: baseline;
  }
}
</style>