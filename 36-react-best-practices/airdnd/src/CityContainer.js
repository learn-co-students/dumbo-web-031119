import React from 'react'
import HomesContainer from './HomesContainer'

const CityContainer = (props) => {
  return (
    <div>
      <button onClick={props.goBack}>Go Back</button>
      <h1>Explore {props.name}</h1>
      <HomesContainer homes={props.homes}/>
    </div>
  )
}

export default CityContainer