import React from 'react'
import Grandchild from './Grandchild'

export default class Child extends React.Component {
  render(){
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}