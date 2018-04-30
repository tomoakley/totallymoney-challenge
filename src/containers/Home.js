import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import CustomerList from "../components/CustomerList";
import CustomersService from "../services/Customers";
import CardsService from '../services/Cards';
import EligibleCards from "../components/EligibleCards";

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      customers: [],
      selected: {
        id: 0,
        title: '',
        firstName: '',
        lastName: '',
        dob: '',
        income: '',
        employment: '',
        houseNumber: '',
        postcode: ''
      },
      eligibleCards: {}
    };
    this.getCustomerDetails = this.getCustomerDetails.bind(this);
  }

  componentWillMount() {
    const customers = new CustomersService().list;
    this.setState({ customers });
  }

  getCustomerDetails(customerDetails) {
    this.setState({ selected: customerDetails }, () => {
      this.setState({ eligibleCards: new CardsService().getEligibleCards(this.state.selected) });
    });
  }

  render() {
    const { selected } = this.state;
    const customerName = !_isEmpty(selected) ? `${selected.title} ${selected.firstName} ${selected.lastName}` : '';
    return (
      <div>
        <CustomerList customers={this.state.customers} setSelected={this.getCustomerDetails} selected={this.state.selected} />
        <EligibleCards eligibleCards={this.state.eligibleCards} customerName={customerName} />
      </div>
    )
  }

}