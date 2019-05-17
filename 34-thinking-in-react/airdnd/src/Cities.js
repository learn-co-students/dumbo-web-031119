import React from 'react'
import CityCard from './CityCard'
import CityContainer from './CityContainer'

class Cities extends React.Component {
  state = {
    // clicked: true,
    currentCity: null
  }

  changeCity = (cityID) => {
    // console.log(cityID)

    this.setState({
      currentCity: cityID
    })
  }

  goBack = () => {
    console.log("GOING")
    this.setState({
      currentCity: null
    })
  }
  
  renderCityCards() {
    return this.props.cities.map(city => <CityCard changeCity={this.changeCity} key={city.id} {...city} />)
  }



  render(){

    let foundCity = this.props.cities.find(city => city.id === this.state.currentCity)

    return (
      <div className="cities">
        { foundCity ? 
          <CityContainer goBack={this.goBack} {...foundCity}/> 
          : 
          this.renderCityCards() }
      </div>
    )
  }
}

export default Cities