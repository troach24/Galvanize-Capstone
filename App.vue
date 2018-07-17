<template>
  <app-navigation></app-navigation>
</template>

<script>
import { StackNavigator } from "vue-native-router";
import MainScreen from './screens/Main';
// import IconTextFooterScreen from "./screens/iconTextFooter";
import AnotherScreen from './screens/Another';

const AppNavigation = StackNavigator(
  {
    Main: MainScreen,
    Another: AnotherScreen,
    // IconText: IconTextFooterScreen,
  },
  {
    initialRouteName: 'Main',
  }
);
export default {
    components: { AppNavigation }
}
</script>