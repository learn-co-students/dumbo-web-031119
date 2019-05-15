import React from 'react';
import './App.css';
import cities from './data'
import Home from './Home'
import Navbar from './Navbar'
import Cities from './Cities'
import NewCity from './NewCity'

class App extends React.Component {
  state = {
    page: "home",
  }

  changePage = (newPage) => {
    if (this.state.page !== newPage){
      this.setState({page: newPage})
    }
  }

  renderPage(){
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
    return (
      <div>
        <Navbar changePage={this.changePage}/>
        {this.renderPage()}
      </div>
    );
  }
}

export default App
