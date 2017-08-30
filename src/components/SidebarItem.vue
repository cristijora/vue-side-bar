<template>
  <li :class="{active:active}">
    <slot name="link">
      <a @click="onClick"
         data-toggle="collapse"
         :class="{'sub-item' : isSubLink}"
         v-show="isMenu || !isSubMenu">
        <i :class="icon"></i>
        <p>{{title}}
          <b v-show="isMenu" class="caret"></b>
        </p>
      </a>
      <a v-if="!isMenu && isSubMenu" data-toggle="collapse">
        <span class="sidebar-mini">{{firstLetterFromWords(title)}}</span>
        <span class="sidebar-normal">{{title}}</span>
      </a>
    </slot>
    <collapse-transition>
      <div v-show="isMenu && toggle">
        <ul class="nav">
          <slot></slot>
        </ul>
      </div>
    </collapse-transition>
  </li>
</template>
<script>
  import CollapseTransition from '../transitions/collapse-transition'
  import slotChildren from '../mixins/slotChildren'
  export default{
    name: 'sidebar-item',
    mixins: [slotChildren],
    components: {
      CollapseTransition
    },
    props: {
      active: Boolean,
      icon: String,
      menuTransition: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: 'Simple link'
      }
    },
    computed: {
      isMenu () {
        return this.childrenComponents.length > 0
      },
      isSubMenu () {
        return this.$parent.$options.name === 'sidebar-item'
      },
      isSubLink () {
        const parent = this.$parent
        if (parent && parent.$options) {
          return parent.$options.name === 'sidebar-item'
        }
        return false
      }
    },
    data () {
      return {
        toggle: false,
        subItemClassName: 'sub-item'
      }
    },
    methods: {
      onClick () {
        if (this.isMenu) {
          this.toggle = !this.toggle
        }
      },
      firstLetterFromWords (sentence) {
        const firstWordsLetter = sentence.match(/\b(\w)/g)
        return firstWordsLetter.join('').toUpperCase()
      }
    },
    mounted () {
      this.$parent.addChild(this)
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.$parent.removeChild(this)
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
