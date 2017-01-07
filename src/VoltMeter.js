import React, { Component } from 'react';
import { css } from 'glamor'
import ReactSlider from 'react-slider';
import './VoltMeter.css';

const voltMeter = css({
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
});

class VoltMeter extends Component {
  render() {
    return (
      <div {...voltMeter}>
        <ReactSlider
            className="horizontal-slider"
            defaultValue={50}
            onChange={this.props.onChange}
            value={this.props.value}
            withBars
        />
      </div>
    );
  }
}

export default VoltMeter;
