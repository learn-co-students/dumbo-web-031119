import React from 'react'
import CityCard from '../components/CityCard'
import CityContainer from '../components/CityContainer'

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