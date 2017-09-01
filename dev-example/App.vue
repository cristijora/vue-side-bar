<template>
  <div>
    <vue-side-bar :minimize="minimized"
                  :mobile-menu-opened="mobileOpen"
                  position="left"
                  ref="sidebar">

        <sidebar-item title="Menu with links"
                      icon="ti-bag">
          <sidebar-item to="/" title="First link"/>
          <sidebar-item to="page2" title="Second link"/>
          <sidebar-item to="/" title="Third link" />
        </sidebar-item>

      <sidebar-item title="Menu with links"
                    icon="ti-bag">
        <sidebar-item to="/" title="First link"/>
        <sidebar-item to="page2" title="Second link"/>
        <sidebar-item to="/" title="Third link" />
      </sidebar-item>
      <sidebar-item title="Menu with links"
                    icon="ti-bag">
        <sidebar-item to="/" title="First link"/>
        <sidebar-item to="page2" title="Second link"/>
        <sidebar-item to="/" title="Third link" />
      </sidebar-item>

      <sidebar-main-content slot="content">
      </sidebar-main-content>

    </vue-side-bar>
    <div class="main-panel">

      <div>
        <button class="btn" style="float:right;" @click="toggleSideBar">Minimize on desktop</button>
        <button class="btn" style="float:right;" @click="openMobileMenu">Open mobile menu</button>
      </div>
      <router-view>
      </router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        minimized: false,
        mobileOpen: false
      }
    },
    methods: {
      firstLinkClick () {
        alert('Hey you clicked me!')
      },
      toggleSideBar () {
        this.minimized = !this.minimized
      },
      openMobileMenu () {
        this.mobileOpen = !this.mobileOpen
      }
    }
  }
</script>
<style lang="scss">
  .sidebar-open {
    .main-panel{

    }
  }

</style>
