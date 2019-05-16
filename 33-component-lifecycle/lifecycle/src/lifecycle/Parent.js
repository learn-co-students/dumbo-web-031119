import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  render(){
    return (
      <div className="box">
        <p>Parent</p>
        <Child name="child"/>
      </div>
    );
  }
}