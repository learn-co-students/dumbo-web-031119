import React from 'react';
import './App.css';
// import cities from './data'
import Home from './Home'
import Navbar from './Navbar'
import Cities from './Cities'
import NewCity from './NewCity'

// http://localhost:3001/api/v1/cities

class App extends React.Component {
  state = {
    page: "cities",
    cities: [],
    loading: true
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/cities")
    .then(res => res.json())
    .then(response => {
      this.setState({loading: false, cities: response})
    })
  }

  changePage = (newPage) => {
    if (this.state.page !== newPage){
      this.setState({page: newPage})
    }
  }

  updateCities = (cityObj) => {
    // NO NO - because it depends on old state
    // this.setState({
    //   cities: [cityObj, ...this.state.cities],
    //   page: "cities"
    // })

    this.setState(prevState => {
      return {
        cities: [cityObj, ...prevState.cities],
        page: "cities"
      }
    })
  }

  renderPage(){
    switch(this.state.page){
      case "home":
        return <Home/>
      case "cities":
        return <Cities cities={this.state.cities}/>
      case "form":
        return <NewCity updateCities={this.updateCities} />
    }
  }

  render(){
    console.log(this.state.cities)
    return (
      <div>
        <Navbar changePage={this.changePage}/>
        {this.state.loading ? <h1>LOADING</h1> : this.renderPage()}
      </div>
    );
  }
}

export default App
