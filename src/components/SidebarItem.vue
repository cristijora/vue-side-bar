<template>
  <li :class="{active:active}">
    <slot name="link" v-bind="menuProps">
      <a @click="toggleMenu"
         data-toggle="collapse"
         :class="{'sub-item' : isSubMenu}"
         v-show="isMenu || !isSubMenu">
        <i v-if="icon" :class="icon"></i>
        <p>
          {{title}}
          <chevron-down-icon width="16" height="16" v-if="isMenu" class="menu-icon" :class="{down: toggle}"></chevron-down-icon>
        </p>
      </a>
      <component :is="componentType"
                 v-bind="$attrs"
                 v-on="$listeners"
                 v-if="!isMenu && isSubMenu"
                 data-toggle="collapse">
        <i v-if="icon" :class="icon"></i>
        <span class="sidebar-mini">{{firstLetterFromWords(title)}}</span>
        <span class="sidebar-normal">{{title}}</span>
      </component>
    </slot>
    <transition :name="menuTransition">
      <div v-show="isMenu && toggle">
        <ul class="nav">
          <slot v-bind="menuProps"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>
<script>
  import slotChildren from '../mixins/slotChildren'
  import { ChevronDownIcon } from 'vue-feather-icons'
  export default {
    inheritAttrs: false,
    name: 'sidebar-item',
    mixins: [slotChildren],
    components: {
      ChevronDownIcon
    },
    props: {
      active: Boolean,
      icon: String,
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
        const parent = this.$parent
        if (parent && parent.$options) {
          let parentName = parent.$options.name
          return parentName === 'sidebar-item'
        }
        return false
      },
      componentType () {
        if (this.$attrs && this.$attrs.to) {
          return 'router-link'
        }
        return 'a'
      },
      menuProps () {
        return {
          isMenu: this.isMenu,
          isSubMenu: this.isSubMenu,
          toggleMenu: this.toggleMenu,
          toggle: this.toggle,
          menuTransition: this.menuTransition
        }
      }
    },
    data () {
      return {
        toggle: false,
        subItemClassName: 'sub-item',
        menuTransition: ''
      }
    },
    methods: {
      toggleMenu () {
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
      if (this.$parent.addChild) {
        this.$parent.addChild(this)
      }
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      if (this.$parent.removeChild) {
        this.$parent.removeChild(this)
      }
    }
  }
</script>
<style>
</style>
