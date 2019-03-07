import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class Header extends React.Component {

  render() {
    return (
      <footer>
      <address>&copy;2019, April Bingham</address>
      </footer>
    );
  }
}

Header.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
