<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <view>
        <image
          :style="{ marginTop: 30, alignSelf: 'center', width: 300, height: 300}"
          :source="{uri: 'https://qrcode.tec-it.com/API/QRCode?data=http%3A%2F%2Fwww.twitter.com%2F%255b%255b%255bTECIT%252f%252f%252fTwitter%255d%255d%255d'}">
      </view>
      <nb-h3 class="confirmation-instructions">Please show your unique QR code to the cart or restaurant employee.</nb-h3>

      <!-- Need to pull a transaction id in order to properly render receipt -->
      <!-- <nb-text :style="{ marginLeft: 20, marginTop: 20, fontWeight: 'bold' }">Receipt:</nb-text> -->
      <!-- <nb-list :style="{ display: 'flex', width: '70%' }">
        <nb-list-item
          :style="{ display: 'flex', justifyContent: 'space-between' }"
          :key="index"
          v-for="(item, index) in receipt.cartItems"
        >
          <nb-text>{{ item.name }}</nb-text>
          <nb-text>Qty: {{ item.quantity }}</nb-text>
        </nb-list-item>
        <nb-text :style="{ alignSelf: 'flex-end', fontWeight: 'bold', marginRight: 15 }">Total: ${{ total.toFixed(2) }}</nb-text>
      </nb-list> -->
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
    },
    receipt: {
      type: Array
    }
  },
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      // receipt: [],
      total: 0
    };
  },
  async mounted() {
    this.receipt = await API.getCartItems();
    this.getTotal();
  },
  methods: {
    getTotal() {
      var result = 0;
      // this.receipt.cartItems.forEach(item => {
      //   result += item.price * item.quantity;
      // });
      this.total = result;
    }
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

