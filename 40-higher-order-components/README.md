# Higher Order Components


## SWBATs
- [ ] Describe the relationship between higher-order functions and higher-order components
- [ ] Explain composition as an alternative to inheritance
- [ ] Create and use a higher-order component to abstract behavior
- [ ] Give common examples of higher-order components


## Notes

### Higher-order Functions
Functions are first-class citizens
- Functions are treated like any other data type and can be passed around just like anything else

What is it??
- Function that takes another function as an argument
  - `setState`
  - `setInterval`
  - `addEventListener`
  - `map`
  - `forEach`
  - `filter`
  - `then`
- Function that can return a function
  - `bind`
- Or both!


### Higher-order Components

Takes a component and returns a component (usually with modified functionality)

ex: withColorChange

```jsx
import React from 'react'

function withColorChange(MyComponent){
  return class extends React.Component {

    state = {
      clicked: false
    }

    colorChange = () => {
      this.setState({
        clicked: !this.state.clicked
      })
    }

    render(){
      return ( 
        <div onClick={this.colorChange} style={{color: this.state.clicked ? "blue" : "red"}}>
          <MyComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withColorChange
```

### Some examples

- Add the same styling to multiple components
- Add the same props to multiple components (withRouter)
- Add the same conditional rendering to multiple components (withLoading)
- Add the same functionality to multipleComponents using state/component lifecycle methods (withAds)
