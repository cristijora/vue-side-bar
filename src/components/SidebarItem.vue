<template>
  <li :class="{active:active}">
    <slot name="link">
      <a @click="onClick" :class="{'sub-item' : isSubLink}">
        <i :class="icon"></i>
        <p>{{title}}
          <b v-if="menu" class="caret"></b>
        </p>
      </a>
    </slot>
    <transition :name="menuTransition">
      <ul class="nav" v-if="menu && toggle" :class="{menu:toggle}">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>
<script>
  export default{
    name: 'sidebar-item',
    props: {
      active: Boolean,
      icon: String,
      menu: Boolean,
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
        if (this.menu) {
          this.toggle = !this.toggle
        }
      }
    }
  }
</script>
<style>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateY(10px);
    opacity: 0;
  }


</style>
