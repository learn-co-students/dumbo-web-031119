import React from 'react'
import HogCard from "./HogCard"

function HogsContainer(props){
  const hogCards = props.hogs.map(hog => {
    return <HogCard key={hog.name} {...hog} />
    // return <HogCard hog={hog} />
  })

  return (
    <div className="ui grid container">
      {hogCards}
    </div>
  )
}

export default HogsContainer