import './App.css';
import Bar from '../Bar/Bar.jsx';
import Cards from '../Cards/Cards.jsx';

export default {
  name: 'App',

  data() {
    return {
      search: '',
      selectedCity: 'Любой',
      upcoming: true,
      liked: false,
      date: new Date(),
    };
  },

  methods: {
    onchange(event) {
      this[event.target.name] = event.target.value;
    },

    onclick(event) {
      this[event.target.name] = !this[event.target.name];
    },
  },

  created() {
    this.onchange = this.onchange.bind(this);
    this.onclick = this.onclick.bind(this);
    this.likeoff = require('../../../svg/likeOff.svg');
    this.likeon = require('../../../svg/likeOn.svg');
  },

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const {
      search,
      selectedCity,
      upcoming,
      liked,
      date,
      onchange,
      onclick,
      likeoff,
      likeon,
    } = this;

    const filteredevents = this.$store.state.events.filter(
      event => 
        event.summary.toLowerCase().includes(search.toLowerCase()) &&
        (upcoming ? new Date(event.dtstart) > date :  new Date(event.dtstart) < date) &&
        (!liked || event.like)
    );

    return (
      <div class="app">
        <Bar
          search={search}
          selectedCity={selectedCity}
          upcoming={upcoming}
          liked={liked}
          onchange={onchange}
          onclick={onclick}
          filteredevents={filteredevents}
        />
        <Cards
          selectedCity={selectedCity}
          filteredevents={filteredevents}
          likeoff={likeoff}
          likeon={likeon}
        />
      </div>
    );
  },
};
