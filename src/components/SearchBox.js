import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class SearchBox extends React.Component {

  static propTypes = {
    setValue: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string
  };

  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(el) {
    this.props.setValue(this.props.name, el.target.value);
  }

  render() {
    return (
      <InputContainer>
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input id={this.props.name}
               name={this.props.name}
               value={this.props.value}
               type="text"
               onBlur={el => this.updateValue(el)}
        />
      </InputContainer>
    )
  }

}