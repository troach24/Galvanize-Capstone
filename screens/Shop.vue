<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-text>Tap on items to add them to your cart</nb-text>
      <nb-list>
        <nb-list-item itemHeader first>
          <nb-text>PRO SHOP ITEMS</nb-text>
        </nb-list-item>
        <nb-list-item :key="index" v-for="(item, index) in shopItems.shopItems"
        class="purchase-item" button :onPress="handleBodyClick">
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
    <Footer :navigation="navigation"/>
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
      shopItems: []
    };
  },
  async mounted() {
    this.shopItems = await API.getShopItems();
  },
  methods: {
    handleBodyClick: function() {
      alert("This is a button ;)");
    }
  }
};
</script>
