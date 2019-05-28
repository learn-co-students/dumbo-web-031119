import React, { Component } from 'react';
import '../assets/App.css';

import Home from '../static/Home'
import Loader from '../static/Loader'

import Navbar from './Navbar'

import Cities from '../city/Cities'
import CityContainer from '../city/CityContainer'
import NewCity from '../city/NewCity'

import { Route, Switch, Redirect } from 'react-router-dom'

import withBarking from '../HOC/withBarking'

const BarkingCities = withBarking(Cities)
const BarkingNewCity = withBarking(NewCity)

class App extends Component {
  state = {
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

  updateCities = (cityObj) => {
    this.setState((prevState) => {
      return {
        cities: [cityObj, ...prevState.cities],
        page: "cities"
      }
    })
  }
  render(){
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route 
            path="/cities/:id"
            render={(routerProps) => {
              const foundCity = this.state.cities.find(city => city.id === parseInt(routerProps.match.params.id))
              if (foundCity){
                return <CityContainer {...foundCity} {...routerProps} />
              } else {
                return <Loader />
              }

            }}
            />
          <Route 
            path="/cities" 
            render={(routerProps) => <BarkingCities cities={this.state.cities} {...routerProps} />} /> 
          <Route 
            path="/new-city" 
            render={(routerProps) => <BarkingNewCity updateCities={this.updateCities} {...routerProps} />} />
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />}/>
        </Switch>
      </div>
    );
  }
}

export default App
