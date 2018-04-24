import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export default class List extends React.Component {

  static propTypes = {
    items: PropTypes.array
  };

  renderItems() {
    const { items } = this.props;
    const listItems = [];
    if (items.length) {
      items.forEach((item, i) => {
        listItems.push(<ListItem name={item.title} url={item['html_url']} id={item.number} key={i}/>);
      });
    } else {
      listItems.push(<li key="1">None found for that query</li>);
    }
    return listItems;
  }

  render() {
    return (
      <Ul>
        { this.renderItems() }
      </Ul>
    )
  }

}