<template>
  <app-navigation></app-navigation>
</template>

<script>
import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";
import MainScreen from './screens/Main';
import Reservations from './screens/Reservations';
import FoodDrink from './screens/FoodDrink';

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);


const AppNavigation = StackNavigator(
  {
    Main: MainScreen,
    Reservations: Reservations,
    FoodDrink: FoodDrink,
  },
  {
    initialRouteName: 'Main',
  }
);
export default {
    components: { AppNavigation }
}
</script>