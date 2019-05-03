import './Bar.css';

export default {
    name: 'Bar',

    functional: true,

    props: {
        search: String,
        oninput: Function,
    },

    render(h, context) {
        const { search, oninput } = context.props;

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
