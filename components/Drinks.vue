<template>
  <nb-list-item :on-press="() => addToCart(item)">
    <nb-left>
      <image
        :style="{ width: 100, height: 100, marginRight: 10 }"
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
  props: ["menuItems", "item", "addToCart"]
};
</script>