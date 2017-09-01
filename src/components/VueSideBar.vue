<template>
  <div>
    <div class="sidebar" :data-color="color" :data-active-color="activeColor">
      <slot name="title">
        <div class="logo" :title="title" :sidebarMiniTitle="sidebarMiniTitle">
          <a href="#" class="simple-text logo-mini">
            <div class="logo-img">
              {{sidebarMiniTitle}}
            </div>
          </a>
          <a class="simple-text logo-normal">
            {{title}}
          </a>
        </div>
      </slot>
      <div class="sidebar-wrapper" ref="sidebar">
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
  import slotChildren from '../mixins/slotChildren'

  export default {
    name: 'side-bar',
    mixins: [slotChildren],
    props: {
      title: {
        type: String,
        default: 'Vue sidebar'
      },
      color: {
        type: String,
        default: 'red'
      },
      activeColor: {
        type: String,
        default: 'red'
      },
      position: {
        type: String,
        default: 'left'
      },
      menuTransition: {
        type: String,
        default: ''
      },
      minimize: Boolean,
      mobileMenuOpened: Boolean
    },
    data () {
      return {
        sideBarMiniClass: 'sidebar-mini',
        mobileMenuClass: 'nav-open'
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
        const firstWordsLetter = sentence.match(/\b(\w)/g)
        return firstWordsLetter.join('').toUpperCase()
      }
    },
    mounted () {
      if (this.minimize) {
        document.body.classList.add(this.sideBarMiniClass)
      }
      if (this.mobileMenuOpened) {
        document.body.classList.add(this.mobileMenuClass)
      }
    },
    watch: {
      minimize () {
        document.body.classList.toggle(this.sideBarMiniClass)
      },
      mobileMenuOpened () {
        document.body.classList.toggle(this.mobileMenuClass)
      }
    }
  }
</script>
<style>
</style>
