(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueSideBar = {})));
}(this, (function (exports) { 'use strict';

var slotChildren = {
  data: function data() {
    return {
      childrenComponents: []
    };
  },

  methods: {
    addChild: function addChild(item) {
      var index = this.$slots.default.indexOf(item.$vnode);
      item.menuTransition = this.menuTransition;
      this.childrenComponents.splice(index, 0, item);
    },
    removeChild: function removeChild(item) {
      var childrenComponents = this.childrenComponents;
      var index = childrenComponents.indexOf(item);
      if (index > -1) {
        childrenComponents.splice(index, 1);
      }
    }
  }
};

var VueSideBar = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "sidebar", attrs: { "data-color": _vm.color, "data-active-color": _vm.activeColor } }, [_vm._t("title", [_c('div', { staticClass: "logo", attrs: { "title": _vm.title, "sidebarMiniTitle": _vm.sidebarMiniTitle } }, [_c('a', { staticClass: "simple-text logo-mini", attrs: { "href": "#" } }, [_c('div', { staticClass: "logo-img" }, [_vm._v(_vm._s(_vm.sidebarMiniTitle))])]), _c('a', { staticClass: "simple-text logo-normal" }, [_vm._v(_vm._s(_vm.title))])])]), _c('div', { ref: "sidebar", staticClass: "sidebar-wrapper" }, [_c('ul', { staticClass: "nav" }, [_vm._t("default")], 2)])], 2), _vm._t("content")], 2);
  }, staticRenderFns: [],
  name: 'side-bar',
  mixins: [slotChildren],
  props: {
    title: {
      type: String,
      default: 'Vue sidebar'
    },
    color: {
      type: String,
      default: 'red'
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    position: {
      type: String,
      default: 'left'
    },
    menuTransition: {
      type: String,
      default: ''
    },
    minimize: Boolean,
    mobileMenuOpened: Boolean
  },
  data: function data() {
    return {
      sideBarMiniClass: 'sidebar-mini',
      mobileMenuClass: 'nav-open'
    };
  },

  computed: {
    sideBarStyle: function sideBarStyle() {
      var styles = {
        background: this.color
      };
      if (this.position === 'right') {
        styles.right = 0;
        styles.left = 'initial';
      } else {
        styles.left = 0;
        styles.right = 'initial';
      }
      return styles;
    },
    sidebarMiniTitle: function sidebarMiniTitle() {
      return this.firstLetterFromWords(this.title);
    }
  },
  methods: {
    firstLetterFromWords: function firstLetterFromWords(sentence) {
      var firstWordsLetter = sentence.match(/\b(\w)/g);
      return firstWordsLetter.join('').toUpperCase();
    }
  },
  mounted: function mounted() {
    if (this.minimize) {
      document.body.classList.add(this.sideBarMiniClass);
    }
    if (this.mobileMenuOpened) {
      document.body.classList.add(this.mobileMenuClass);
    }
  },

  watch: {
    minimize: function minimize() {
      document.body.classList.toggle(this.sideBarMiniClass);
    },
    mobileMenuOpened: function mobileMenuOpened() {
      document.body.classList.toggle(this.mobileMenuClass);
    }
  }
};

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

var babelHelperVueJsxMergeProps = function mergeJSXProps(objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }, {});
};

function mergeFn(a, b) {
  return function () {
    a.apply(this, arguments);
    b.apply(this, arguments);
  };
}

var ChevronDownIcon = {
  name: 'chevron-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h("svg", babelHelperVueJsxMergeProps([{
      attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
      "class": "feather feather-chevron-down" }, ctx.data]), [h("polyline", {
      attrs: { points: "6 9 12 15 18 9" }
    }, [])]);
  }
};

var SidebarItem = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: { active: _vm.active } }, [_vm._t("link", [_c('a', { directives: [{ name: "show", rawName: "v-show", value: _vm.isMenu || !_vm.isSubMenu, expression: "isMenu || !isSubMenu" }], class: { 'sub-item': _vm.isSubMenu }, attrs: { "data-toggle": "collapse" }, on: { "click": _vm.toggleMenu } }, [_vm.icon ? _c('i', { class: _vm.icon }) : _vm._e(), _c('p', [_vm._v(_vm._s(_vm.title)), _vm.isMenu ? _c('chevron-down-icon', { staticClass: "menu-icon", class: { down: _vm.toggle }, attrs: { "width": "16", "height": "16" } }) : _vm._e()], 1)]), !_vm.isMenu && _vm.isSubMenu ? _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "data-toggle": "collapse" } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm.icon ? _c('i', { class: _vm.icon }) : _vm._e(), _vm._v(" "), _c('span', { staticClass: "sidebar-mini" }, [_vm._v(_vm._s(_vm.firstLetterFromWords(_vm.title)))]), _vm._v(" "), _c('span', { staticClass: "sidebar-normal" }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e()], null, _vm.menuProps), _c('transition', { attrs: { "name": _vm.menuTransition } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isMenu && _vm.toggle, expression: "isMenu && toggle" }] }, [_c('ul', { staticClass: "nav" }, [_vm._t("default", null, null, _vm.menuProps)], 2)])])], 2);
  }, staticRenderFns: [],
  inheritAttrs: false,
  name: 'sidebar-item',
  mixins: [slotChildren],
  components: {
    ChevronDownIcon: ChevronDownIcon
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
    isMenu: function isMenu() {
      return this.childrenComponents.length > 0;
    },
    isSubMenu: function isSubMenu() {
      var parent = this.$parent;
      if (parent && parent.$options) {
        var parentName = parent.$options.name;
        return parentName === 'sidebar-item';
      }
      return false;
    },
    componentType: function componentType() {
      if (this.$attrs && this.$attrs.to) {
        return 'router-link';
      }
      return 'a';
    },
    menuProps: function menuProps() {
      return {
        isMenu: this.isMenu,
        isSubMenu: this.isSubMenu,
        toggleMenu: this.toggleMenu,
        toggle: this.toggle,
        menuTransition: this.menuTransition
      };
    }
  },
  data: function data() {
    return {
      toggle: false,
      subItemClassName: 'sub-item',
      menuTransition: ''
    };
  },

  methods: {
    toggleMenu: function toggleMenu() {
      if (this.isMenu) {
        this.toggle = !this.toggle;
      }
    },
    firstLetterFromWords: function firstLetterFromWords(sentence) {
      var firstWordsLetter = sentence.match(/\b(\w)/g);
      return firstWordsLetter.join('').toUpperCase();
    }
  },
  mounted: function mounted() {
    if (this.$parent.addChild) {
      this.$parent.addChild(this);
    }
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    if (this.$parent.removeChild) {
      this.$parent.removeChild(this);
    }
  }
};

var SideBarMainContent = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "sidebar-main-content", style: _vm.contentStyle }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'sidebar-main-content',
  data: function data() {
    return {
      contentStyle: {
        marginLeft: '0',
        marginRight: '0'
      }
    };
  }
};

var SideBar = {
  install: function install(Vue) {
    Vue.component('vue-side-bar', VueSideBar);
    Vue.component('sidebar-item', SidebarItem);
    Vue.component('sidebar-main-content', SideBarMainContent);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.VueSideBar = SideBar;
  window.Vue.use(SideBar);
}

exports['default'] = SideBar;
exports.VueSideBar = VueSideBar;
exports.SidebarItem = SidebarItem;
exports.SideBarMainContent = SideBarMainContent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
