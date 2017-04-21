<template>
  <div :class="{'sidebar-mini':minimize}">
    <div class="sidebar" :style="sideBarStyle" ref="sidebar">
      <slot name="title">
        <div class="logo">
          <a href="#" class="logo-text">
            {{title}}
        </a>
        </div>
        <div class="logo logo-mini">
          <a href="#" class="logo-text">
            {{sidebarMiniTitle}}
        </a>
        </div>
      </slot>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <slot>
          </slot>
        </ul>
      </div>
    </div>
    <slot name="content">

    </slot>
  </div>
</template>
<script>
  export default{
    props: {
      title: {
        type: String,
        default: 'Vue sidebar'
      },
      color: {
        type: String,
        default: '#7f8c8d'
      },
      position: {
        type: String,
        default: 'left'
      },
      minimize: Boolean
    },
    data () {
      return {
        content: null
      }
    },
    computed: {
      sideBarStyle () {
        let styles = {
          background: this.color
        }
        if (this.position === 'right') {
          styles.right = 0
          styles.left = 'initial'
        } else {
          styles.left = 0
          styles.right = 'initial'
        }
        return styles
      },
      sidebarMiniTitle () {
        return this.firstLetterFromWords(this.title)
      }
    },
    methods: {
      firstLetterFromWords (sentence) {
        var firstWordsLetter = sentence.match(/\b(\w)/g)
        return firstWordsLetter.join('').toUpperCase()
      }
    },
    mounted () {
      var sidebarDiv = this.$refs.sidebar
      this.content = this.$children.find(el => el.$options.name === 'sidebar-main-content')
      sidebarDiv.addEventListener('transitionend', (event) => {
        var marginType = this.position === 'left' ? 'marginLeft' : 'marginRight'
        this.content.contentStyle[marginType] = `${sidebarDiv.clientWidth}px`
      }, true)
    },
    watch: {
      minimize: function (newVal, oldVal) {
        if (this.content) {
          var sidebarDiv = this.$refs.sidebar
          var marginType = this.position === 'left' ? 'marginLeft' : 'marginRight'
          this.content.contentStyle[marginType] = `${sidebarDiv.clientWidth}px`
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "./../assets/sidebar-and-main-panel";
</style>
