import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props){
  return (
    <div className="navbar">
      <Link to="/" className="nav-buttons" >
        <button className="button">
          AirDnD
        </button>
      </Link>
      <Link to="/cities" className="nav-buttons">
        <button className="button">
          Cities
        </button>
      </Link>
      <Link to="/new-city" className="nav-buttons" >
        <button className="button">
          Add City
        </button>
      </Link>
    </div>
  )
}

export default Navbar
