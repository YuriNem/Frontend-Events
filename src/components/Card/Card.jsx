import './Card.css';

export default {
  name: 'Card',

  props: {
    summary: String,
    location: String,
    description: String,
    dtstart: String,
    dtend: String,
    like: Boolean,
    likeoff: Object,
    likeon: Object,
  },

  methods: {
    checkDates(dtstart, dtend) {
      return dtstart === dtend ? [dtstart] : [dtstart, dtend];
    },

    stringifyDate(date) {
      const monthsNames = [
        'янв.',
        'фев.',
        'мар.',
        'апр.',
        'май',
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
      summary,
      location,
      description,
      dtstart,
      dtend,
      like,
      likeoff,
      likeon,
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
            checked={like}
          />
          <img class="card__img" src={like ? likeon : likeoff} alt="like" />
        </div>
    </a>
    );
  },
};
