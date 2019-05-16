import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div className="box">
        <p>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}


export default ClassComponent;