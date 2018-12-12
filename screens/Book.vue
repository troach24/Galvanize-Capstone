<template>
  <nb-container>
    <Header :navigation="navigation"/>
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
      this.navigation.navigate("Menu");
    }
  }
};
</script>
