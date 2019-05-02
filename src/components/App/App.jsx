import Bar from '../Bar/Bar.jsx';
import Card from '../Card/Card.jsx';
import './App.css';

export default {
  name: 'App',

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { events, search } = this.$store.state;

    return (
      <div class="app">
        <Bar />
        {
          events
          .filter(event =>
            event.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1)
          .map(event =>
            <Card
              summary={event.summary}
              location={event.location}
              description={event.description}
              key={Math.random()}
            />
          )
        }
      </div>
    );
  },
};
