import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage'

class ArticleListItem extends React.Component {

  render() {
    return (
      <li className={styles.article_list_item}>
      <article>
      <ArticleImage title={this.props.title} url={this.props.url}/>
      <h1 className={styles.title}>{this.props.title}</h1>
      <p className={styles.short_text}>{this.props.shortText}</p>
      <address className={styles.author}>By: {this.props.author}</address>
      <time dateTime={this.props.year} className={styles.date}>{this.props.date}</time>
      </article>
      </li>
    );
  }
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default ArticleListItem;
