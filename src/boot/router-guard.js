import { boot } from 'quasar/wrappers'

export default boot(({ router, store }) => {
  router.beforeEach((to) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
      return {
        path: '/login'
        // save the location we were at to come back later
        // query: { redirect: to.fullPath }
      }
    }

    if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
      return {
        path: '/'
      }
    }
  })
})
