import React from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.number
  };

  render() {
    return (
      <li className="item">
        <a href={this.props.url}>
          <strong>#{this.props.id}</strong> - {this.props.name}
        </a>
      </li>
    )
  }

}