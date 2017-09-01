# (WIP) vue-side-bar

Vue side bar aims to simplify and make sidebars customizable by bringing reactive
## Demo
[Basic demo](https://jsfiddle.net/b44cc4dq/373/) WIP
## Usage
```js
Vue.use(VueSideBar)
```
```html
<vue-side-bar>

  <sidebar-item title="Menu with links" :active="true">
    <sidebar-item title="First link" @click.native="firstLinkClick"/>
    <sidebar-item title="Second link"/>
    <sidebar-item title="Third link"/>
  </sidebar-item>

  <sidebar-item title="Hey there">

</sidebar-item>

</vue-side-bar>
```
Vue-side-bar supports multi-level menus with a single component. Simply set `:menu="true` and you have a collapsable menu

Note: In order for the click binding to work directly on the sidebar-item component you have to use `@click.native`

# Props

## Vue-side-bar props
```js
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
    default: 'left' //left | right
  }
}
```

## Sidebar-item props

```js
props: {
  active: Boolean,
  icon: String,
  menu: Boolean,
  title: {
    type: String,
    default: 'Simple link'
  }
}
```
