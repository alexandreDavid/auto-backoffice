import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      authToken: localStorage.getItem('token'),
      config: [
        {
          key: 'test',
          icon: 'home',
          name: 'List test',
          fields: [
            {
              value: 'id',
              label: 'Identifiant',
              type: 'int'
            },
            {
              value: 'label',
              label: 'Label',
              type: 'string'
            }
          ],
          list: {
            data: {
              type: 'static',
              values: [
                {
                  id: 1,
                  label: 'Label 1'
                },
                {
                  id: 2,
                  label: 'Label 2'
                },
                {
                  id: 3,
                  label: 'Label 3'
                }
              ]
            },
            editable: true,
            creatable: true,
            filters: [
              {
                label: 'Label',
                type: 'string',
                query: 'label'
              },
              {
                label: 'Label2',
                type: 'string',
                query: 'label2'
              }
            ]
          }
        }
      ]
    },
    mutations: {
      setAuthToken (state, token) {
        localStorage.setItem('token', token)
        state.authToken = token
      }
    },
    actions: {
      setAuthToken ({ commit }, token) {
        commit('setAuthToken', token)
      }
    },
    getters: {
      isAuthenticated: state => {
        return !!state.authToken
      },
      getConfig: (state) => (key) => {
        return state.config.find(config => config.key === key) || {}
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
