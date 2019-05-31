import React from 'react'
import CityCard from './CityCard'
import { connect } from 'react-redux' 

class Cities extends React.Component {
  changeCity = (cityID) => {
    this.props.history.push(`/cities/${cityID}`)
  }

  
  renderCityCards() {
    return this.props.reduxCities.map(city => <CityCard changeCity={this.changeCity} key={city.id} {...city} />)
  }

  render(){
    return (
      <div className="cities">
        {this.renderCityCards()}
      </div>
    )   
  }
}

function mapStateToProps(state){
  // has access to all of the REDUX state
  // BUT this component (App) only needs the cities
  return {reduxCities: state.cities}
}

export default connect(mapStateToProps)(Cities)