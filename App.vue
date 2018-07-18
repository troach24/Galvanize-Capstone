<template>
  <app-navigation></app-navigation>
</template>

<script>
import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";
import MainScreen from './screens/Main';
import Book from './screens/Book';
import Eat from './screens/Eat';
import Shop from './screens/Shop';
import Pay from './screens/Pay';
import Footer from './components/Footer';

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);


const AppNavigation = StackNavigator(
  {
    Main: MainScreen,
    Book: Book,
    Eat: Eat,
    Shop: Shop,
    Pay: Pay,
    Footer: Footer,
  },
  {
    initialRouteName: 'Main',
    headerMode: "none"
  }
);
export default {
    components: { AppNavigation }
}
</script>