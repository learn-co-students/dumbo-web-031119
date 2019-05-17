import React from 'react'

const HomeCard = (props) => {

  console.log(props)
  
  return (
    <div className="city-card">
      <strong className="centered high">
        <h3>{props.name}</h3>
        <h3>${props.price_per_night} per night</h3>
        <h3>{props.capacity} people</h3>
      </strong>
      <div className="image-wrapper">
        <img className="image" src={props.image_url} alt={props.name}/>
      </div>
    </div>
  )
}

export default HomeCard