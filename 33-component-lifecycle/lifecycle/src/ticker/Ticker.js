import React from 'react'

// ↑ ↓😀 😞
class Ticker extends React.Component {

  state = {
    color: "black",
    symbol: "😐"
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.value > this.props.value){
      this.setState({
        color: "red",
        symbol: "😞"
      })
    } else if(prevProps.value < this.props.value) {
      this.setState({
        color: "green",
        symbol: "😀"
      })
    } else {
      // the numbers values are equal
      // don't do anything
    }
  }

  // static getDerivedStateFromProps(state, props){

  // }


  render(){
    return (
      <div style={{color: this.state.color}} className="box">
        <h1>{this.props.value} {this.state.symbol}</h1>
      </div>
    );
  }
}

export default Ticker