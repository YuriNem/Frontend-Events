import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
  },

  mutations: {
    SET_EVENTS: (state, payload) => {
      state.events = payload;
    },
  },

  actions: {
    GET_EVENTS: async (context) => {
      const { data } = await axios.get('/events');
      
      context.commit('SET_EVENTS', data);
    },
  },
});
