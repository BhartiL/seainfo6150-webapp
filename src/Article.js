import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    return (
    <article>
      <h1>{this.props.title}</h1>
      <datetime>{this.props.date}</datetime>
      <address>{this.props.author}</address>
      <div>{this.props.children}</div>
    </article>
  );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Article;
