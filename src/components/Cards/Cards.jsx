import './Cards.css';
import Card from '../Card/Card.jsx';

export default {
    name: 'Cards',

    props: {
      search: String,
      selectedcity: String,
      upcoming: Boolean,
      liked: Boolean,
      date: Date,
    },

    methods: {
      oninput(event) {
        if (event.target.name[0] === 'c') {
          this.$store.dispatch('CHANGE_EVENT_LIKE', { key: event.target.name.slice(1) });
        }
      },
    },

    created() {
      this.oninput = this.oninput.bind(this);
    },

    render(h) {
      const {
        search,
        selectedcity,
        upcoming,
        liked,
        oninput,
        date,
      } = this;

      const { events } = this.$store.state;

      return (
        <div class="cards" onInput={oninput}>
          {
            events
              .filter(
                event =>
                  event.summary.toLowerCase().includes(search.toLowerCase()) &&
                  (selectedcity === 'Любой' || event.location === selectedcity) &&
                  (upcoming ? new Date(event.dtstart) >= date :  new Date(event.dtstart) < date) &&
                  (!liked || event.like)
              )
              .map(
                event =>
                  <Card
                    summary={event.summary}
                    location={event.location}
                    description={event.description}
                    dtstart={event.dtstart}
                    dtend={event.dtend}
                    like={event.like}
                    id={Math.random().toString(36).substr(2, 9)}
                  />
              )
          }
        </div>
      );
    },
};
