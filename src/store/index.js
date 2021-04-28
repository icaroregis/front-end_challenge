import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    DELETE_USER(state, index) {
      state.users.splice(index, 1);
    },
    ADD_USER(state, newUser) {
      state.users.push(newUser);
    },
    initialiseStore(users) {
      if (localStorage.getItem('armazenar')) {
        this.replaceState(
          Object.assign(users, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
  },

  actions: {
    getUsers(context) {
      axios
        .get('https://private-5b8666-testefrontendpc4.apiary-mock.com/users')
        .then((response) => {
          context.commit('SET_USERS', response.data[0].users);
        });
      localStorage.getItem('users');
      localStorage.setItem('users', JSON.stringify(this.users));
      JSON.parse(localStorage.getItem('users'));
    },
    delete(context, index) {
      context.commit('DELETE_USER', index);
    },
    addNewUser(context, newUser) {
      context.commit('ADD_USER', newUser);
    },
  },
});

export default store;
