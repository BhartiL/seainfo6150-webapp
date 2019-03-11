import React from 'react';
import PropTypes from 'prop-types';


class Article extends React.Component {
  render() {
    return (
    <article>
    <header>
      <h1>{this.props.title}</h1>
      <time dateTime={new Date(this.props.date).toLocaleString()}>{new Date(this.props.date).toLocaleString()}</time>
      <address>{this.props.author}</address>
    </header>
      <main>{this.props.children}</main>
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
