<template>
  <view>
    <text>Hello</text>
  </view>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object,
      },
    },
    data: function() {
      return {
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false
      };
    },
    methods: {
      toggleTab1: function() {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
      },
      toggleTab2: function() {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
      },
      toggleTab3: function() {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
      },
      toggleTab4: function() {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
      }
    }
  };
</script>