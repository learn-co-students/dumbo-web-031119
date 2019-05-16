import React, { Component } from 'react';


class ClassComponent extends Component {
  // constructor(props){
  //   super()

  //   console.log("CONSTRUCTOR", props.name)

  //   // used to be used for:
  //   // initializing state
  //   // bind our functions to 'this'
  // }

  // static getDerivedStateFromProps(props, state) {

  //   console.log("GDSFP", props.name)

  //   // you can use this method to set state, BUT instead of calling setState, you will return an object that will BECOME state

  //   return null
  // }

  state = {
    beef: "steak"
  }

  handleClick = () => {
    this.setState({
      beef: "burger"
    })
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("DID UPDATE PREV", prevState.beef)
    // console.log("DID UPDATE CURRENT", this.state.beef)

    // you CAN setState BUT you should be careful
    // if (prevState.beef !== this.state.beef){
    //  this.setState()
    // }


  }

  // componentDidMount(){
  //   console.log("DID MOUNT", this.props.name)

  //   // we can setState in this function

  //   // what is this used for?
  //   // pessimistic "rendering" -> only want certain things to happen if the DOM successfully loaded

  //   // fetch data
  //   // start timers (setInterval)
  //   // initialize outside libraries
  //   //
  // }

  render() {
    console.log("RENDER", this.props.name)

    return (
      <div className="box">
        <p onClick={this.handleClick}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}


export default ClassComponent;