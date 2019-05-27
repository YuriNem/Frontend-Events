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
    } = this;

    const { events } = this.$store.state;

    const date = new Date();

    return (
      <div class="app">
        <Bar
          search={search}
          selectedcity={selectedcity}
          upcoming={upcoming}
          liked={liked}
          onchange={onchange}
          onclick={onclick}
          date={date}
        />
        {
          events.length ?
            <Cards
              search={search}
              selectedcity={selectedcity}
              upcoming={upcoming}
              liked={liked}
              date={date}
            />
          :
            <div class="app__loading"></div>
        }
      </div>
    );
  },
};
