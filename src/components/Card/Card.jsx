import './Card.css';

export default {
  name: 'Card',

  props: {
    id: String,
    summary: String,
    location: String,
    description: String,
    dtstart: String,
    dtend: String,
    like: Boolean,
  },

  methods: {
    checkDates(dtstart, dtend) {
      return dtstart >= dtend ? [dtstart] : [dtstart, dtend];
    },

    stringifyDate(date) {
      const monthsNames = [
        'янв.',
        'фев.',
        'мар.',
        'апр.',
        'мая',
        'июн.',
        'июл.',
        'авг.',
        'сен.',
        'окт.',
        'ноя.',
        'дек.',
    ];

    const day = date.getDate();

    return `${day > 9 ? day : `0${day}`} ${monthsNames[date.getMonth()]} ${date.getFullYear()}`;
    },
  },

  render(h) {
    const {
      id,
      summary,
      location,
      description,
      dtstart,
      dtend,
      like,
      checkDates,
      stringifyDate,
    } = this;

    return (
      <a class="card" href={description} target="_blank">
        <div class="card__description">
          <div class="card__summary">{summary}</div>
          <div class="card__location">{location}</div>
          {
            dtstart ?
              <div class="card__date">
                {
                  checkDates(dtstart, dtend)
                    .map(date => stringifyDate(new Date(date)))
                    .join(' - ')
                }
              </div>
            :
              null
          }
        </div>
        <div class="card__like">
          <input
            class="card__checkbox"
            type="checkbox"
            name={`c${summary}|${dtstart}`}
            id={id}
            checked={like}
          />
          <label class="card__label" for={id}></label>
        </div>
    </a>
    );
  },
};
