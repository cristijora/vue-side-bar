<template>
  <div>
<vue-side-bar>
  <side-link :multi="true" title="Menu with links" :active="true">
    <side-link title="First link"/>
    <side-link title="Second link"/>
    <side-link title="Third link"/>
  </side-link>

  <side-link title="simple link"/>

</vue-side-bar>

    <router-view style="text-align: center"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {}
  }
</script>
<style lang="scss">
  $border-radius-extreme: 6px !default;
  $white-color: white;
  $gray-input-bg: #F3F2EE !default;
  $card-black-color: #252422 !default;

  body {
    margin-top: 20px;
    background-color: #ecf0f1;
  }

  .card-footer {
    padding: 0px 20px;
  }

  .card {
    border-radius: $border-radius-extreme;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: $white-color;
    color: $card-black-color;
    padding: 10px 0;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

</style>
