import React, { Fragment } from 'react'
import HomesContainer from '../home/HomesContainer'

const CityContainer = ({ history, name, homes, id }) => {
  return (
    <Fragment>
      <button onClick={() => history.push(`/cities`)}>Go Back</button>
      <h1>Explore {name}</h1>
      <HomesContainer homes={homes}/>
    </Fragment>
  )
}

export default CityContainer