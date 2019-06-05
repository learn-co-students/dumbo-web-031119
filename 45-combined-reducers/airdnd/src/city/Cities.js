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
  return {
    reduxCities: state.city.cities
  }
}

export default connect(mapStateToProps)(Cities)