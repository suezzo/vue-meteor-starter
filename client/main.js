import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

import App from '/imports/ui/App.vue'

const router = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
  linkActiveClass: '',
  linkExactActiveClass: ''
})

Meteor.startup(() => {
  const createdRouter = router.create()

  createdRouter.beforeEach((to, from, next) => {
    // Scroll to the top of page on route change
    window.scrollTo(0, 0)
    next()
  })

  new Vue({
    router: createdRouter,
    render: h => h(App)
  }).$mount('app')
})
