import React from 'react'

class HogCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState(prevState => {
      return {clicked: !prevState.clicked}
    })
  }

  render(){
    // const fileName = hog.name.toLowerCase().split(" ").join("_")
    const fileName = this.props.name.toLowerCase().replace(/\s/g, "_")

    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const medal = 'highest medal achieved'

    return(
      <div onClick={this.handleClick} className="ui eight wide column">
        <h1>{this.props.name}</h1>
        {
          this.state.clicked ?
            <div>
              <h3>Specialty: {this.props.specialty}</h3>
              <h3>Weight: {this.props[weight]}</h3>
              <h3>Medal: {this.props[medal]}</h3>
            </div>
          :
            <img src={`./hog-imgs/${fileName}.jpg`} alt={this.props.name} />
        }
      </div>
    )
  }
  
}

export default HogCard