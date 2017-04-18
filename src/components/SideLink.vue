<template>
  <li :class="{active:active}" @click="onClick">
    <slot name="link">
      <a href="#">
        <i :class="icon"></i>
        <p>{{title}}
         <b v-if="multi" class="caret"></b>
        </p>
      </a>
    </slot>
    <div v-if="multi" :class="{collapse:toggle}">
      <ul class="nav">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>
<script>
  export default{
    name: 'side-link',
    props: {
      active: Boolean,
      icon: String,
      multi: Boolean,
      title: {
        type: String,
        default: 'Simple link'
      }
    },
    data () {
      return {
        toggle: false
      }
    },
    methods: {
      onClick () {
        if (this.multi) {
          this.toggle = !this.toggle
        }
      }
    }
  }
</script>
<style>
</style>
