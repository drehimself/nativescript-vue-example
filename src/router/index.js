import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Reddit from '../components/Reddit';
import Plugins from '../components/Plugins';
import Refresh from '../components/Refresh';
import Login from '../components/Login';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
      path: '/reddit',
      component: Reddit,
      meta: {
        title: 'Reddit',
      },
    },
    {
      path: '/plugins',
      component: Plugins,
      meta: {
        title: 'Plugins',
      },
    },
    {
      path: '/refresh',
      component: Refresh,
      meta: {
        title: 'Refresh',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
