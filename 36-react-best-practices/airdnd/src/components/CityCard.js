import React from 'react'

function CityCard(props){
  function handleClick(){
    props.changeCity(props.id)
  }

  return (
    <div onClick={handleClick} className="city-card">
      <h3 className="centered high">{props.name}</h3>
      <div className="image-wrapper">
        <img className="image" src={props.image_url} alt={props.name}/>
      </div>
    </div>
  )
}

export default CityCard