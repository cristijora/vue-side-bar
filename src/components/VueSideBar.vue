<template>
  <div :class="{'sidebar-mini':minimize}">
    <div class="sidebar" :style="sideBarStyle">
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

      <div class="sidebar-wrapper">
        <!-- <div class="user">
           <div class="photo">
           </div>
         </div>-->

        <ul class="nav">
          <slot>
          </slot>
        </ul>
      </div>
    </div>
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
    }
  }
</script>
<style lang="scss">
  @import "./../assets/sidebar-and-main-panel";
</style>
