module.exports = {

  VueSideBar: require('./components/VueSideBar.vue'),
  SidebarItem: require('./components/SidebarItem.vue'),

  install (Vue) {
    Vue.component('vue-side-bar', module.exports.VueSideBar)
    Vue.component('sidebar-item', module.exports.SidebarItem)
  }
}
