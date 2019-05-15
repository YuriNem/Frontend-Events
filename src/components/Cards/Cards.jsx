import './Cards.css';
import Card from '../Card/Card.jsx';

export default {
    name: 'Cards',

    props: {
      search: String,
      selectedCity: String,
      upcoming: Boolean,
      date: Date,
    },

    methods: {
      oninput(event) {
        if (event.target.name[0] === 'c') {
          this.$store.dispatch('CHANGE_EVENT_LIKE', { key: event.target.name });
        }
      },
    },

    created() {
      this.oninput = this.oninput.bind(this);
      this.likeoff = require('../../../svg/likeOff.svg');
      this.likeon = require('../../../svg/likeOn.svg');
    },

    render(h) {
      const { events } = this.$store.state;
      const { search, selectedCity, upcoming, oninput, likeoff, likeon, date } = this;

      return (
        <div class="cards" onInput={oninput}>
          {
            events
            .filter(
              event => 
                event.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
                (selectedCity === 'Любой' || event.location === selectedCity) &&
                (upcoming ? new Date(event.dtstart) > date :  new Date(event.dtstart) < date)
            )
            .map(event =>
              <Card
                summary={event.summary}
                location={event.location}
                description={event.description}
                dtstart={event.dtstart}
                dtend={event.dtend}
                like={event.like}
                likeoff={likeoff}
                likeon={likeon}
                key={Math.random()}
              />
            )
          }
        </div>
      );
    },
};
