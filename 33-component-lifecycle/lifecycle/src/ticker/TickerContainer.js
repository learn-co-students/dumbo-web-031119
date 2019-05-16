import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0,
  }

  // I want to generate a random number every second
  // setInterval => call generateRandom and set to 1000 ms
  // where? => 

  start = () => {
    this.timer = setInterval(this.generateRandom, 1000)
  }

  stop = () => {
    clearInterval(this.timer)
  }

  componentDidMount(){
    this.start()
  }

  // generates random number between 1 and 100
  generateRandom = () => {
    console.log("GENERATING")
    this.setState({
      value: Math.round(Math.random()*100)
    })
  }

  render(){
    return (
      <div className="box">
        <button onClick={this.stop} >Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }

  componentWillUnmount(){
    this.stop()
  }

}



export default TickerContainer