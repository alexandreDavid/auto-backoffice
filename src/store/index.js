import { createStore } from "vuex";

export default createStore({
  state: {
    config: {
      test: {
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
        filters: [
          {
            label: "Label",
            type: "string",
            query: "label",
          },
        ],
      },
    },
  },
  mutations: {},
  actions: {},
  getters: {
    getConfig: (state) => (key) => {
      return state.config[key];
    },
  },
  modules: {},
});
