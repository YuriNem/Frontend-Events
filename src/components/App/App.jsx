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
    this.date = new Date();
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
      onchange,
      onclick,
      date,
    } = this;

    return (
      <div class="app">
        <Bar
          search={search}
          selectedCity={selectedCity}
          upcoming={upcoming}
          liked={liked}
          onchange={onchange}
          onclick={onclick}
          date={date}
        />
        <Cards
          search={search}
          selectedCity={selectedCity}
          upcoming={upcoming}
          liked={liked}
          date={date}
        />
      </div>
    );
  },
};
