import './Bar.css';

export default {
    name: 'Bar',

    props: {
        search: String,
        selectedCity: String,
        upcoming: Boolean,
        onchange: Function,
        onclick: Function,
        date: Date,
    },

    render(h) {
        const { events } = this.$store.state;
        const { search, selectedCity, upcoming, onchange, onclick, date } = this;

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
                        [...new Set(
                            events
                            .filter(({ dtstart }) => upcoming ? new Date(dtstart) > date : new Date(dtstart) < date)
                            .map(({ location }) => location)
                        )]
                            .sort()
                            .map(
                                location => 
                                    <option value={location}>{location}</option>
                            )
                    }
                </select>
                <button class="bar__button" onClick={onclick}>
                    {upcoming ? 'Прошедшие' : 'Предстоящие'}
                </button>
            </div>
        );
    },
};
