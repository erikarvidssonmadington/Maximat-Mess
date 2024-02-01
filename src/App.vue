<script>
import { ref, reactive, watch, render } from "vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import ImageComponent from "./components/ImageComponent.vue";
import PriceBoxComponent from "./components/PriceBoxComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  setup() {
    const startAd = ref(false);
    const showingSlide = ref(1);
    const loopedTimes = ref(1);
    const interval = ref(undefined);
    const waitingForProps = ref(false);
    const trackingValues = ref({
      po: "JESBY-",
      c: "jesby-",
      firedImpression: false,
    });
    const size = ref({
      "180x500": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "300x600": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "320x250": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "320x400": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "580x500": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "580x400": {
        direction: "row",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "980x300": {
        direction: "column",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
      "980x600": {
        direction: "column",
        headerPosition: "top",
        maxFontSizeUnder: 20,
      },
    });
    const styleObject = {};
    const rerender = ref(0);
    const styleTimeout = "";
    const windowSize = ref({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    const bg = {
      "180x500":
        "https://delivered-by-madington.com/mess/client-content/uploads/9vVqkNRY212PyQz7XYXQ/media/9d378f44-ed6e-4e8a-9cb7-dd3698f79d8e.jpg",
      "300x600":
        "https://delivered-by-madington.com/mess/client-content/uploads/9vVqkNRY212PyQz7XYXQ/media/7955a511-90ad-4df2-b994-0ce574016ec4.jpg",
      "320x400":
        "https://delivered-by-madington.com/mess/client-content/uploads/9vVqkNRY212PyQz7XYXQ/media/444c2103-f9b5-4fe4-9f1e-b96d27287404.jpg",
      "580x500":
        "https://delivered-by-madington.com/mess/client-content/uploads/9vVqkNRY212PyQz7XYXQ/media/a6524116-5690-4dbe-811f-1d128fc7f5d0.jpg",
      "980x300":
        "https://delivered-by-madington.com/mess/client-content/uploads/9vVqkNRY212PyQz7XYXQ/media/330bd910-e084-4880-af34-0ffac57dc823.jpg",
    };

    const data = reactive({
      style: "",
      exitUrl: "",
      products: 1,

      backgroundColor: "#000",
      price: "",
      priceColor: "#c8102e",
      priceText: "",
      priceTextColor: "#000",
      priceUnderText: "Undertext",
      priceUnderTextSmall: "Undertext",
      priceUnderTextColor: "#000",
      productAName: "",
      productANameSmall: "",
      productInfo: "",
      productInfoSmall: "",
      image: "",
      backgroundImage: "",
      imagePosition: "Top Center",
      imageSize: "70%",
      imageBefore: true,

      "slide2-backgroundColor": "#000",
      "slide2-price": "",
      "slide2-priceColor": "#c8102e",
      "slide2-priceText": "",
      "slide2-priceTextColor": "#000",
      "slide2-priceUnderText": "Undertext",
      "slide2-priceUnderTextSmall": "Undertext",
      "slide2-priceUnderTextColor": "#000",
      "slide2-productAName": "",
      "slide2-productANameSmall": "",
      "slide2-productInfo": "",
      "slide2-productInfoSmall": "",
      "slide2-image": "",
      "slide2-backgroundImage": "",
      "slide2-imagePosition": "Top Center",
      "slide2-imageSize": "70%",
      "slide2-imageBefore": false,

      "slide3-backgroundColor": "#000",
      "slide3-price": "",
      "slide3-priceColor": "#c8102e",
      "slide3-priceText": "",
      "slide3-priceTextColor": "#000",
      "slide3-priceUnderText": "Undertext",
      "slide3-priceUnderTextSmall": "Undertext",
      "slide3-priceUnderTextColor": "#000",
      "slide3-productAName": "",
      "slide3-productANameSmall": "",
      "slide3-productInfo": "",
      "slide3-productInfoSmall": "",
      "slide3-image": "",
      "slide3-backgroundImage": "",
      "slide3-imagePosition": "Top Center",
      "slide3-imageSize": "70%",
      "slide3-imageBefore": false,

      fontFamily: "AmericanTypewriter",
      openingText: "",
      openingTextBg: "#000000FF",
      openingTextColor: "#FFF",
      shop: "",
      shopBg: "#FFFFFFFF",
      logo: "",
      logoBg: "#FFFFFFFF",
    });

    watch(data, (d) => {
      rerender.value++;
      showingSlide.value = 1;
      loopedTimes.value = 1;
      // startAd.value = false;
      clearInterval(interval.value);
      interval.value = false;

      // if (d.style == "Nordby") {
      //   document.querySelector("body").classList.add("__nordby");
      //   document.querySelector("body").classList.remove("__svinesund");
      // } else if (d.style == "Svinesund") {
      //   document.querySelector("body").classList.add("__svinesund");
      //   document.querySelector("body").classList.remove("__nordby");
      // } else if (d.style == "MaxiMat") {
      //   document.querySelector("body").classList.remove("__svinesund");
      //   document.querySelector("body").classList.remove("__nordby");
      //   document.querySelector("body").classList.add("__maximat");
      // }
    });

    return {
      startAd,
      showingSlide,
      loopedTimes,
      interval,
      trackingValues,
      waitingForProps,
      size,
      styleObject,
      rerender,
      styleTimeout,
      windowSize,
      data,
      bg,
    };
  },
  components: {
    LoaderComponent,
    ImageComponent,
    PriceBoxComponent,
    FooterComponent,
  },
  mounted() {
    this.showingSlide = 1;
    this.loopedTimes = 1;
    clearInterval(this.interval);
    this.interval = false;
    this.rerender = 0;

    // if (this.data.style == "Nordby") {
    //   document.querySelector("body").classList.add("__nordby");
    //   document.querySelector("body").classList.remove("__svinesund");
    // } else if (this.data.style == "Svinesund") {
    //   document.querySelector("body").classList.add("__svinesund");
    //   document.querySelector("body").classList.remove("__nordby");
    // } else if (this.data.style == "MaxiMat") {
    //   document.querySelector("body").classList.remove("__svinesund");
    //   document.querySelector("body").classList.remove("__nordby");
    //   document.querySelector("body").classList.add("__maximat");
    // }

    window.addEventListener("message", (e) => {
      try {
        if (e.data.messMessage == "MESS_PROP_UPDATE") {
          if (
            window.name == "mess-style" ||
            (window.name == "mess-dev" && this.waitingForProps)
          ) {
            this.data[e.data.prop] = e.data.propValue;
            this.startAd = false
            this.rerender++;
            if (!this.startAd) {
              setTimeout(() => {
                this.startAd = true;
                this.animateProducts();
                clearTimeout(this.styleTimeout);
                this.styleTimeout = setTimeout(() => { }, 100);
              }, 500);
            }
          }
        }
      } catch (e) {
        // Eh...
      }
    });

    if (typeof window.dynamicContent == "undefined") {
      window.dynamicContent = {};
    }

    if (window.name == "props-handler") {
      new MESSenger({
        data: Object.assign({}, this.data),
      });
    } else if (window.name == "mess-style" || window.name == "mess-dev") {
      this.waitingForProps = true;
      window.top.postMessage(
        {
          messMessage: "MESS_CLIENT_HERE",
          windowName: window.name,
        },
        "*"
      );
      if (!this.startAd) {
        setTimeout(() => {
          this.startAd = true;
          clearTimeout(this.styleTimeout);
          this.styleTimeout = setTimeout(() => {
            // this.rerender++;
            this.animateProducts();
          }, 100);
        }, 500);
      }
    } else {
      this.data = this.transformData(
        window.dynamicContent,
        window.dynamicContent.size
      );

      if (!this.startAd) {
        setTimeout(() => {
          this.startAd = true;
          clearTimeout(this.styleTimeout);
          this.styleTimeout = setTimeout(() => {
            // this.rerender++;
            this.animateProducts();
          }, 100);
        }, 500);
      }
    }
    if (!this.trackingValues.firedImpression) {
      this.firePixel("impression");
      this.trackingValues.firedImpression = true;
    }
  },
  methods: {
    firePixel(ev) {
      if (window.name == "mess-dev") {
        return;
      } else {
        let newC = `${this.trackingValues.c + this.data.style}-${window.dynamicContent.uniqueId || "DEV"
          }-${window.dynamicContent.size}`.toLowerCase();

        let newPo =
          `${this.trackingValues.po}v1-${this.data.style}`.toUpperCase();

        let pixel = document.createElement("img");
        pixel.classList.add("pixel");
        pixel.src = `https://track.streamedby.com/?c=${newC}-${this.data.style
          }&po=${newPo}&count=${ev}&ord=${Date.now()}`;
        pixel.setAttribute("alt", "");
        pixel.height = 1;
        pixel.width = 1;
        this.$nextTick(() => {
          this.$refs.containerBody
            ? this.$refs.containerBody.appendChild(pixel)
            : "";
        });
      }
    },
    click() {
      this.firePixel("click");
      let exit = "";

      exit = window.location.search.includes("clickTag=")
        ? window.location.search.split("clickTag=")[1].split("&")[0]
        : "";

      if (exit.length == 0 && window.dynamicContent && window.dynamicContent.clickTag != undefined) {
        exit = decodeURI(window.dynamicContent.clickTag);
      }
      exit += this.data.exitUrl;

      window.open(decodeURIComponent(exit));
    },
    transformData(data, size) {
      let newObject = data;
      Object.entries(newObject).forEach((value) => {
        if (typeof value[1] == "object") {
          newObject[value[0]] = value[1][`__${size}__`];
        } else {
          return;
        }
      });
      return newObject;
    },
    animateProducts(slides) {
      if (this.data.products > 1) {
        this.startTimer(3);
      }
    },
    startTimer(duration, display) {
      var start = Date.now(),
        diff,
        minutes,
        seconds;

      let timer = () => {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = diff % 60 | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (diff <= 0) {
          if (this.loopedTimes >= (this.data.products == 2 ? 3 * this.data.products : 2 * this.data.products)) {
            clearInterval(this.interval);
            this.interval = "";
          }
          this.loopedTimes++;
          start = Date.now() + 1000;
          this.changeSlider();
        }
      };
      timer();
      if (!this.interval) {
        this.interval = setInterval(timer, 100);
      }
    },
    changeSlider() {
      setTimeout(() => {
        this.showingSlide =
          this.showingSlide < this.data.products ? this.showingSlide + 1 : 1;
      }, 600);
    },
  },
  watch: {
    // data(newVal, oldVal) {
    //   this.showingSlide = 1;
    //   this.rerender++;
    //   clearInterval(this.interval);
    //   this.interval = "";
    // },
  },
};
</script>
<template>
  <div :class="[
    data.style == 'Nordby' ? '__nordby' : '',
    data.style == 'Svinesund' ? '__svinesund' : '',
    data.style == 'MaxiMat' ? '__maximat' : '',
  ]" class="appContainer" :key="rerender" @click="() => click()" v-if="startAd == true" :style="{
  display:
    size[`${windowSize.innerWidth}x${windowSize.innerHeight}`].direction ==
      'column'
      ? 'grid'
      : 'block',
}">
    <div class="top" :style="{
      background: 1 > 0 ? `rgb(0 0 0 / 0%)` : '#000',
    }"></div>
    <ImageComponent class="imgContainer" :style="{
      backgroundImage: data.backgroundImage,
    }" :products="Number(data.products)" :showingSlide="showingSlide" :background="data.backgroundImage"
      :image="data.image" :position="data.imagePosition" :size="data.imageSize" :imageBefore="data.imageBefore"
      :background2="data['slide2-backgroundImage']" :image2="data['slide2-image']"
      :position2="data['slide2-imagePosition']" :size2="data['slide2-imageSize']"
      :imageBefore2="data['slide2-imageBefore']" :background3="data['slide3-backgroundImage']"
      :image3="data['slide3-image']" :position3="data['slide3-imagePosition']" :size3="data['slide3-imageSize']"
      :imageBefore3="data['slide3-imageBefore']" />

    <PriceBoxComponent :style="data.style" :startAd="startAd" :products="Number(data.products)"
      :showingSlide="showingSlide" :fontFamily="data.fontFamily"
      :size="size[`${windowSize.innerWidth}x${windowSize.innerHeight}`]" :backgroundColor="data[`backgroundColor`]"
      :priceColor="data[`priceColor`]" :price="data[`price`]" :priceText="data[`priceText`]"
      :priceTextColor="data[`priceTextColor`]" :priceUnderText="data[`priceUnderText`]"
      :priceUnderTextSmall="data[`priceUnderTextSmall`]" :priceUnderTextColor="data[`priceUnderTextColor`]"
      :productName="data[`productAName`]" :productNameSmall="data[`productANameSmall`]" :productInfo="data[`productInfo`]"
      :productInfoSmall="data[`productInfoSmall`]" :position="data.imagePosition"
      :backgroundColor2="data[`slide2-backgroundColor`]" :priceColor2="data[`slide2-priceColor`]"
      :price2="data[`slide2-price`]" :priceText2="data[`slide2-priceText`]"
      :priceTextColor2="data[`slide2-priceTextColor`]" :priceUnderText2="data[`slide2-priceUnderText`]"
      :priceUnderText2Small="data[`slide2-priceUnderTextSmall`]"
      :priceUnderTextColor2="data[`slide2-priceUnderTextColor`]" :productName2="data[`slide2-productAName`]"
      :productName2Small="data[`slide2-productANameSmall`]" :productInfo2="data[`slide2-productInfo`]"
      :productInfo2Small="data[`slide2-productInfoSmall`]" :position2="data['slide2-imagePosition']"
      :backgroundColor3="data[`slide3-backgroundColor`]" :priceColor3="data[`slide3-priceColor`]"
      :price3="data[`slide3-price`]" :priceText3="data[`slide3-priceText`]"
      :priceTextColor3="data[`slide3-priceTextColor`]" :priceUnderText3="data[`slide3-priceUnderText`]"
      :priceUnderText3Small="data[`slide3-priceUnderTextSmall`]"
      :priceUnderTextColor3="data[`slide3-priceUnderTextColor`]" :productName3="data[`slide3-productAName`]"
      :productName3Small="data[`slide3-productANameSmall`]" :productInfo3="data[`slide3-productInfo`]"
      :productInfo3Small="data[`slide3-productInfoSmall`]" :position3="data['slide3-imagePosition']" />
    <FooterComponent :window="windowSize" :style="data.style" :openingText="data.openingText" :shop="data.shop"
      :logo="data.logo" :openingTextBg="data.openingTextBg" :openingTextColor="data.openingTextColor"
      :shopBg="data.shopBg" :logoBg="data.logoBg" />
  </div>
  <LoaderComponent :class="[
    data.style == 'Nordby' ? '__nordby' : '',
    data.style == 'Svinesund' ? '__svinesund' : '',
    data.style == 'MaxiMat' ? '__maximat' : '',
  ]" :startAd="startAd" :logo="data.logo" />
  <div :class="[
    data.style == 'Nordby' ? '__nordby' : '',
    data.style == 'Svinesund' ? '__svinesund' : '',
    data.style == 'MaxiMat' ? '__maximat' : '',
  ]" class="border"></div>
</template>

<style lang="scss">
@import "./assets/base.css";

.appContainer {
  width: 100vw;
  height: 100vh;
  // background: #fff;
  background-color: #000;
  pointer-events: all;
  cursor: pointer;
}

.border {
  width: calc(100vw - 2pt);
  height: calc(100vh - 2pt);
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  border: var(--app-border);
  // box-sizing: border-box;
  z-index: 99999;
  pointer-events: none;
}

.__svinesund {
  &.appContainer {
    background-color: #c8102e;
  }
}

.__nordby {
  &.appContainer {
    background-color: #1287c9;
  }
}

.appContainer>* {
  pointer-events: none;
}

.top {
  position: relative;
  height: var(--top-height);
  background: #000;
  color: #fff;
  grid-column: var(--top-grid-colum);
  grid-row: var(--top-grid-row);
}

.imgContainer {
  position: relative;
  height: var(--img-height);
  width: var(--img-width);
  grid-column: var(--img-grid-colum);
  grid-row: var(--img-grid-row);
  /* background: blue; */
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
</style>
