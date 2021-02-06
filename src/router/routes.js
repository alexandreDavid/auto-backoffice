
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
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
