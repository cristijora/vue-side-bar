<template>
  <div class="sidebar" :style="sideBarStyle">
    <div class="logo">
      <a href="#" class="logo-text">
        {{title}}
      </a>
    </div>
    <div class="logo logo-mini">
      <a href="#" class="logo-text">
        Ct
      </a>
    </div>

    <div class="sidebar-wrapper">
      <div class="user">
        <div class="photo">
          <img/>
        </div>
        <div class="info">
          <a data-toggle="collapse" href="#collapseExample" class="collapsed">
            User
            <b class="caret"></b>
          </a>
          <!--<div class="collapse">
            <ul class="nav">
              <li><a href="#">My Profile</a></li>
              <li><a href="#">Edit Profile</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>-->
        </div>
      </div>

      <ul class="nav">
        <slot>
        </slot>
      </ul>
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
      }
    }
  }
</script>
<style lang="scss">
  @import "./../assets/sidebar-and-main-panel";
</style>
