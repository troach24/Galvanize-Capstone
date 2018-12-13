<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-text>Review the items below then confirm your purchase.</nb-text>
      <nb-list>
        <!-- show only active cart items -->
        <CartItem
        :key="index"
        v-for="(item, index) in cartItems.cartItems"
        v-if="item.active"
        :cartItems="cartItems"
        v-model="this.cartItems"
        :item="item">
      </nb-list>
    </nb-content>
    <nb-text :style="{ alignSelf: 'flex-end', fontWeight: 'bold', marginRight: 20 }">Total: ${{ total.toFixed(2) }}</nb-text>
    <nb-button class="pay-screen-golf" :onPress="confirmPayment" full success>
      <nb-text :receipt="receipt">Confirm Payment</nb-text>
    </nb-button>
    <Footer :navigation="navigation"/>
  </nb-container>
</template>

<script>
import API from "../API.js";
import { Toast } from "native-base";
import { ActionSheet } from "native-base";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Header,
    CartItem,
    Footer
  },
  data: function() {
    return {
      menuItems: [],
      shopItems: [],
      cartItems: [],
      total: 0,
      receipt: []
    };
  },
  async mounted() {
    this.cartItems = await API.getCartItems();
    this.menuItems = await API.getMenuItems();
    this.shopItems = await API.getShopItems();
    this.getTotal();
  },
  methods: {
    getTotal() {
      var result = 0;
      this.cartItems.cartItems.map(item => {
        return item.active ? result += item.price : null
      });
      this.total = result;
    },
    archiveTransaction(item, id) {
      return fetch(`${API.API_URL}cart/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
          mode: "cors",
          cache: "default"
        }
      })
    },
    createReceipt() {
      this.receipt = this.cartItems.cartItems.filter(item => item.active)
    },
    confirmPayment() {
      this.createReceipt()
      this.navigation.navigate("Receipt", this.receipt);
      Toast.show({
        text: "Payment approved!",
        buttonTextStyle: { color: "white" },
        type: "success",
        position: "bottom",
        duration: 5000
      });
    }
  }
};
</script>

<style scoped>
.pay-screen-golf {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  align-self: center;
  margin-top: 10;
}
</style>

