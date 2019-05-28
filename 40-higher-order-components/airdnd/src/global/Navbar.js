import React from 'react'
import { Link, Navlink } from 'react-router-dom'

function Navbar(props){
  return (
    <div className="navbar">
      <Link to="/">
        <button 
          className="nav-buttons" >
          AirDnD
        </button>
      </Link>
      <Link to="/cities">
        <button 
          className="nav-buttons" >
          Cities
        </button>
      </Link>
      <Link to="/new-city">
        <button 
          className="nav-buttons" >
          Add City
        </button>
      </Link>
    </div>
  )
}

export default Navbar

