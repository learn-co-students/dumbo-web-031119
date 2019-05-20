import React from 'react'

class NewCity extends React.Component {

  state = {
    name: "",
    series: "",
    image_url: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3001/api/v1/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      this.props.updateCities(response)
    })
  }

  render(){
     return (
      <div>
        <div className="splash">
          <img className="image" src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/04/04/universe-big-bang.jpg" alt="splash"/>
        </div>
        <div className="centered panel">
          <h1 className="form-header">Add a city</h1>
          <form onSubmit={this.handleSubmit} className="form">
            <input onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" /><br/>
            <input onChange={this.handleChange} value={this.state.series}name="series" placeholder="Series" /><br/>
            <input onChange={this.handleChange} value={this.state.image_url} name="image_url" placeholder="Image" /><br/>
            <input id="city-create-button" type="submit"/>
          </form>
        </div>
      </div>
    )
  }

  componentWillUnmount(){
    // window.location =("https://www.farmersonly.com/")
  }
}

export default NewCity