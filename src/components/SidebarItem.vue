<template>
  <li :class="{active:active}">
    <slot name="link">
      <a @click="onClick">
        <i :class="icon"></i>
        <p>{{title}}
          <b v-if="menu" class="caret"></b>
        </p>
      </a>
    </slot>
    <div v-if="menu" :class="{collapse:toggle}">
      <ul class="nav">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>
<script>
  export default{
    name: 'sidebar-item',
    props: {
      active: Boolean,
      icon: String,
      menu: Boolean,
      title: {
        type: String,
        default: 'Simple link'
      }
    },
    data () {
      return {
        toggle: true
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
</style>
