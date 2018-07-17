<template>
  <nb-container>
    <Header />
    <nb-content>
    <!-- <image-background :source="launchScreenBg" class="container"> -->
    
    <view class="button-container">
    <touchable-opacity :on-press="openReservations" class="home-button">
      <text class="home-button-text">Book/View Tee Times</text>
    </touchable-opacity>
    <view>
    <touchable-opacity :on-press="openEat" class="home-button">
      <text class="home-button-text">Eat</text>
    </touchable-opacity>
    <touchable-opacity :on-press="openDrink" class="home-button">
      <text class="home-button-text">Drink</text>
    </touchable-opacity>
    </view>
    </view>
    <!-- <view>
      <status-bar
        background-color="blue"
        bar-style="light-content"
      />
    </view> -->
    <!-- </image-background> -->
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1">
          <nb-icon name="flag" :active="tab1" />
          <nb-text>Book</nb-text>
        </nb-button>
        <nb-button :active="tab2" :onPress="toggleTab2">
          <nb-icon name="pizza" :active="tab2" />
          <nb-text>Eat</nb-text>
        </nb-button>
        <nb-button :active="tab3" :onPress="toggleTab3">
          <nb-icon name="beer" :active="tab3" />
          <nb-text>Drink</nb-text>
        </nb-button>
        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon name="cash" :active="tab4" />
          <nb-text>Pay</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import React from 'react';
import { Text } from 'react-native';
import launchScreenBg from "../assets/golf-ball.png";
import Header from '../components/Header';

export default {
  props: {
    navigation: {
      type: Object
    },
  },
  components: {
    Header,
  },
  data: function() {
    return {
      launchScreenBg: launchScreenBg,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false
    };
  },
  beforeMount() {
    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = false
  },
  methods: {
    openReservations() {
      this.navigation.navigate("Book");
    },
    openEat() {
      this.navigation.navigate('Eat');
    },
    openDrink() {
      this.navigation.navigate('Drink')
    },
    toggleTab1: function() {
      this.tab1 = true;
      this.navigation.navigate('Book');
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2: function() {
      this.tab1 = false;
      this.tab2 = true;
      this.navigation.navigate("Eat");
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3: function() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.navigation.navigate("Drink");
      this.tab4 = false;
    },
    toggleTab4: function() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      this.navigation.navigate("Pay");
    }
  },
};
</script>
 
<style>
.container {
  background-color: white;
  align-items: center;
  margin-top: 100;
  flex: 1;
  /* height: 200%; */
}
.button-container {
  /* flex: 1; */
  /* margin-bottom: 450; */
  flex: 1;
  margin-top: 175;
  align-items: center;
}
.home-button {
  width: 210;
  background-color: green;
  margin-bottom: 10;
  padding: 10;
  border-radius: 5;
}
.home-button-text {
  text-align: center;
  font-size: 34;
  color: white;
}
</style>
