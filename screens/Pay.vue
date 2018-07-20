<template>
  <nb-container>
    <Header :navigation="navigation"/>
  <nb-content>
    <nb-text>Review the items below and confirm your purchase</nb-text>
    <nb-list>
      <nb-list-item itemHeader first>
      </nb-list-item>
      <nb-list-item :key="index" v-for="(item, index) in cartItems.cartItems">
        <nb-left>
          <image
            :style="{ width: 100, height: 100, marginRight: 10}"
            :source="{uri: item.imageUrl}"/>
          <nb-text>{{ item.name }}</nb-text>
        </nb-left>
        <nb-right>
          <nb-text>${{ item.price }}</nb-text>
        </nb-right>
    </nb-list>
  </nb-content>
  <nb-content>
    <nb-button :onPress="handleBtnPress" info>
        <nb-text>Stock Your Cart</nb-text>
      </nb-button>
  </nb-content>
  <nb-button :onPress="confirmPayment" full success>
    <nb-text>Confirm Payment</nb-text>
  </nb-button>
  <Footer :navigation="navigation"/>
    <!-- <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1">
          <nb-icon name="flag" :active="tab1" />
          <nb-text>Book</nb-text>
        </nb-button>
        <nb-button :active="tab2" :onPress="toggleTab2">
          <nb-icon name="pizza" :active="tab2" />
          <nb-text>Menu</nb-text>
        </nb-button>
        <nb-button :active="tab3" :onPress="toggleTab3">
          <nb-icon name="beer" :active="tab3" />
          <nb-text>Shop</nb-text>
        </nb-button>
        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon name="cash" :active="tab4" />
          <nb-text>Pay</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer> -->
  </nb-container>


</template>

<script>
import API from "../API.js";
import React from "react";
import { Toast } from "native-base";
import { ActionSheet } from "native-base";
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
  },
  data: function() {
    return {
      cartItems: [],
      btnOptions: [
        "Range Bucket $5",
        "Wooden Tees $1",
        "Titleist Sleeve $12",
        "Golf Glove $10",
        "Cancel"
      ],
      optionCancelIndex: 4,
      optionDestructiveIndex: 4,
      clicked: 0
    };
  },
  async mounted() {
    this.cartItems = await API.getCartItems();
  },
  methods: {
    handleBtnPress: function() {
      console.log("hi");
      ActionSheet.show(
        {
          options: this.btnOptions,
          cancelButtonIndex: this.optionCancelIndex,
          destructiveButtonIndex: this.optionDestructiveIndex,
          title: "Stock your cart"
        },
        buttonIndex => {
          this.clicked = this.btnOptions[buttonIndex];
          console.log("Yo");
          // if ((this.clicked = 0)) {
          //   console.log("yo!");
          // }
        }
      );
    },
    confirmPayment: function() {
      console.log("hi");
      this.navigation.navigate("Confirmation");
      Toast.show({
        text: "Success!",
        // buttonText: "Okay",
        buttonTextStyle: { color: "white" },
        buttonStyle: { backgroundColor: "#5cb85c" },
        type: "success",
        position: "bottom",
        duration: 7000
      });
    }
  }
};
</script>

<style scoped>
</style>

