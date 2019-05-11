import './Bar.css';

export default {
    name: 'Bar',

    props: {
        search: String,
        oninput: Function,
    },

    render(h) {
        const { search, oninput } = this;

        return (
            <div class="bar">
                Search: <input
                    class="bar__search"
                    type="search"
                    name="search"
                    value={search}
                    onInput={oninput}
                />
            </div>
        );
    },
};
