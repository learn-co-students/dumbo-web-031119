import React from 'react'

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

export default HomeCard