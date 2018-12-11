<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-text>Review the items below then confirm your purchase.</nb-text>
      <nb-list>
        <CartItem
        :key="index"
        v-for="(item, index) in cartItems.cartItems"
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
import React from "react";
import { Toast } from "native-base";
import { ActionSheet } from "native-base";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
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
    CartItem,
    Footer
  },
  data: function() {
    return {
      menuItems: [],
      shopItems: [],
      cartItems: [],
      total: 0
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
      this.cartItems.cartItems.forEach(item => {
        result += item.price;
      });
      this.total = result;
    },
    addToCart(item) {
      console.log("item: ", item);
      return fetch(`${API.API_URL}cart`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
          mode: "cors",
          cache: "default"
        }
      }).then((this.cartItems = API.getCartItems()));
      // need two fetch reqs for some reason...^^^
    },
    confirmPayment() {
      this.receipt = this.cartItems;
      // this.cartItems = {};
      this.navigation.navigate("Receipt");
      // empty
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

