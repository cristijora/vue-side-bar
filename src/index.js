module.exports = {

  VueSideBar: require('./components/VueSideBar.vue'),
  SidebarItem: require('./components/SidebarItem.vue'),
  SidebarMainContent: require('./components/SidebarMainContent.vue'),

  install (Vue) {
    Vue.component('vue-side-bar', module.exports.VueSideBar)
    Vue.component('sidebar-item', module.exports.SidebarItem)
    Vue.component('sidebar-main-content', module.exports.SidebarMainContent)
  }
}
