# Higher Order Components


## SWBATs
- [x] Describe the relationship between higher-order functions and higher-order components
- [x] Explain composition as an alternative to inheritance
- [x] Create and use a higher-order component to abstract behavior
- [x] Give common examples of higher-order components


## Notes

### Higher-order Functions
Function that takes another function (callback) as an argument
- map
- event handlers (addEventListener in JS, Synthentic Event handlers in React)
- setState
- filter
- forEach

```js
[1,2,3,4].map(element => {
  return element * 2
})
````

Function that returns another function
- bind

- 
Or both!


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


```html
<iframe title="advertisement" height="250px" width="425px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```
