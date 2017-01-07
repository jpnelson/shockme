import React, { Component } from 'react';
import { css } from 'glamor';
import VoltMeter from './VoltMeter';

const button = css({
  fontSize: '2rem',
  textAlign: 'center',
  borderRadius: '5px',
  border: '3px solid transparent',
  boxSizing: 'border-box',
  background: 'black',
  color: 'white',
  fontFamily: "Chivo, 'sans-serif'",
  textTransform: 'uppercase',
  ':active': {
    color: 'black',
    background: 'white',
  },
});

const chargeSelector = css({
    height: '25vh',
});

const minVolts = 50;
const maxVolts = 450;

function voltsToDollars(volts) {
  return Math.round(volts * 9 / 200 - 1/4);
}

class ChargeSelector extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 50,
      }
    }

    getVolts() {
      return this.state.value / 100 * (maxVolts - minVolts) + minVolts;
    }

    getPrice() {
      return voltsToDollars(this.getVolts());
    }

    render() {
      return (
        <div {...chargeSelector}>
          <VoltMeter
              value={this.state.value}
              onChange={(value) => {
                  this.setState({
                      value,
                  });
              }}
          />
          <h2>{this.getVolts()} volts at 4ma</h2>
          <button {...button}>Donate ${this.getPrice()}</button>
        </div>
      );
    }
}

export default ChargeSelector;
