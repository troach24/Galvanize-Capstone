<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import Vue from "vue-native-core";
import { Root } from "native-base";
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";
import { Permissions, Notifications } from "expo";
import API from "./API.js";
import MainScreen from "./screens/Main";
import Book from "./screens/Book";
import Menu from "./screens/Menu";
import Shop from "./screens/Shop";
import Pay from "./screens/Pay";
import CheckIn from "./screens/CheckIn";
import Confirmation from "./screens/Confirmation";
import Receipt from "./screens/Receipt";
import Footer from "./components/Footer";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Main: MainScreen,
    Book: Book,
    Menu: Menu,
    Shop: Shop,
    Pay: Pay,
    CheckIn: CheckIn,
    Confirmation: Confirmation,
    Receipt: Receipt,
    Footer: Footer
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation },
};
</script>