import React, { Component } from 'react';
import '../assets/App.css';

import Home from '../static/Home'
import Loader from '../static/Loader'

import Navbar from './Navbar'

import Cities from '../city/Cities'
import NewCity from '../city/NewCity'

class App extends Component {
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
    this.setState((prevState) => {
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
      default:
        return <Loader />
    }
  }

  render(){
    return (
      <div className="app">
        <Navbar changePage={this.changePage}/>
        {this.state.loading ? <Loader /> : this.renderPage()}
      </div>
    );
  }
}

export default App
