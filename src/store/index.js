import api from '../services/api';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  users: [],
};

const gattes = {};

const actions = {
  getUsers({ commit }) {
    api.get('/users').then((response) => {
      commit('SET_USERS', response.data[0].users);
    });
  },
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
};

export default new Vuex.mapState({ state, gattes, actions, mutations });
