<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-text>Review the items below then confirm your check-in.</nb-text>
      <nb-list>
        <nb-list-item
          :key="index"
          v-for="(item, index) in checkInItems"
          :item="item">
          <nb-left>
            <image
              :style="{ width: 100, height: 100, marginRight: 10}"
              :source="{uri: item.imageUrl}"/>
            <nb-text>{{ item.name }}</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>${{ item.price }}</nb-text>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
    <nb-text :style="{ alignSelf: 'flex-end', fontWeight: 'bold', marginRight: 20 }">Total: ${{ total.toFixed(2) }}</nb-text>
    <nb-button
      class="pay-screen-golf"
      :onPress="() => handleBtnPress()" full>
      <nb-text>Stock Your Cart</nb-text>
    </nb-button>
    <nb-button class="pay-screen-golf" :onPress="confirmPayment" full success>
      <nb-text>Confirm Payment</nb-text>
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
      checkInItems: [],
      total: 0,
      teeTime: {
        name: "July 27th @ 11am",
        price: 40,
        description: "",
        imageUrl: "http://www.coyoterungolf.com/Scorecard.jpg",
        quantity: 4
      },
      rangeBucket: {
        name: "Range Balls",
        price: 5,
        description: "",
        imageUrl:
          "https://www.richmondforestgolf.com/images/bucket-of-balls.png",
        quantity: 1
      },
      tees: {
        name: "Tees",
        price: 1,
        description: "",
        imageUrl:
          "https://www.gpencil.com/Merchant2/graphics/00000001/3498.jpg",
        quantity: 1
      },
      golfBalls: {
        name: "Golf Balls",
        price: 2.99,
        description: "",
        imageUrl:
          "http://www.discountgolfworld.com/content/callaway/hex-chrome-plus-golfball-white-sleeve.jpg",
        quantity: 1
      },
      glove: {
        name: "Glove",
        price: 12.99,
        description: "",
        imageUrl:
          "https://s7d2.scene7.com/is/image/dkscdn/SS14TM14BURNERGLOV_White_is/",
        quantity: 1
      },
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
    this.checkInItems.push(this.teeTime);
    this.getTotal();
  },
  methods: {
    getTotal() {
      var result = 0;
      this.checkInItems.forEach(item => {
        result += item.price;
      });
      this.total = result;
    },
    handleBtnPress: function() {
      ActionSheet.show(
        {
          options: this.btnOptions,
          cancelButtonIndex: this.optionCancelIndex,
          destructiveButtonIndex: this.optionDestructiveIndex,
          title: "Stock your cart"
        },
        async buttonIndex => {
          this.clicked = this.btnOptions[buttonIndex];
          if (buttonIndex === 0) {
            this.checkInItems.push(this.rangeBucket);
          } else if (buttonIndex === 1) {
            this.checkInItems.push(this.tees);
          } else if (buttonIndex === 2) {
            this.checkInItems.push(this.golfBalls);
          } else if (buttonIndex === 3) {
            this.checkInItems.push(this.glove);
          }
          this.getTotal();
        }
      );
    },
    confirmPayment() {
      this.navigation.navigate("Confirmation");
      // update current transaction to 'complete' when integrating w/ db
      this.checkInItems = [];
      Toast.show({
        text: "Success!",
        // buttonText: "Okay",
        buttonTextStyle: { color: "white" },
        buttonStyle: { backgroundColor: "#5cb85c" },
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

