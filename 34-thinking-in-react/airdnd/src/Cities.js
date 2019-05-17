import React from 'react'
import CityCard from './CityCard'

function Cities(props){
  
  let cityCards = props.cities.map(city => <CityCard key={city.id} name={city.name} image_url={city.image_url}/>)

  return (
    <div className="cities">
      {cityCards}
    </div>
  )
}

export default Cities