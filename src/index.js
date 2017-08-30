import VueSideBar from './components/VueSideBar.vue'
import SidebarItem from './components/SidebarItem.vue'
import SideBarMainContent from './components/SidebarMainContent.vue'

export default {
  install (Vue) {
    Vue.component('vue-side-bar', VueSideBar)
    Vue.component('sidebar-item', SidebarItem)
    Vue.component('sidebar-main-content', SideBarMainContent)
  }
}

export {
  VueSideBar,
  SidebarItem,
  SideBarMainContent
}
