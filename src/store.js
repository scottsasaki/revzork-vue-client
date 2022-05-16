import { createStore } from "vuex";
import apiClient from "./api.js";

export const store = createStore({
  state() {
    return {
      apiKey: process.env.VUE_APP_API_KEY || "",
      history: [],
      inventory: [],
      me: {},
    };
  },

  getters: {
    apiKey: (state) => {
      return state.apiKey;
    },

    // eslint-disable-next-line
    history: (state, getters) => {
      return state.history;
    },
    inventory: (state) => {
      return state.inventory;
    },
    me: (state) => {
      return state.me;
    },
  },

  // sync
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    pushHistory: (state, log) => state.history.push(log),
    setInventory: (state, inventory) => (state.inventory = inventory),
    setMe: (state, me) => (state.me = me),
    setApiKey: (state, apiKey) => (state.apiKey = apiKey),
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
        console.log("error: ", err.response);
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
        console.log("error: ", err.response);
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
        console.log("error: ", err.response);
      }
    },

    async fetchInventory({ commit }) {
      try {
        const res = await apiClient.get("/character/inventory");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("setInventory", response.data.response);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async getDoodad({ commit }, slug) {
      try {
        const res = await apiClient.post("/doodad/get", {
          command: `${slug}`,
        });
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("pushHistory", response.data);
        store.dispatch("fetchInventory");
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async useDoodad({ commit }, slug) {
      try {
        const res = await apiClient.post("/doodad/use", {
          command: `${slug}`,
        });
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("pushHistory", response.data);
        store.dispatch("fetchInventory");
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async fetchMe({ commit }) {
      try {
        const res = await apiClient.get("/character/me");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("setMe", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    increment(context) {
      context.commit("increment");
    },
  },
});
