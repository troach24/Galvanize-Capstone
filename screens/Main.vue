<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <image
        :style="{ marginTop: 50, marginBottom: 10, alignSelf: 'center', width: 250, height: 50, }"
        :source="crispy"/>
      <image
        :style="{ width: '100%', height: 200}"
        :source="{uri: 'https://www.maderasgolf.com/wp-content/uploads/2017/06/Maderas_slide.jpg'}">
    </nb-content>
    <nb-content class="button-container">
      <nb-button :on-press="openCheckIn" iconLeft class="home-button" full>
        <nb-text>Check In</nb-text>
      </nb-button>
      <nb-button :on-press="openReservations" class="home-button" full>
        <nb-text>Book A New Tee Time</nb-text>
      </nb-button>
      <nb-button :on-press="openMenu" class="home-button" full>
        <nb-text>Order Food &amp; Drinks</nb-text>
      </nb-button>
      <nb-button :on-press="openShop" class="home-button" full>
        <nb-text>Shop Pro Shop</nb-text>
      </nb-button>
    </nb-content>
    <Footer :navigation="navigation"/>
  </nb-container>
</template>

<script>
import API from "../API.js";
import React from "react";
import { Text } from "react-native";
import crispy from "../assets/crispy-flats.png";
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
      token: "",
      teeTimes: [],
      shopItems: [],
      users: [],
      notification: {},
      crispy
    };
  },
  created: function() {},
  methods: {
    openReservations() {
      this.navigation.navigate("Book");
    },
    openMenu() {
      this.navigation.navigate("Menu");
    },
    openShop() {
      this.navigation.navigate("Shop");
    },
    openCheckIn() {
      this.navigation.navigate("CheckIn");
    }
  },
  beforeMount() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
  },
  async mounted() {
    this.teeTimes = await API.getTeeTimes();
    this.menuItems = await API.getMenuItems();
    this.shopItems = await API.getShopItems();
    this.users = await API.getUsers();
  }
};
</script>
 
<style>
.button-container {
  margin-top: 20;
}
.home-button {
  margin-top: 5;
  margin-bottom: 5;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
