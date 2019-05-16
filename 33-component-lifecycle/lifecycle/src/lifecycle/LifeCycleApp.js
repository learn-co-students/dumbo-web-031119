import React from 'react'
import ClassComponent from './ClassComponent'
// import Parent from './Parent'

export default class LifeCycleApp extends React.Component {
  render(){
    return (
      <ClassComponent name="great grandparent">
        <ClassComponent name="grandparent">
          <ClassComponent name="parent">
            <ClassComponent name="child">
              <ClassComponent name="grandchild" />
            </ClassComponent>
          </ClassComponent>
        </ClassComponent>
      </ClassComponent>
    )
  }
}

// export default class LifeCycleApp extends React.Component {
//   render(){
//     return <Parent name="parent"/>
//   }
// }
