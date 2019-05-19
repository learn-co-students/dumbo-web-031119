import React from 'react'
import HomeCard from './HomeCard'

const HomesContainer = (props) => {

  function renderHomeCards(){

    return props.homes.map(home => {
      return <HomeCard {...home} />
    })
  }
  
  return (
    <div className="cities">
      {renderHomeCards()}
    </div>
  )
}

export default HomesContainer