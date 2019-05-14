import React from 'react'

function Navbar(props){
  return (
    <div className="navbar">
      <button 
        className="nav-buttons" 
        onClick={(event) => {props.changePage("home")}}>
        AirDnD
      </button>
      <button 
        className="nav-buttons" 
        onClick={(event) => {props.changePage("cities")}}>
        Cities
      </button>
    </div>
  )
}

export default Navbar

