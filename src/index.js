module.exports = {

  VueSideBar: require('./components/VueSideBar.vue'),
  SideLink: require('./components/SideLink.vue'),

  install (Vue) {
    Vue.component('vue-side-bar', module.exports.VueSideBar)
    Vue.component('side-link', module.exports.SideLink)
  }
}
