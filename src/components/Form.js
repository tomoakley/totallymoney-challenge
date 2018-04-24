import React from 'react';
import styled from 'styled-components';
import _forEach from 'lodash/forEach';
import PropTypes from 'prop-types';
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";
import RadioGroup from './RadioGroup';

const FormGroup = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export default class Form extends React.Component {

  static propTypes = {
    setQueryParams: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      textInputs: {
        milestone: '',
        assignee: '',
        creator: '',
        mentioned: '',
        labels: '',
        sort: '',
        direction: '',
        since: ''
      },
      checkboxes: {
        state: ''
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.setTextboxValue = this.setTextboxValue.bind(this);
    this.setRadioValue = this.setRadioValue.bind(this);
  }

  setTextboxValue(state, value) {
    this.setState({ textInputs: { ...this.state.textInputs, [state]: value } });
  }

  setRadioValue(state, value) {
    this.setState({ checkboxes: { ...this.state.checkboxes, [state]: value }})
  }

  onSubmit(event) {
    event.preventDefault();
    const queryParams = {
      ...this.state.textInputs,
      ...this.state.checkboxes
    };
    this.props.setQueryParams(queryParams);
  }

  renderSearchBoxes() {
    const { textInputs } = this.state;
    const inputs = [];
    _forEach(textInputs, (value, key) => {
      inputs.push(<SearchBox setValue={this.setTextboxValue} name={key} key={key} />);
    });
    return inputs;
  }

  render() {
    return (
      <FormGroup onSubmit={this.onSubmit}>
        { this.renderSearchBoxes() }
        <RadioGroup setValue={this.setRadioValue} />
        <SearchButton />
      </FormGroup>
    )
  }

}