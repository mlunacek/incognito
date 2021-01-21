// src/router.js
import VueRouter from 'vue-router'
import { Auth } from 'aws-amplify'

import Home from './views/Home'
import Protected from './views/Protected'

import SignUpPage from './views/auth/SignUpPage'
import SignInPage from './views/auth/SignInPage'
import ForgotPasswordPage from './views/auth/ForgotPasswordPage'

const routes = [
  { path: '/', component: Home },
  { path: '/signup',  component: SignUpPage},
  { path: '/signin',  component: SignInPage},
  { path: '/signin/forgotpassword',  component: ForgotPasswordPage},
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },

]

const router = new VueRouter({
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router