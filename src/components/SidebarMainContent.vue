<template>
  <div :style="contentStyle" class="sidebar-main-content">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'sidebar-main-content',
    data () {
      return {
        contentStyle: {
          marginLeft: '0',
          marginRight: '0'
        }
      }
    }
  }
</script>
<style>
</style>
