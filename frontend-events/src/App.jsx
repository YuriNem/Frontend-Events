import Card from './components/Card.jsx';

export default {
  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { events } = this.$store.state;

    return (
      <div className="app">
        {events.map(event => <Card summary={event.summary} key={Math.random()} />)}
      </div>
    );
  },
};
