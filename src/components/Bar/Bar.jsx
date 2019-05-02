import './Bar.css';

export default {
    name: 'Bar',

    methods: {
        onInput(event) {
            this.$store.dispatch('GET_SEARCH', event.target.value);
        },
    },

    render(h) {
        const { search } = this.$store.state;

        return (
            <div class="bar">
                <input
                    class="bar__search"
                    type="search"
                    name="search"
                    value={search}
                    onInput={event => this.onInput(event)}
                />
            </div>
        );
    },
};
