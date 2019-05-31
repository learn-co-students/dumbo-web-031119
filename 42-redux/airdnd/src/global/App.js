import React, { Component } from 'react';
import '../assets/App.css';

import Home from '../static/Home'
import Loader from '../static/Loader'

import Navbar from './Navbar'

import Cities from '../city/Cities'
import CityContainer from '../city/CityContainer'
import NewCity from '../city/NewCity'

import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/cities")
    .then(res => res.json())
    .then(response => {
      this.props.addCities(response)
      this.setState({loading: false})
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
    console.log("APP props", this.props)
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route 
            path="/cities/:id"
            render={(routerProps) => {
              const foundCity = this.props.reduxCities.find(city => city.id === parseInt(routerProps.match.params.id))
              if (foundCity){
                return <CityContainer {...foundCity} {...routerProps} />
              } else {
                return <Loader />
              }

            }}
            />
          <Route 
            path="/cities" 
            render={(routerProps) => <Cities {...routerProps} />} /> 
          <Route 
            path="/new-city" 
            render={(routerProps) => <NewCity updateCities={this.updateCities} {...routerProps} />} />
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />}/>
        </Switch>
      </div>
    );
  }
} // end of class

// we will take some values from state and ADD it to the component's props
function mapStateToProps(state){
  // has access to all of the REDUX state
  // BUT this component (App) only needs the cities
  return {reduxCities: state.cities}
}

// this will be used to write to state
function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    addCities: (cities) => {
      // console.log("addCities called!!!", cities)

      dispatch({type: "ADD_CITIES", payload: cities})
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




