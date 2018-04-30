import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Block = styled.span`
  display: block;
`;

export default class Customer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    customer: PropTypes.object,
    selection: PropTypes.func
  };

  handleClick() {
    this.props.selection(this.props.customer);
  }

  render() {
    const {
      title, firstName, lastName, dob, income, employment, houseNumber, postcode
    } = this.props.customer;
    return (
      <li>
        <Block><strong>Name</strong>: {title} {firstName} {lastName}</Block>
        <Block><strong>Date of birth</strong>: {dob}</Block>
        <Block><strong>Income</strong>: {income}</Block>
        <Block><strong>Employment</strong>: {employment}</Block>
        <Block><strong>House Number</strong>: {houseNumber}</Block>
        <Block><strong>Postcode</strong>: {postcode}</Block>
        <button onClick={this.handleClick}>Select</button>
      </li>
    )
  }

}