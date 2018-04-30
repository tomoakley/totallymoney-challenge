import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Customer from "./Customer";

export default class CustomerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
    this.customerSelection = this.customerSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    customers: PropTypes.array,
    selected: PropTypes.object,
    setSelected: PropTypes.func
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  customerSelection(customer) {
    this.setState({ selected: customer }, () => {
      this.props.setSelected(this.state.selected);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setSelected(this.state.selected);
  }

  renderItems() {
    const { customers } = this.props;
    const customerList = [];
    if (customers && customers.length) {
      customers.forEach((customer, i) => {
        customerList.push(<Customer customer={customer} selection={this.customerSelection} key={i} />);
      });
    } else {
      customerList.push(<span key={1}>No customers found</span>);
    }
    return customerList;
  }

  renderForm() {
    const { selected } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        { _map(selected, (value, label) => this.renderFormElement(label, value)) }
        <button type="submit">Update</button>
      </form>
    );
  }

  renderFormElement(label, value) {
    if (label === 'id') {
      return false
    }
    return (
      <div className="input-group" key={label}>
        <label htmlFor={label}>{label}</label>
        <input id={label} name={label} value={value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange(e) {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.value;
    this.setState({ selected });
  }


  render() {
    return (
      <ul>
        { this.renderItems() }
        { this.renderForm() }
      </ul>
    )
  }

}
