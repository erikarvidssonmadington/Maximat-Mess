<template>
  <div class="footer">
    <div class="opening" :style="{
      color:
        style == 'MaxiMat' &&
          window.innerWidth == 580 &&
          window.innerHeight == 500
          ? '#000'
          : style == 'Svinesund' && this.svinesundBG()
            ? '#FFF'
            : openingTextColor,
      backgroundColor:
        style == 'MaxiMat' &&
          window.innerWidth == 580 &&
          window.innerHeight == 500
          ? '#FFF'
          : style == 'Svinesund' && this.svinesundBG()
            ? 'rgb(200, 16, 46)'
            : openingTextBg,
    }">
      <div ref="opening" v-html="formatedOpeningText"></div>
    </div>
    <div class="shop" :style="{
      backgroundColor: shopBg,
      backgroundImage: `url(${shop})`,
    }"></div>
    <div class="logo" :style="{
      backgroundColor: logoBg,
      background:
        style == 'Nordby' &&
          window.innerWidth == 300 &&
          window.innerHeight == 600
          ? `url(${logo}), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 41%, ${logoBg} 41%) 100%`
          : style == 'Nordby' &&
            window.innerWidth == 180 &&
            window.innerHeight == 500
            ? `url(${logo}), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 41%, ${logoBg} 41%) 100%`
            : `url(${logo}), ${logoBg}`,
    }"></div>
  </div>
</template>

<script>
export default {
  props: {
    window: Object,
    style: String,
    openingText: String,
    openingTextColor: String,
    openingTextBg: String,
    shop: String,
    shopBg: String,
    logo: String,
    logoBg: String,
  },
  mounted() {
    this.$nextTick(() => {
      // setTimeout(() => {
      // this.resizeText({ element: this.$refs.opening });
      // }, 50);
      setTimeout(() => {
        this.resizeText({ element: this.$refs.opening });
      }, 70);
      // setTimeout(() => {
      //   this.resizeText({ element: this.$refs.opening });
      // }, 200);
    });
  },
  computed: {
    formatedOpeningText() {
      return this.getFooterOpeneingArray(this.openingText.split(/(\d+)/));
    },
  },
  onUpdated() { },
  methods: {
    svinesundBG() {
      if (this.style == "Svinesund") {
        switch (`${window.innerWidth}x${window.innerHeight}`) {
          case "180x500":
            return true;
            break;
          case "300x600":
            return true;
            break;
          case "980x300":
            return true;
            break;
          case "980x600":
            return true;
            break;
          case "580x400":
            return true;
            break;

          default:
            return false;
            break;
        }
      } else {
        return false;
      }
    },
    getFooterOpeneingArray(arr) {
      let isTime = false;
      let firstText = "";
      let time = "";
      let lastText = "";

      arr.map((val) => {
        if (!isTime) {
          isNaN(val) ? (firstText += val) : (isTime = 1);
        }
        if (isTime >= 4) {
          lastText += val;
        }
        if (isTime && isTime < 4) {
          isTime++;
          time += val;
        }
      });

      return `<span class="textA">${firstText}</span> <span class="time"> ${time} </span> <span class="textB">${lastText}</span>`;
    },
    isOverflown(
      { clientHeight, scrollHeight, clientWidth, scrollWidth } // startVal
    ) {
      let overflow = {
        overflow: scrollHeight > clientHeight || scrollWidth > clientWidth,
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
      minSize = 5,
      maxSize = 180,
      step = 1,
      unit = "px",
      change = 0.8,
    }) {
      (elements || [element]).forEach((el) => {
        let i = minSize;
        let overflow = false;
        let overflowRes = false;
        if (el) {
          const parent = el.parentNode;
          while (!overflow && i < maxSize) {
            el.style.fontSize = `${i}${unit}`;

            overflow = this.isOverflown(parent).overflow;
            overflowRes = this.isOverflown(parent);
            if (!overflow) i += step;
          }

          if (this.style == "MaxiMat") {
            let bigger = () => {
              switch (`${window.innerWidth}x${window.innerHeight}`) {
                case "580x500":
                  return true;
                  break;

                default:
                  return false;
                  break;
              }
            };
            setTimeout(() => {
              [...el.childNodes].map((e) => {
                if (
                  bigger() &&
                  e.classList != undefined &&
                  e.classList.contains("time") &&
                  this.style == "MaxiMat"
                ) {
                  e.style.fontSize = `${i * 1.6}${unit}`;
                  e.style.opacity = 1;
                } else {
                  el.style.fontSize = `${i * change}${unit}`;
                  el.style.opacity = 1;
                }
              });
              return;
            }, 10);
          }

          if (this.style != "MaxiMat") {
            setTimeout(() => {
              [...el.childNodes].map((e) => {
                if (
                  e.nodeType == 1 &&
                  e.classList.contains("time") &&
                  this.style == "Nordby"
                ) {
                  if (window.innerHeight > 599 && window.innerWidth > 900) {
                    e.parentNode.style.lineHeight = 0.7;
                    e.style.fontSize = `${i * 1.4}${unit}`;
                    e ? (e.style.fontSize = `${i * 1.7}${unit}`) : "";
                    e && e.parent ? (e.parent.style.opacity = 0) : "";
                    e ? (e.style.lineHeight = "1") : "";

                    document.querySelector(".textA").style.fontSize = `${i * 0.8
                      }${unit}`;

                    document.querySelector(".textB").style.fontSize = `${i * 0.8
                      }${unit}`;
                  } else {
                    if (
                      (window.innerHeight == 300 && window.innerWidth == 980) ||
                      (window.innerHeight == 600 && window.innerWidth == 300)
                    ) {
                      e.style.fontSize = `${i * 0.8}${unit}`;
                      document.querySelector(".textA").style.fontSize = `${i * 0.8
                        }${unit}`;

                      document.querySelector(".textB").style.fontSize = `${i * 0.8
                        }${unit}`;
                      return;
                    }
                    e.parentNode.style.lineHeight = 0.7;
                    e.style.fontSize = `${i * 1.4}${unit}`;
                    e
                      ? (e.style.fontSize = `${i * (overflowRes.type == "width" ? 1.5 : 1)
                        }${unit}`)
                      : "";
                    e && e.parent ? (e.parent.style.opacity = 0) : "";
                    e ? (e.style.lineHeight = "1.2") : "";

                    document.querySelector(".textA").style.fontSize = `${i * 0.7
                      }${unit}`;

                    document.querySelector(".textB").style.fontSize = `${i * 0.7
                      }${unit}`;
                  }
                }
                if (
                  e.nodeType == 1 &&
                  (e.classList.contains("time") ||
                    e.classList.contains("textA") ||
                    e.classList.contains("textB")) &&
                  this.style == "Svinesund"
                ) {
                  let bigger = () => {
                    switch (`${window.innerWidth}x${window.innerHeight}`) {
                      case "320x250":
                        return [0.65, 1.3];
                        break;
                      case "320x400":
                        return [0.65, 1.3];
                        break;
                      case "580x500":
                        return [0.58, 1.2];
                        break;

                      default:
                        return false;
                        break;
                    }
                  };
                  if (
                    bigger() &&
                    e.classList != undefined &&
                    (e.classList.contains("time") ||
                      e.classList.contains("textA") ||
                      e.classList.contains("textB"))
                  ) {
                    e.classList.contains("time")
                      ? (e.style.fontSize = `${i * bigger()[1]}${unit}`)
                      : (e.style.fontSize = `${i * bigger()[0]}${unit}`);

                    e.parentNode.style.lineHeight = 1;
                    e.style.opacity = 1;
                    return;
                  } else {
                    e.style.opacity = 1;
                  }
                } else {
                  el.style.fontSize = `${i * change}${unit}`;
                }
                el.style.opacity = 1;
              });
            }, 10);
          }
        }
      });
    },
  },
  watch: {
    formatedOpeningText(newVal, oldVal) {
      this.resizeText({ element: this.$refs.opening });
      // this.resizeText({ element: this.$refs.opening });
      // this.resizeText({ element: this.$refs.opening });
    },
  },
  style(newVal, oldVal) {
    this.$nextTick(() => {
      this.resizeText({ element: this.$refs.opening });
      // this.resizeText({ element: this.$refs.opening });
      // this.resizeText({ element: this.$refs.opening });
    });
  },
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  display: grid;
  grid-template-columns: var(--footer-grid-template-colums);
  grid-template-rows: var(--footer-grid-template-rows);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
}

.opening {
  line-height: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  // height: 100%;
  padding: var(--footer-opening-grid-padding);
  color: #fff;
  grid-column: var(--footer-opening-grid-column);
  grid-row: var(--footer-opening-grid-row);
  font-family: var(--text-font) !important;
}

.opening>div {
  opacity: 0;
  // display: flex;
  justify-content: center;
  width: var(--footer-opening-width);
  height: var(--footer-opening-height);
  // width: 92%;
  // margin-left: 4%;
  position: relative;
  transition: opacity 0.88s ease-out;

  & span:nth-of-type(1) {
    display: var(--footer-text-hide-start);
  }

  & span:nth-of-type(2) {
    &::before {
      content: var(--footer-line-break-2);
      white-space: pre;
    }
  }

  & span:nth-of-type(3) {
    white-space: nowrap;

    &::before {
      content: var(--footer-line-break-3);
      white-space: pre;
    }
  }
}

.__nordby {
  font-weight: 700;
  font-style: condensed;

  .opening {
    font-weight: 700;


    // font-style: condensed;
    // div {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   flex-direction: column;
    // }
    div {
      font-family: "Futura";
      margin: var(--footer-opening-margin);
      display: flex;
      flex-direction: column;

      span {
        &::before {
          content: none;
          white-space: none;
        }

      }

      & span:nth-of-type(3) {

        margin-top: -3%;
        line-height: 1;

      }
    }
  }

  .time {
    font-weight: 700;
    font-style: condensed;
  }

  .opening {
    @media (min-width: 178px) and (max-width: 182px) and (min-height: 498px) and (max-height: 502px) {
      div {
        span:nth-of-type(3) {
          margin-top: 0%;
        }
      }
    }

    @media (min-width: 298px) and (max-width: 302px) and (min-height: 598px) and (max-height: 602px) {
      div {
        span:nth-of-type(3) {
          margin-top: 0%;
        }
      }
    }

    @media (min-width: 978px) and (max-width: 982px) and (min-height: 298px) and (max-height: 302px) {
      // position: relative;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      width: 73%;
      display: block;

      div {
        top: -6px;
        flex-direction: row;
        gap: 13px;
        width: 90%;
        margin: 0 6% 0 auto;

        span:nth-of-type(3) {
          position: relative;
          margin-top: 0%;

          br {
            display: none;
          }
        }
      }
    }
  }
}

.shop {
  /* margin: 9%; */
  grid-column: var(--footer-shop-grid-column);
  grid-row: var(--footer-shop-grid-row);
  background-repeat: no-repeat !important;
  background-size: var(--footer-shop-size) !important;
  background-position: var(--footer-shop-background-posistion) !important;
}

.__svinesund {
  .shop {
    display: none;
  }

  .opening>div {
    opacity: 0;
    // display: flex;
    justify-content: center;
    width: var(--footer-opening-width);
    height: var(--footer-opening-height);
    // width: 92%;
    // margin-left: 4%;
    display: flex;
    flex-direction: var(--footer-opening-svonesund-flexdirection);
    position: relative;
    transition: opacity 0.88s ease-out;

    span {
      margin: 0 2%;
    }

    & span:nth-of-type(1) {
      display: var(--footer-text-hide-start);
    }

    & span:nth-of-type(2) {
      white-space: nowrap;
      display: block;
      position: relative;

      &::before {
        content: var(--footer-line-break-2);
        white-space: nowrap;
        // white-space: pre;
      }
    }

    & span:nth-of-type(3) {
      display: block;
      position: relative;
      white-space: nowrap;
      text-align: center;
      width: 100%;

      @media (min-width: 178px) and (max-width: 182px) and (min-height: 498px) and (max-height: 502px) {
        br {
          display: none;
        }
      }
      @media (min-width: 298px) and (max-width: 302px) and (min-height: 498px) and (max-height: 602px) {
        br {
          display: none;
        }
      }

      &::before {
        content: var(--footer-line-break-3);
        white-space: nowrap;
        // white-space: pre;
      }
    }
  }

  /* --info-price-ore-margin: 10%; 
    --text-font: Trebuchet;
    --info-price-grid-template-rows: 60% 40%; */
}

.logo {
  grid-column: var(--footer-logo-grid-column);
  grid-row: var(--footer-logo-grid-row);
  background-repeat: no-repeat !important;
  background-size: var(--footer-logo-size) !important;
  background-position: var(--footer-logo-background-posistion) !important;

  &:after {
    content: "";
    border-left: #d2d2d2 2px solid;
    position: relative;
    display: var(--footer-line-display-side);
    top: 15%;
    bottom: 10px;
    left: -53%;
    height: 70%;
  }

  &:before {
    content: "";
    border-bottom: #d2d2d2 2px solid;
    position: relative;
    display: var(--footer-line-display-bottom);
    top: var(--footer-line-display-bottom-top);
    width: 70%;
    left: 15%;
    height: 2px;
  }
}

.__nordby {
  .logo {
    &:after {
      left: 0%;
    }
  }
}

.__maximat {
  .opening>div {
    & span:nth-of-type(3) {
      br {
        display: var(--display-br);
      }
    }
  }
}
</style>