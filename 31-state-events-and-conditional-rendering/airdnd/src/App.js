import React from 'react';
import './App.css';
import cities from './data'
import Home from './Home'
import Navbar from './Navbar'
import Cities from './Cities'
import NewCity from './NewCity'

class App extends React.Component {

  // constructor(props){
  //   super()

  //   this.state = {
  //     page: "home"
  //   }

  //   this.changePage = this.changePage.bind(this)
  // }

  state = {
    page: "home",
  }

  changePage = (newPage) => {
    console.log("CHANGING PAGE", newPage)
    // setState has 2 jobs: 
    // 1. To change the values in state
    // 2. To trigger a rerender
    if (this.state.page !== newPage){
      this.setState({page: newPage})
    }
  }

  renderPage(){
    console.log("RENDER PAGE", this.state)
    switch(this.state.page){
      case "home":
        return <Home/>
      case "cities":
        return <Cities cities={cities}/>
      case "form":
        return <NewCity />
    }
  }

  render(){
    console.log("RENDERING", this.state)
    return (
      <div>
        <Navbar changePage={this.changePage}/>
        {this.renderPage()}
      </div>
    );
  }
}

export default App
