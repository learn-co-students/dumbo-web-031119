import React, { Component } from 'react';
import '../assets/App.css';

import Home from '../static/Home'
import Loader from '../static/Loader'

import Navbar from './Navbar'

import Cities from '../city/Cities'
import CityContainer from '../city/CityContainer'
import NewCity from '../city/NewCity'


import { addCities } from '../actions'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount(){
    this.props.addCities()
    .then(() => {
      this.setState({
        loading: false
      })
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

function mapStateToProps(state){
  console.log(state)
  return {reduxCities: state.city.cities}
}


export default connect(mapStateToProps, { addCities })(App)




