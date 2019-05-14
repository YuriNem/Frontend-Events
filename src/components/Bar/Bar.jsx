import './Bar.css';

export default {
    name: 'Bar',

    props: {
        search: String,
        selectedCity: String,
        onchange: Function,
    },

    render(h) {
        const { events } = this.$store.state;
        const { search, selectedCity, onchange } = this;

        return (
            <div class="bar">
                Поиск: <input
                    class="bar__search"
                    type="search"
                    name="search"
                    value={search}
                    onInput={onchange}
                />
                Выбрать город: <select
                    class="bar__select"
                    name="selectedCity"
                    value={selectedCity}
                    onChange={onchange}
                >
                    <option value="Любой">Любой</option>
                    {
                        [...new Set(events.map(({ location }) => location))]
                            .sort()
                            .map(
                                location => 
                                    <option value={location}>{location}</option>
                            )
                    }
                </select>
            </div>
        );
    },
};
