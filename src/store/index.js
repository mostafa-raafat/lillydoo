import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeId: 1
  },
  mutations: {
    selectedId(state, activeId) {
      state.activeId = activeId;
    }
  }
});
