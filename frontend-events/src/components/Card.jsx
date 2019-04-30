export default {
  functional: true,

  props: {
    summary: String,
  },

  render(h, context) {
    const { summary } = context.props;

    return (
      <div className="card">{summary}</div>
    );
  },
};
