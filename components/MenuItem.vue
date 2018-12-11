<template>
  <nb-list-item>
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
</template>

<script>
export default {
  props: ["menuItems", "item", "cartItem"],
  methods: {
    buildCartItem(item) {
      this.cartItem = {
        name: item.name,
        price: item.price,
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
