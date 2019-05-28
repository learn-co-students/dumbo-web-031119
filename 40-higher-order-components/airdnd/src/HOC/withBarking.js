import React from 'react'

function withBarking(MyComponent){
  return class Barker extends React.Component {

    state = {
      count: 0
    }

    increaseCount = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }

    render(){
      console.log(this.state)

      if (this.state.count === 5) {
        return <iframe title="advertisement" height="250px" width="425px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      } else {
        return (
          <div onClick={this.increaseCount}>
           <MyComponent {...this.props} />
          </div>
        )
      }
      
    }
  }
}

export default withBarking