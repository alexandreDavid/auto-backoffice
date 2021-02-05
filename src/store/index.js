import { createStore } from "vuex";

export default createStore({
  state: {
    config: [
      {
        key: "test",
        icon: "home",
        name: "List test",
        fields: [
          {
            value: "id",
            label: "Identifiant",
            type: "int",
          },
          {
            value: "label",
            label: "Label",
            type: "string",
          },
        ],
        list: {
          data: {
            type: 'static',
            values: [
              {
                id: 1,
                label: "Label 1",
              },
              {
                id: 2,
                label: "Label 2",
              },
              {
                id: 3,
                label: "Label 3",
              },
            ]
          },
          editable: true,
          creatable: true,
          filters: [
            {
              label: "Label",
              type: "string",
              query: "label",
            },
            {
              label: "Label2",
              type: "string",
              query: "label2",
            }
          ],
        },
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getConfig: (state) => (key) => {
      return state.config.find(config => config.key === key) || {};
    },
  },
  modules: {},
});
