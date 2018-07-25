<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-tabs>
      <nb-tab :heading="createTab1()">
        <nb-list>
          <nb-h3 :style="{ textAlign: 'center', marginTop: 30 }">Tap on food items to add them to your cart</nb-h3>
          <Food
            :key="index"
            v-for="(item, index) in foodItems"
            :foodItems="foodItems"
            :item="item"
            :addToCart="addToCart"/>
        </nb-list>
      </nb-tab>
      <nb-tab :heading="createTab2()">
        <nb-list>
          <nb-h3 :style="{ textAlign: 'center', marginTop: 30 }">Tap on drinks to add them to your cart</nb-h3>
          <Drinks
            :key="index"
            v-for="(item, index) in drinkItems"
            :drinkItems="drinkItems"
            :item="item" 
            :addToCart="addToCart"/>
        </nb-list>
      </nb-tab>
    </nb-tabs>
    </nb-content>
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
import React from "react";
import { TabHeading, Icon, Text, Item } from "native-base";
import Food from "../components/Food";
import Drinks from "../components/Drinks";
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
    Food,
    Drinks,
    Footer
  },
  data: function() {
    return {
      menuItems: [],
      foodItems: [],
      drinkItems: [],
      cartItem: {},
      active: false
    };
  },
  async mounted() {
    this.menuItems = await API.getMenuItems();
    this.menuItems.menuItems.reverse();
    this.menuItems.menuItems.forEach(item => {
      if (item.category === "Food") {
        this.foodItems.push(item);
      } else if (item.category === "Drink") {
        this.drinkItems.push(item);
      }
    });
  },
  methods: {
    createTab1: function() {
      return (
        <TabHeading>
          <Icon name="pizza" />
          <Text>Food</Text>
        </TabHeading>
      );
    },
    createTab2: function() {
      return (
        <TabHeading>
          <Icon name="beer" />
          <Text>Drinks</Text>
        </TabHeading>
      );
    },
    buildCartItem(item) {
      this.cartItem = {
        name: item.name,
        price: item.price,
        category: item.category,
        description: item.description,
        imageUrl: item.imageUrl,
        quantity: item.quantity
      };
    },
    addToCart(item) {
      this.buildCartItem(item);
      return fetch(`${API.API_URL}cart`, {
        method: "POST",
        body: JSON.stringify(this.cartItem),
        headers: {
          "content-type": "application/json",
          mode: "cors",
          cache: "default"
        }
      });
    }
  }
};
</script>
