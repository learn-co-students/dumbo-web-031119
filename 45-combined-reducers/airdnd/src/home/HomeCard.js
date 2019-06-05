import React from 'react'
import { createHome } from '../actions'
import { connect } from 'react-redux'

class HomeCard extends React.Component { 

  state = {
    editMode: false,
    name: this.props.name,
    price_per_night: this.props.price_per_night,
    image_url: this.props.image_url,
    capacity: this.props.capacity,
    address: this.props.address,
  } 

  flipCard = () => {
    this.setState(prevState => {
      return {editMode: !prevState.editMode}
    })
  }

  renderFront = () => {
    return (
      <div onClick={this.flipCard}>
        <div  className="image-wrapper">
          <img className="image" src={this.props.image_url} alt={this.props.name}/>
        </div>
        <strong className="city-card-text">
          <p>{this.props.name}</p>
          <p>${this.props.price_per_night} per night</p>
          <p>{this.props.capacity} people</p>
        </strong>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { name, price_per_night, image_url, capacity, address } = this.state

    fetch(`http://localhost:3001/api/v1/homes/${this.props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({name, price_per_night, image_url, capacity, address})
    })
    .then(res => res.json())
    .then(data => {
      this.props.createHome(data)
      this.setState({
        editMode: false
      })
    })
  }

  renderBack = () => {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <input 
              onChange={this.handleChange} 
              value={this.state.name} 
              name="name" 
              placeholder="Name"/><br/>
            <input 
              onChange={this.handleChange}
              value={this.state.address}
              name="address"
              placeholder="Address"/><br/>
            <input 
              onChange={this.handleChange}
              value={this.state.image_url}
              name="image_url"
              placeholder="Image"/><br/>
            <input 
              onChange={this.handleChange}
              value={this.state.price_per_night}
              name="price_per_night"
              placeholder="Price"/><br/>
            <input 
              onChange={this.handleChange}
              value={this.state.capacity}
              name="capacity"
              placeholder="Capacity"/><br/>
            <input id="city-create-button" type="submit"/>
          </form>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div className="city-card">
        {
          this.state.editMode 
          ? 
          this.renderBack() 
          :
          this.renderFront()
        }
      </div>
    )
  }
}

export default connect(null, { createHome })(HomeCard)