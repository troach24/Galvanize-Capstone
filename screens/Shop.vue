<template>
  <nb-container>
    <Header />
    <nb-content>
      <nb-text>Tap on items to add them to your cart</nb-text>
      <nb-list>
        <nb-list-item itemHeader first>
          <nb-text>FOOD ITEMS</nb-text>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick">
          <nb-left>
            <nb-text>⛳️ Golf Balls</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick" last>
          <nb-left>
            <nb-text>🍔 Burger</nb-text>
          </nb-left> 
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick" last>
          <nb-left>
            <nb-text>🌮 Taco Trio</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
        <nb-list-item itemHeader>
          <nb-text>DRINKS</nb-text>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick">
          <nb-left>
            <nb-text>🍺 Beer</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick">
          <nb-left>
            <nb-text>🍺 Beer</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
        <nb-list-item button :onPress="handleBodyClick">
          <nb-left>
            <nb-text>🍺 Beer</nb-text>
          </nb-left>
          <nb-right>
            <nb-text>$4.99</nb-text>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
    <Footer :navigation="navigation"/>
  </nb-container>

</template>

<script>
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  
  export default {
  props: {
    navigation: {
      type: Object
    },
  },
  components: {
    Header,
    Footer,
  },
  data: function() {
    return {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  },
  methods: {
    handleBodyClick: function() {
      alert("This is a button ;)");
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
};
</script>
