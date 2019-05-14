import React from 'react';
import './App.css';
import cities from './data'
import Home from './Home'
import Navbar from './Navbar'
import Cities from './Cities'

class App extends React.Component {

  state = {
    page: "home"
  }

  changePage = (newPage) => {
    this.setState({page: newPage})
  }

  render(){

    return (
      <div>
        <Navbar changePage={this.changePage}/>
        {this.state.page === "cities" ? <Cities cities={cities}/> : <Home/>}
      </div>
    );
  }
}

export default App
