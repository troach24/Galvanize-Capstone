<template>
  <nb-header :style="{ marginBottom: 1 }">
    <nb-left>
      <nb-icon name="home" :style="{ marginLeft: 10 }" :onPress='goHome' />
    </nb-left>
    <nb-body>
      <view>
        <image
          :style="{ width: 100, height: 40 }"
          :source="headerImg"
        />
      </view>
    </nb-body>
    <nb-right>
      <touchable-opacity :onPress="openConfirmation">
        <image
        :style="{ width: 50, height: 50, marginBottom: 7 }"
        :source="{uri: 
        'https://render.bitstrips.com/v2/cpanel/8f42bf78-97e6-4e35-8ec5-709ed099f8e9-66f80c2b-7884-414e-8c21-09d720f4a6a3-v1.png?transparent=1&palette=1'}"/>
      </touchable-opacity>
    </nb-right>
  </nb-header>
</template>

<script>
import headerImg from "../assets/pepe.png";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      headerImg
    };
  },
  methods: {
    openConfirmation() {
      this.navigation.navigate("Confirmation");
    },
    goHome() {
      this.navigation.navigate("Main");
    }
  }
};
</script>
