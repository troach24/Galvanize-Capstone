<template>
  <nb-container>
    <Header />
  <nb-content>
    <nb-text>Review the items below and confirm your purchase</nb-text>
    <nb-list>
      <nb-list-item itemHeader first>
        <!-- <nb-text>TEE TIMES</nb-text> -->
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
  <Footer :navigation="navigation"/>
    <!-- <nb-footer>
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
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      cartItems: []
    };
  },
  async mounted() {
    this.cartItems = await API.getCartItems();
  },
  methods: {
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
      this.navigation.navigate("Eat");
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
  }
};
</script>
