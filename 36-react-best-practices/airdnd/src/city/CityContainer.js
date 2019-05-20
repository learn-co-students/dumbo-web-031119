import React, { Fragment } from 'react'
import HomesContainer from '../home/HomesContainer'

const CityContainer = ({ goBack = ()=>{}, name = "", homes = [] }) => {
  return (
    <Fragment>
      <button onClick={goBack}>Go Back</button>
      <h1>Explore {name}</h1>
      <HomesContainer homes={homes}/>
    </Fragment>
  )
}

export default CityContainer