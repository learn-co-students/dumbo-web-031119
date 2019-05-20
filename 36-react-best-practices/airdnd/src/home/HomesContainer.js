import React from 'react'
import HomeCard from './HomeCard'

const HomesContainer = (props) => {
  function renderHomeCards(){
    return props.homes.map(home => {
      return <HomeCard key={home.id} {...home} />
    })
  }
  
  return (
    <div className="home-cards">
      {renderHomeCards()}
    </div>
  )
}

export default HomesContainer