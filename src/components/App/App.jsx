import './App.css';
import Bar from '../Bar/Bar.jsx';
import Cards from '../Cards/Cards.jsx';

export default {
  name: 'App',

  data() {
    return {
      search: '',
      selectedcity: 'Любой',
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

    this.likeoff = require('../../../svg/likeOff.svg');
    this.likeon = require('../../../svg/likeOn.svg');
  },

  mounted() {
    this.$store.dispatch('GET_EVENTS');
  },

  render(h) {
    const {
      search,
      selectedcity,
      upcoming,
      liked,
      onchange,
      onclick,
      likeoff,
      likeon,
    } = this;

    return (
      <div class="app">
        <Bar
          search={search}
          selectedcity={selectedcity}
          upcoming={upcoming}
          liked={liked}
          onchange={onchange}
          onclick={onclick}
          likeoff={likeoff}
          likeon={likeon}
        />
        <Cards
          search={search}
          selectedcity={selectedcity}
          upcoming={upcoming}
          liked={liked}
          likeoff={likeoff}
          likeon={likeon}
        />
      </div>
    );
  },
};
