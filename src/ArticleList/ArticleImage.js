import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

class ArticleImage extends React.Component {

  render() {
    return (
      <img src={this.props.url} alt={this.props.title} />
    );
  }
}

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ArticleImage;
