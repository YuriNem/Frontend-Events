import './App.css';
import Bar from '../Bar/Bar.jsx';
import Cards from '../Cards/Cards.jsx';

export default {
  name: 'App',

  data() {
    return {
      search: '',
    }
  },

  methods: {
    oninput(event) {
      this[event.target.name] = event.target.value;
    },
  },

  created() {
    this.oninput = this.oninput.bind(this);
  },

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const { search, oninput } = this;

    return (
      <div class="app">
        <Bar search={search} oninput={oninput} />
        <Cards search={search} />
      </div>
    );
  },
};
