import React, { Component } from 'react';
import { css } from 'glamor'
import ChargeSelector from './ChargeSelector';

const main = css({
  fontFamily: "Open Sans, 'sans-serif'",
  margin: '32px',
  textAlign: 'center',
});

const title = css({
  fontSize: '3rem',
  textAlign: 'center',
  fontFamily: "Chivo, 'sans-serif'",
  textTransform: 'uppercase',
});

const Link = (props) => (
  <a {...props} {...css({
    'underline': 'black',
    'color': 'black',
    ':active': {
      color: 'white',
      background: 'black',
    }
  })}>{props.children}</a>
);

class App extends Component {
  render() {
    return (
      <div {...main}>
        <style>{`
          html { font-size: 18px; }
        `}</style>
        <h1 {...title}>Shock me</h1>
        <p>Donate money to charity to instantly electrocute me</p>
        <p>All proceeds go to the <Link href="http://www.givewell.org/charities/against-malaria-foundation">Against Malaria Foundation</Link></p>
        <ChargeSelector/>
      </div>
    );
  }
}

export default App;
