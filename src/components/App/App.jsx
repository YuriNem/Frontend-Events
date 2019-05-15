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
    };
  },

  methods: {
    onchange(event) {
      this[event.target.name] = event.target.value;
    },

    onclick() {
      this.upcoming = !this.upcoming;
    },
  },

  created() {
    this.onchange = this.onchange.bind(this);
    this.onclick = this.onclick.bind(this);
    this.date = new Date();
  },

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { search, selectedCity, upcoming, onchange, onclick, date } = this;

    return (
      <div class="app">
        <Bar
          search={search}
          selectedCity={selectedCity}
          upcoming={upcoming}
          onchange={onchange}
          onclick={onclick}
          date={date}
        />
        <Cards search={search} selectedCity={selectedCity} upcoming={upcoming} date={date}/>
      </div>
    );
  },
};
