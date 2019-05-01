import Card from '../Card/Card.jsx';
import './App.css';

export default {
  name: 'App',

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { events } = this.$store.state;

    return (
      <div class="app">
        {events.map(event => <Card summary={event.summary} key={Math.random()} />)}
      </div>
    );
  },
};
