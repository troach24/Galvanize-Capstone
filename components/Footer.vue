<template>
  <nb-footer>
    <nb-footer-tab>
      <nb-button :active="tab1" :onPress="toggleTab1">
        <nb-icon name="flag" :active="tab1" />
        <nb-text>Book</nb-text>
      </nb-button>
      <nb-button :active="tab2" :onPress="toggleTab2">
        <nb-icon name="paper" :active="tab2" />
        <nb-text>Menu</nb-text>
      </nb-button>
      <nb-button :active="tab3" :onPress="toggleTab3">
        <nb-icon name="cart" :active="tab3" />
        <nb-text>Shop</nb-text>
      </nb-button>
      <nb-button vertical badge :active="tab4" :onPress="toggleTab4">
        <nb-badge :style="{backgroundColor: 'green'}">
          <nb-text>
            {{ cartSize }}
          </nb-text>
        </nb-badge>
        <nb-icon name="cash" :active="tab4" />
        <nb-text>Pay</nb-text>
      </nb-button>
    </nb-footer-tab>
  </nb-footer>
</template>

<script>
import API from "../API.js";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      cartItems: [],
      cartSize: ""
    };
  },
  async mounted() {
    this.cartItems = await API.getCartItems();
    this.cartSize = this.cartItems.cartItems.length;
  },
  methods: {
    openReservations() {
      this.navigation.navigate("Book");
    },
    openEat() {
      this.navigation.navigate("Menu");
    },
    openDrink() {
      this.navigation.navigate("Shop");
    },
    toggleTab1: function() {
      this.tab1 = true;
      this.navigation.navigate("Book");
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2: function() {
      this.tab1 = false;
      this.tab2 = true;
      this.navigation.navigate("Menu");
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3: function() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.navigation.navigate("Shop");
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
  beforeMount() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
  }
};
</script>
