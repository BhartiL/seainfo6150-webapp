import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

class Header extends React.Component {

  render() {
    return (
      <header class={styles.flex_container}>
      <h1>The INFO6150 News</h1>
      <time dateTime='2019'>Wed, February 20, 2019</time>
      </header>
    );
  }
}

Header.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
