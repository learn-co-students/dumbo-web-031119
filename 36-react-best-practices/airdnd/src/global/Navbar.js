import React from 'react'

function Navbar(props){
  return (
    <div className="navbar">
      <button 
        className="nav-buttons" 
        onClick={() => {props.changePage("home")}}>
        AirDnD
      </button>
      <button 
        className="nav-buttons" 
        onClick={() => {props.changePage("cities")}}>
        Cities
      </button>
      <button 
        className="nav-buttons" 
        onClick={()=> { 
          props.changePage("form")
        }}>
        Add City
      </button>
    </div>
  )
}

export default Navbar

