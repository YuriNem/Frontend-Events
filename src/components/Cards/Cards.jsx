import './Cards.css';
import Card from '../Card/Card.jsx';

export default {
    name: 'Cards',

    props: {
      selectedCity: String,
      filteredevents: Array,
      likeoff: Object,
      likeon: Object,
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
    },

    render(h) {
      const {
        selectedCity,
        filteredevents,
        oninput,
        likeoff,
        likeon,
      } = this;

      return (
        <div class="cards" onInput={oninput}>
          {
            filteredevents
              .filter(
                event =>
                  (selectedCity === 'Любой' || event.location === selectedCity)
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
