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
