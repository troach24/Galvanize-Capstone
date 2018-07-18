<template>
  <nb-container>
    <!-- <nb-header>
      <nb-left></nb-left>
      <nb-body>
      <image
        :style="{ width: 40, height: 40}"
        :source="{uri: 
        'https://thumbs.dreamstime.com/b/golf-ball-5400074.jpg'}"/>
      </nb-body>
      <nb-right />
    </nb-header> -->
    <Header />
  <nb-content>
    <text>SHOP</text>
  </nb-content>
    <Footer />
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
