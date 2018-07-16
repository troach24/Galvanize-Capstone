<template>
  <view class="container">
    <!-- <text class="text-color-primary">My Vue Native App</text> -->
    <image
    :style="{ marginBottom: 20, width: 200, height: 200}"
    :source="{uri: 
    'https://thumbs.dreamstime.com/b/golf-ball-5400074.jpg'}"/>
      <!-- :on-press="handleButton" -->
    <touchable-opacity class="home-button">
      <text class="home-button-text">Tee Times</text>
    </touchable-opacity>
    <touchable-opacity class="home-button">
      <text class="home-button-text">Food &amp; Drink</text>
    </touchable-opacity>
    <view>
      <status-bar
            background-color="blue"
            bar-style="light-content"
        />
      <text class="footer">Footer</text>
    </view>
  </view>
</template>

<script>

export default {
  methods: {
    // handleButton() {
    //   this.navigation.navigate("Another");
    // },
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
