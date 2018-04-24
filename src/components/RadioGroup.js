import React from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends React.Component {

  static propTypes = {
    setValue: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      selected: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  renderCheckboxes(name, checked) {
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input type="radio"
               defaultChecked={checked && this.state.selected === '' ? checked : false}
               value={name}
               name="state"
               onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange(event) {
    if (event.target.checked) {
      this.setState({ selected: event.target.value }, () => {
        this.props.setValue('state', this.state.selected);
      });
    }
  }

  render() {
    return (
      <div>
        { this.renderCheckboxes('open', true) }
        { this.renderCheckboxes('all') }
        { this.renderCheckboxes('closed') }
      </div>
    )
  }

}