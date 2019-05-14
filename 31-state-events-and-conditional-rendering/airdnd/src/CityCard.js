import React from 'react'

function CityCard(props){
  return (
    <div className="city-card">
      <h3 className="centered">{props.name}</h3>
      <div className="image-wrapper">
        <img className="image" src={props.image_url} alt={props.name}/>
      </div>
    </div>
  )
}

export default CityCard