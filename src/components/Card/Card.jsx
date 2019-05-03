import './Card.css';

export default {
  name: 'Card',

  functional: true,

  props: {
    summary: String,
    location: String,
    description: String,
  },

  render(h, context) {
    const { summary, location, description } = context.props;

    return (
      <div class="card">
        <div class="card__summary">
          <a class="card__description" href={description}>{summary}</a>
        </div>
        <div class="card__location">{location}</div>
      </div>
    );
  },
};
