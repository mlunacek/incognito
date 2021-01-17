// src/main.js

require('@/assets/main.scss');

import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App';
import router from './router';

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
  }).$mount('#app')