import { createStore } from "vuex";
import apiClient from "./api.js";

export const store = createStore({
  state() {
    return {
      apiKey: process.env.VUE_APP_API_KEY || "",
      history: [],
      inventory: [],
      me: {},
      settings: {},
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
    resetHistory: (state) => (state.history = []),
    setInventory: (state, inventory) => (state.inventory = inventory),
    setMe: (state, me) => (state.me = me),
    setSettings: (state, settings) => (state.settings = settings),
    setApiKey: (state, apiKey) => (state.apiKey = apiKey),
  },

  // async stuff
  actions: {
    async vote({ commit }, { direction, slug }) {
      try {
        const res = await apiClient.get("/puzzle/vote", {
          0: direction,
          1: slug,
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

    async goToOrigin({ commit }) {
      try {
        const res = await apiClient.get("/character/origin");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        commit("resetHistory");
        commit("pushHistory", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async goToRecall({ commit }) {
      try {
        const res = await apiClient.get("/character/recall");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        commit("resetHistory");
        commit("pushHistory", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async goToResume({ commit }) {
      try {
        const res = await apiClient.get("/character/resume");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        commit("resetHistory");
        commit("pushHistory", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    async goToTeleport({ commit }) {
      try {
        const res = await apiClient.get("/character/teleport");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        commit("resetHistory");
        commit("pushHistory", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

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
        store.dispatch("fetchMe");
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

    async inspectDoodad({ commit }, slug) {
      try {
        const res = await apiClient.post("/doodad/inspect", {
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

    async useDoodadWith({ commit }, items) {
      const command = Object.assign({}, items);
      try {
        const res = await apiClient.post("/doodad/use", command);
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

    async fetchSettings({ commit }) {
      try {
        const res = await apiClient.get("/help/settings");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        commit("setSettings", response.data);
      } catch (err) {
        console.log("error: ", err.response);
      }
    },

    increment(context) {
      context.commit("increment");
    },
  },
});
