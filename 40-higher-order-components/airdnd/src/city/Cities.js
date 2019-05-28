import React from 'react'
import CityCard from './CityCard'
import CityContainer from './CityContainer'

class Cities extends React.Component {
  state = {
    currentCity: null
  }

  changeCity = (cityID) => {
    this.setState({
      currentCity: cityID
    })
  }

  goBack = () => {
    this.setState({
      currentCity: null
    })
  }
  
  renderCityCards() {
    return this.props.cities.map(city => <CityCard changeCity={this.changeCity} key={city.id} {...city} />)
  }

  render(){
    console.log("CITIES PROPS", this.props)
    let selectedCity = this.props.cities.find(city => city.id === this.state.currentCity)

    if (selectedCity){
      return <CityContainer goBack={this.goBack} {...selectedCity}/> 
    } else {
      return (
        <div className="cities">
          {this.renderCityCards()}
        </div>
      )
    }      
  }
}

export default Cities