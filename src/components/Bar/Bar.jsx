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
        likeoff: Object,
        likeon: Object,
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
                        [...new Set(events.map(({ location }) => location))]
                            .sort()
                            .map(
                                location =>
                                    <option value={location}>{location}</option>
                            )
                    }
                </select>
                <button class="bar__button" name="upcoming" onClick={onclick}>
                    {upcoming ? 'Предстоящие' : 'Прошедшие'}
                </button>
                <input
                    class="bar__checkbox"
                    type="checkbox"
                    name="liked"
                    checked={liked}
                    onClick={onclick}
                />
                <img class="bar__img" src={liked ? likeon : likeoff} alt="liked" />
            </div>
        );
    },
};
