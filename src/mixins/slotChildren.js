export default {
  data () {
    return {
      childrenComponents: []
    }
  },
  methods: {
    addChild (item) {
      const index = this.$slots.default.indexOf(item.$vnode)
      item.menuTransition = this.menuTransition
      this.childrenComponents.splice(index, 0, item)
    },
    removeChild (item) {
      const childrenComponents = this.childrenComponents
      const index = childrenComponents.indexOf(item)
      if (index > -1) {
        childrenComponents.splice(index, 1)
      }
    }
  }
}
