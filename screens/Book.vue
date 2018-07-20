<template>
  <nb-container>
    <Header />
    <nb-content>
      <text>You may schedule a tee time up to 7 days in advance. Select a date below:</text>
      <nb-card :key="index" v-for="(date, index) in teeTimeDates">
        <touchable-opacity>
          <nb-card-item>
            <nb-body>
              <nb-text>{{ date }}</nb-text>
            </nb-body>            
          </nb-card-item>
        </touchable-opacity>
      </nb-card>
    </nb-content>
    <Footer :navigation="navigation" />
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
      teeTimeDates: [
        "Tomorrow",
        "Saturday July 28th",
        "Sunday July 29th",
        "Monday July 30th",
        "Tuesday July 31st",
        "Wednesday August 1st",
        "Thursday August 2nd",
        "Friday August 3rd"
      ]
    };
  },
  methods: {
    openEat() {
      this.navigation.navigate("Eat");
    }
  }
};
</script>
