<template>
  <div style="position:relative; height:100vh;">
    <vue-side-bar :minimize="sidebarClosed">

      <sidebar-item :menu="true"
                    title="Menu with links"
                    :active="true"
                    icon="ti-bag"
                    menu-transition="slide-fade">
        <sidebar-item title="First link" @click.native="firstLinkClick"/>
        <sidebar-item title="Second link"/>
        <sidebar-item title="Third link"/>
      </sidebar-item>

      <sidebar-item :menu="true"
                    title="Menu with links"
                    :active="true"
                    icon="ti-bag"
                    menu-transition="slide-fade">
        <sidebar-item title="First link" @click.native="firstLinkClick"/>
        <sidebar-item title="Second link"/>
        <sidebar-item title="Third link"/>
      </sidebar-item>
      <sidebar-item :menu="true"
                    title="Menu with links"
                    :active="true"
                    icon="ti-bag"
                    menu-transition="slide-fade">
        <sidebar-item title="First link" @click.native="firstLinkClick"/>
        <sidebar-item title="Second link"/>
        <sidebar-item title="Third link"/>
      </sidebar-item>
      <sidebar-item :menu="true"
                    title="Menu with links"
                    :active="true"
                    icon="ti-bag"
                    menu-transition="slide-fade">
        <sidebar-item title="First link" @click.native="firstLinkClick"/>
        <sidebar-item title="Second link"/>
        <sidebar-item title="Third link"/>
      </sidebar-item>
      <sidebar-item title="Hey there">

      </sidebar-item>

    </vue-side-bar>

    <div class="content" style="height:200vh; float:right;">
      <button class="btn" @click="toggleSideBar">Toggle sidebar</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        sidebarClosed: false
      }
    },
    methods: {
      firstLinkClick () {
        alert('Hey you clicked me!')
      },
      toggleSideBar () {
        this.sidebarClosed = !this.sidebarClosed
      }
    }
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
