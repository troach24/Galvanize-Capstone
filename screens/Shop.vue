<template>
  <nb-container>
    <Header :navigation="navigation"/>
    <nb-content>
      <nb-h3 :style="{ textAlign: 'center', marginTop: 30, marginBottom: 20 }">Tap on items to add them to your cart</nb-h3>
      <nb-list>
        <nb-list-item itemHeader first>
          <nb-text>PRO SHOP ITEMS</nb-text>
        </nb-list-item>
        <nb-list-item
        :on-press="() => addToCart(item)"
        :key="index" v-for="(item, index) in shopItems.shopItems" button>
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
      shopItems: [],
      cartItem: {}
    };
  },
  async mounted() {
    this.shopItems = await API.getShopItems();
  },
  methods: {
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
      // render/update cart 'icon' quantity on POST
      // toast popup to confirm?
    }
  }
};
</script>
