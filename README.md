# (WIP) vue-side-bar

Vue side bar aims to simplify and make sidebars customizable by bringing reactive

## Usage
```js
Vue.use(VueSideBar)
```
```html
<vue-side-bar>
  
  <side-link :multi="true" title="Menu with links" :active="true">
    <side-link title="First link"/>
    <side-link title="Second link"/>
    <side-link title="Third link"/>
  </side-link>

  <side-link title="simple link"/>

</vue-side-bar>
```
