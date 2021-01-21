// src/main.js

require('@/assets/main.scss');

import Vue from 'vue';
import VueRouter from 'vue-router'


import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

import App from './App';
import router from './router';
import store from './store'


Amplify.configure(aws_exports);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')