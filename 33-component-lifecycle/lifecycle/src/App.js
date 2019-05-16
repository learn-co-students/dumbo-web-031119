import React from 'react';
import './App.css';
// import LifeCycleApp from "./lifecycle/LifeCycleApp"
import TickerContainer from "./ticker/TickerContainer"

class App extends React.Component {

  state = {
    display: true,
    // off: true
  }

  // turnOn = () => {
  //   this.setState({off: false})
  // }


  toggleTicker = () => {
    this.setState(prevState => {
      return {
        display: !prevState.display
      }
    })
  }

  render(){
    return (
      <div className="App">
         <button onClick={this.toggleTicker}>Toggle</button>
        {/*this.state.off ? null : <h1>IT'S OFF</h1>*/}
        {this.state.display ? <TickerContainer turnOn={this.turnOn}/> : null}
      </div>
    );
  }
  
}

export default App;
