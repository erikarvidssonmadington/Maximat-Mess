<template>
  <div :class="{ notLoading: startAd }" class="loader">
    <div class="loaderLogo"></div>
  </div>
</template>
  
<script>
export default {
  props: {
    startAd: Boolean,
    logo: String,
  },
};
</script>
  
 
<style lang="scss">
.loader {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  left: 0;
  top: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  pointer-events: none;
}

.loaderLogo {
  width: 50%;
  height: 100%;
  background-position: center !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  // filter: drop-shadow(1px 1px 1.6px rgba(135, 185, 250, 0.741176));

  @media screen and (min-width: 978px) and (max-width: 982px) and (min-height: 298px) and (max-height: 602px) {
    width: 35%;
  }
}

.__maximat {
  .loaderLogo {
    background: url("https://delivered-by-madington.com/mess/client-content/uploads/0ZwNUnmPbPosvsUNnEyR/media/c842f6aa-9454-4450-86c2-0a4d5cf3f3db.png");
    // filter: drop-shadow(2px 2px 5px rgba(27, 45, -65, 0.441176));
  }
  &.loader {
    background-color: #000;
  }
}
.__svinesund {
  .loaderLogo {
    background: url("https://delivered-by-madington.com/mess/client-content/uploads/0ZwNUnmPbPosvsUNnEyR/media/48285b87-fc01-4458-a7b7-a97adc8cf8c4.png");
    filter: drop-shadow(2px 2px 5px rgba(27, 45, -65, 0.441176));
  }
  &.loader {
    background-color: #c8102e;
  }
}
.__nordby {
  .loaderLogo {
    background: url("https://delivered-by-madington.com/mess/client-content/uploads/0ZwNUnmPbPosvsUNnEyR/media/6cdd30bb-213f-4a20-9ff0-f2e98b0687dc.png");
    // filter: drop-shadow(2px 2px 5px #ffffff8a);
  }
  &.loader {
    background-color: #1287c9;
  }
}
.notLoading {
  opacity: 0;
  transition: all 0.45s;

  .loaderLogo {
    transition: all 0.55s ease-in;
    transform: translate(0%, -15%);
  }
}
</style>