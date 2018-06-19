import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

Vue.registerElement('CardView', () => require('nativescript-cardview').CardView)
Vue.registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh)

var Toast = require("nativescript-toast");

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
