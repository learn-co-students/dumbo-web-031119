import React from 'react'

class CityCard extends React.PureComponent {

  handleClick = () => {
    this.props.changeCity(this.props.id)
  }

  render(){

    const { image_url, name } = this.props

    return (
      <div onClick={this.handleClick} className="city-card">
        <h3 className="centered high">{name}</h3>
        <div className="image-wrapper">
          <img className="image" src={image_url} alt={name}/>
        </div>
      </div>
    )
  }
}

CityCard.defaultProps = {
  name: "SOME PLACE COOL"
}

export default CityCard