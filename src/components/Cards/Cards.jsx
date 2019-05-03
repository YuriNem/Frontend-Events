import './Cards.css';
import Card from '../Card/Card.jsx';

export default {
    name: 'Cards',

    functional: true,

    props: {
      search: String,
    },

    render(h, context) {
        const { events } = context.parent.$store.state;
        const { search } = context.props;

        return (
          <div class="cards">
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
