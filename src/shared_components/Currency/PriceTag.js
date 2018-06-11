// NPM
import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const PriceWrap = styled.div`
  // display: flex;
`;

const Price = styled.span`
  font-size: ${props => (props.size === "big" ? "24px" : "18px")};
  font-weight: 500;
`;

const Unit = styled.span`
  font-size: 11px;
`;

// MODULE

class PriceTag extends Component {
  calculatePrice() {
    let priceInBitcoin = (1 / this.props.baseCurrency.rates.USD) * this.props.price;

    switch (this.props.baseCurrency.value) {
      case 'USD':
        return this.props.price;
      case 'BTC':
        return priceInBitcoin.toFixed(8)
      case 'ETH':
        return (priceInBitcoin * this.props.baseCurrency.rates[this.props.baseCurrency.value]).toFixed(4)
      default:
        return (priceInBitcoin * this.props.baseCurrency.rates[this.props.baseCurrency.value]).toFixed(2);
    }
  }

  render() {
    return (
      <PriceWrap>
        <Price size={this.props.size}>
          {this.calculatePrice()}
          {this.props.baseCurrency.label}
        </Price>
        {this.props.unit !== "hidden" &&
         <Unit> / person</Unit>
        }
      </PriceWrap>
    );
  }
}


const mapStateToProps = state => {
  return{
    baseCurrency: state.SessionsReducer.baseCurrency
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceTag);