
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/Login.vue'),
    meta: { requiresNoAuth: true }
  },
  {
    path: '/forgotten-password',
    name: 'ForgottenPassword',
    component: () => import('pages/ForgottenPassword.vue'),
    meta: { requiresNoAuth: true }
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'models', component: () => import('pages/admin/Models.vue') },
      { path: 'rights', component: () => import('pages/admin/Rights.vue') },
      { path: 'users', component: () => import('pages/admin/Users.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'models/:type/:id',
        name: 'Details',
        component: () =>
          import(/* webpackChunkName: "about" */ 'pages/Details.vue'),
        props: true
      },
      {
        path: 'models/:type',
        name: 'List',
        component: () =>
          import(/* webpackChunkName: "about" */ 'pages/List.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
