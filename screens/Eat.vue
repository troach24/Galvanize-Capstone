<template>
  <nb-container>
    <nb-header>
      <nb-left></nb-left>
      <nb-body>
      <image
        :style="{ width: 40, height: 40}"
        :source="{uri: 
        'https://thumbs.dreamstime.com/b/golf-ball-5400074.jpg'}"/>
      </nb-body>
      <nb-right />
    </nb-header>
  <nb-content>
    <text>EAT FOOD</text>
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
  export default {
  props: {
    navigation: {
      type: Object
    },
  },
  data: function() {
    return {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    };
  },
  methods: {
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
