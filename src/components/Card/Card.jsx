import './Card.css';

export default {
  name: 'Card',

  functional: true,

  props: {
    summary: String,
  },

  render(h, context) {
    const { summary } = context.props;

    return (
      <div class="card">{summary}</div>
    );
  },
};
