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
    SET_EVENTS: (state, { events }) => {
      state.events = events;
    },

    CHANGE_EVENT_LIKE_IN_EVENTS: (state, { key }) => {
      const [summary, dtstart] = key.slice(1).split('|');

      const event = state.events.find(event => 
        event.summary === summary && event.dtstart === dtstart);
  
      event.like = !event.like;
    },
  },

  actions: {
    GET_EVENTS: async context => {
      const { data: events } = await axios.get('/events');

      const liked = JSON.parse(localStorage.getItem('liked')) || {};
      const likedEvents = 
        events.map(event => Object.assign(
          {},
          event,
          { like: `c${event.summary}|${event.dtstart}` in liked },
        ));

      context.commit('SET_EVENTS', { events: likedEvents });
    },

    CHANGE_EVENT_LIKE: (context, { key }) => {
      const liked = JSON.parse(localStorage.getItem('liked')) || {};

      if (!liked[key]) {
        liked[key] = true;
      } else {
        delete liked[key];
      }

      localStorage.setItem('liked', JSON.stringify(liked));

      context.commit('CHANGE_EVENT_LIKE_IN_EVENTS', { key });
    },
  },
});
