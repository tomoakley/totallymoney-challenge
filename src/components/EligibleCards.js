import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';
import _indexOf from 'lodash/indexOf';
import _isEqual from 'lodash/isEqual';
import _clone from 'lodash/clone';

const Block = styled.span`
  display: block;
`;

export default class EligibleCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCards: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  static propTypes = {
    eligibleCards: PropTypes.object,
    customerName: PropTypes.string
  };

  componentWillReceiveProps() {
    this.setState({ selectedCards: [] });
  }

  renderCards() {
    const { eligibleCards, customerName } = this.props;
    const cards = [];
    if (!_isEmpty(eligibleCards)) {
      _forEach(eligibleCards, (card, name) => {
        cards.push(
          <li key={name}>
            <Block><strong>Name</strong>: {name}</Block>
            <Block><strong>APR (%)</strong>: {card.apr * 100}%</Block>
            <Block><strong>Balance Transfer Offer Duration</strong>: {card.balanceTransferOfferDuration}</Block>
            <Block><strong>Purchase Offer Duration</strong>: {card.purchaseOfferDuration}</Block>
            <Block><strong>Credit</strong>: £{card.credit}</Block>
            <div>
              <input id={name} type="checkbox" onChange={this.handleSelection} />
              <label htmlFor={name}>Select</label>
            </div>
          </li>
        );
      });
    } else if (_isEmpty(customerName.trim())) {
      cards.push(<li key={1}>Select a customer to see the cards they are eligible for</li>);
    }
    return cards;
  }

  handleSelection(e) {
    const { selectedCards } = this.state;
    let newSelection = _clone(selectedCards);
    const selectionIndex = _indexOf(selectedCards, e.target.id);
    if (e.target.checked) {
      if (selectionIndex === -1) {
        newSelection.push(e.target.id);
      }
    } else if (selectionIndex > -1) {
      newSelection.splice(selectionIndex, 1);
    }
    console.log(newSelection, selectedCards);
    if (!_isEqual(selectedCards, newSelection)) {
      this.setState({ selectedCards: newSelection });
    }
  }

  renderTotalCredit() {
    const { selectedCards } = this.state;
    let totalCredit = 0;
    _forEach(selectedCards, (card) => {
      totalCredit += this.props.eligibleCards[card].credit;
    });
    return <span><strong>Total Credit available</strong>: £{totalCredit}</span>;
  }

  render() {
    const { customerName } = this.props;
    return (
      <div>
        {customerName ?
          <h2>Eligible cards for {customerName}</h2> :
          ''
        }
        <ul>
          { this.renderCards() }
        </ul>
        { this.renderTotalCredit() }
      </div>
    )
  }

}