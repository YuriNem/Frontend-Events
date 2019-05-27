import './Bar.css';

export default {
    name: 'Bar',

    props: {
        search: String,
        selectedcity: String,
        upcoming: Boolean,
        liked: Boolean,
        onchange: Function,
        onclick: Function,
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
                    name="selectedcity"
                    value={selectedcity}
                    onChange={onchange}
                >
                    <option value="Любой">Любой</option>
                    {
                        [
                            selectedcity,
                            ...new Set(
                                events
                                    .filter(
                                        ({ dtstart }) => upcoming ?
                                            new Date(dtstart) >= new Date() :
                                            new Date(dtstart) < new Date()
                                    )
                                    .map(({ location }) => location)
                            )
                        ]
                            .sort()
                            .map(
                                location =>
                                    <option value={location} selected={location == selectedcity}>
                                        {location}
                                    </option>
                            )
                    }
                </select>
                <button class="bar__button" name="upcoming" onClick={onclick}>
                    {upcoming ? 'Предстоящие' : 'Прошедшие'}
                </button>
                <div class="bar__upcoming">
                    <input
                        type="checkbox"
                        name="liked"
                        id="upcoming"
                        checked={liked}
                        onClick={onclick}
                    />
                    <label for="upcoming"></label>
                </div>
            </div>
        );
    },
};
