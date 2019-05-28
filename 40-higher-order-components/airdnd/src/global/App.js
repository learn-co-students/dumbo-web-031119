import React, { Component } from 'react';
import '../assets/App.css';

import Home from '../static/Home'
import Loader from '../static/Loader'

import Navbar from './Navbar'

import Cities from '../city/Cities'
import CityContainer from '../city/CityContainer'
import NewCity from '../city/NewCity'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    // page: "cities",
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

  // changePage = (newPage) => {
  //   if (this.state.page !== newPage){
  //     this.setState({page: newPage})
  //   }
  // }

  updateCities = (cityObj) => {
    this.setState((prevState) => {
      return {
        cities: [cityObj, ...prevState.cities],
        page: "cities"
      }
    })
  }

  // renderPage(){
  //   switch(this.state.page){
  //     case "home":
  //       return <Home/>
  //     case "cities":
  //       return <Cities cities={this.state.cities}/>
  //     case "form":
  //       return <NewCity updateCities={this.updateCities} />
  //     default:
  //       return <Loader />
  //   }
  // }

  render(){
    // console.log("APP PROPS", this.props)
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route 
            path="/cities/:id"
            render={(routerProps) => {
              console.log("CITYCONTAINER",routerProps)
              // return <h1>This is city: {routerProps.match.params.id}</h1>

              const foundCity = this.state.cities.find(city => city.id === parseInt(routerProps.match.params.id))

              if (foundCity){
                return <CityContainer name={foundCity.name} homes={foundCity.homes} />
              } else {
                return <Loader />
              }

            }}
            />
          <Route 
            path="/cities" 
            render={(routerProps) => <Cities cities={this.state.cities} {...routerProps} />} /> 
          <Route 
            path="/new-city" 
            render={(routerProps) => <NewCity updateCities={this.updateCities} {...routerProps} />} />
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />}/>
        </Switch>
      </div>
    );
  }
}

export default App
