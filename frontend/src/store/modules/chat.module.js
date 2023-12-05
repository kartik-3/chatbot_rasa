const state = {
  faqChat: [],
  reflectChat: [],
  sender: ""
};

const mutations = {
  SET_FAQ_CHAT(state, value) {
    state.faqChat.push(value);
  },
  SET_REFLECT_CHAT(state, value) {
    state.reflectChat.push(value);
  },
  SET_SENDER(state, value) {
    state.sender = value;
  },
};

const actions = {
  updateFaqChat({ commit }, payload) {
    commit("SET_FAQ_CHAT", payload);
  },
  updateReflectChat({ commit }, payload) {
    commit("SET_REFLECT_CHAT", payload);
  },
  updateSender({ commit }, payload) {
    commit("SET_SENDER", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
