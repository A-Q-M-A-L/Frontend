import { createStore } from "vuex";

// Main Store Imports
import rootActions from "./actions.js";
import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";


// Components Store Imports
import taskStore from "./modules/task/index.js";
import userStore from "./modules/user/index.js";


const store = createStore({
  modules: {
    task: taskStore,
    user: userStore,
  },
  state() {
    return {
        token: '',
        isAuthenticated: localStorage.getItem('isAuthenticated')
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;