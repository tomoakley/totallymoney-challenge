export default class Cards {

  cards = {};

  constructor() {
    this.cards = this.list;
  }

  get list() {
    return {
      "studentLife": {
        "apr": 0.189,
        "balanceTransferOfferDuration": 0,
        "purchaseOfferDuration": 6,
        "credit": 1200
      },
      "anywhere": {
        "apr": 0.339,
        "balanceTransferOfferDuration": 0,
        "purchaseOfferDuration": 0,
        "credit": 300
      },
      "liquid": {
        "apr": 0.339,
        "balanceTransferOfferDuration": 12,
        "purchaseOfferDuration": 6,
        "credit": 3000
      }
    };
  }

  getEligibleCards(customer) {
    const eligibleCards = {};
    eligibleCards.anywhere = this.cards.anywhere;
    if (customer.employment === 'student') {
      eligibleCards.studentLife = this.cards.studentLife;
    }
    if (customer.income > 16000) {
      eligibleCards.liquid = this.cards.liquid;
    }
    return eligibleCards;
  }

}