import { createStore } from "vuex";
import apiClient from "./api.js";

export const store = createStore({
  state() {
    return {
      history: [],
    };
  },

  getters: {
    // eslint-disable-next-line
    history: (state, getters) => {
      return state.history;
    },
  },

  // sync
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    pushHistory: (state, log) => state.history.push(log),
  },

  // async stuff
  actions: {
    async lookAround({ commit }) {
      try {
        const res = await apiClient.post("/room/look", {
          command: "",
        });
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("pushHistory", response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async lookDirection({ commit }, direction) {
      try {
        const res = await apiClient.post("/room/look", {
          command: `${direction}`,
        });
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("pushHistory", response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async moveDirection({ commit }, direction) {
      try {
        const res = await apiClient.post("/room/move", {
          command: `${direction}`,
        });
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("pushHistory", response.data);
        store.dispatch("lookAround");
      } catch (err) {
        console.log(err.response.data);
      }
    },

    increment(context) {
      context.commit("increment");
    },
  },
});
