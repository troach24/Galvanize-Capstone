<template>
  <nb-container class="container">
    <nb-content>
    <image
    :style="{ marginBottom: 20, width: 200, height: 200}"
    :source="{uri: 
    'https://thumbs.dreamstime.com/b/golf-ball-5400074.jpg'}"/>
    <touchable-opacity :on-press="openReservations" class="home-button">
      <text class="home-button-text">Tee Times</text>
    </touchable-opacity>
    <touchable-opacity :on-press="openFoodDrink" class="home-button">
      <text class="home-button-text">Food &amp; Drink</text>
    </touchable-opacity>
    <view>
      <status-bar
        background-color="blue"
        bar-style="light-content"
      />
    </view>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button 
            :active="tab1" 
            :onPress="toggleTab1"

        >
            <nb-icon name="flag" :active="tab1" />
            <nb-text>Book</nb-text>
        </nb-button>
        
        <nb-button 
            :active="tab2" 
            :onPress="toggleTab2"
        >
            <nb-icon name="pizza" :active="tab2" />
            <nb-text>Eat</nb-text>
        </nb-button>
        
        <nb-button 
            :active="tab3" 
            :onPress="toggleTab3"
        >
            <nb-icon name="beer" :active="tab3" />
            <nb-text>Drink</nb-text>
        </nb-button>
        
        <nb-button 
            :active="tab4" 
            :onPress="toggleTab4"
        >
            <nb-icon name="contact" :active="tab4" />
            <nb-text>Account</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import React from 'react';
import { Text } from 'react-native';

export default {
  props: {
    navigation: {
      type: Object
    },
  },
  data: function() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  },
  methods: {
    openReservations() {
      this.navigation.navigate("Reservations");
    },
    openFoodDrink() {
      this.navigation.navigate("FoodDrink");
    },
    toggleTab1: function() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2: function() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3: function() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    toggleTab4: function() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    }
  },
};
</script>
 
<style>
.container {
  background-color: white;
  align-items: center;
  padding-top: 120;
  flex: 1;
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
