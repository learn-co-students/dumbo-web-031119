import React from 'react'
import CityCard from './CityCard'

class Cities extends React.Component {
  changeCity = (cityID) => {
    this.props.history.push(`/cities/${cityID}`)
  }

  
  renderCityCards() {
    return this.props.cities.map(city => <CityCard changeCity={this.changeCity} key={city.id} {...city} />)
  }

  render(){
    return (
      <div className="cities">
        {this.renderCityCards()}
      </div>
    )   
  }
}

export default Cities