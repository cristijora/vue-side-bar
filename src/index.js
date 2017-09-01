import VueSideBar from './components/VueSideBar.vue'
import SidebarItem from './components/SidebarItem.vue'
import SideBarMainContent from './components/SidebarMainContent.vue'

const SideBar = {
  install (Vue) {
    Vue.component('vue-side-bar', VueSideBar)
    Vue.component('sidebar-item', SidebarItem)
    Vue.component('sidebar-main-content', SideBarMainContent)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.VueSideBar = SideBar
  window.Vue.use(SideBar)
}

export default SideBar
export {
  VueSideBar,
  SidebarItem,
  SideBarMainContent
}
