import './App.css';
import Bar from '../Bar/Bar.jsx';
import Cards from '../Cards/Cards.jsx';

export default {
  name: 'App',

  data() {
    return {
      search: '',
      selectedCity: 'Любой',
    };
  },

  methods: {
    onchange(event) {
      this[event.target.name] = event.target.value;
    },
  },

  created() {
    this.onchange = this.onchange.bind(this);
  },

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { search, selectedCity, onchange } = this;

    return (
      <div class="app">
        <Bar
          search={search}
          selectedCity={selectedCity}
          onchange={onchange}
        />
        <Cards search={search} selectedCity={selectedCity} />
      </div>
    );
  },
};
