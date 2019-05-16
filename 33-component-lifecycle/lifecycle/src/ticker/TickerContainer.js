import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0,
  }

  // generates random number between 1 and 100
  generateRandom = () => {
    this.setState({
      value: Math.round(Math.random()*100)
    })
  }

  render(){
    return (
      <div className="box">
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}

export default TickerContainer