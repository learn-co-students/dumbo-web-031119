import React from 'react'

class Ticker extends React.Component {
  render(){
    return (
      <div className="box">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Ticker