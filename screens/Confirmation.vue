<template>
  <nb-container>
    <Header :navigation="navigation"/>
  <nb-content>
    <view>
      <image
        :style="{ marginTop: 30, alignSelf: 'center', width: 300, height: 300}"
        :source="{uri: 'https://qrcode.tec-it.com/API/QRCode?data=http%3A%2F%2Fwww.twitter.com%2F%255b%255b%255bTECIT%252f%252f%252fTwitter%255d%255d%255d'}">
    </view>
    <nb-h3 class="confirmation-instructions">Proceed to cart #4 and show your unique QR code to the attendant.</nb-h3>
  </nb-content>
  <Footer :navigation="navigation"/>
  </nb-container>


</template>

<script>
import API from "../API.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.confirmation-instructions {
  margin-top: 20;
  margin-left: 20;
  margin-right: 20;
}
</style>

