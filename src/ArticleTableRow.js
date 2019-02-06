import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
      <tr>
          <td>
            <input name={this.props.slug} type="checkbox" checked={this.state.selected} onClick={this.onClick.bind(this)} />
          </td>
          <td>{selectedStatus}</td>
          <td><address>{this.props.author}</address></td>
          <td><time dateTime="2018">{new Date(this.props.date).toLocaleString()}</time></td>
          <td><section>{this.props.shortText}</section></td>
      </tr>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
