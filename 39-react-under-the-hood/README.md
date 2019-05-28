# React: Under the Hood

## SWBATs
- [ ] Explain how Babel compiles JSX into ordinary JS
- [ ] Explain ReactDOM and the idea of a virtual DOM
- [ ] Explain why React needs the `key` prop on individual components when rendered in an array

## Notes

### The Virtual DOM

```html
<div id="front-page" class="container">
  <h1 id="header" class="greeting">Hello!</h1>
  <div id="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, delectus. Similique quo ab repudiandae, provident voluptatem odit animi fugit perferendis dolorem soluta dignissimos repellat maxime, magnam alias quos odio nostrum?</p>
  </div>
</div>
```

A DOM element basically has three things:

1. Element type -> String
2. Properties -> {}
3. Children -> []

Each of the children is an object containing these same three things. The above HTML could be translated into the following nested objected:

```js
const virtualDOM = {
  type: "div"
  props: {id: "front-page", className: "container"},
  children: [
    {
      type: "h1",
      props: {id: "header", className: "greeting"},
      children: ["Hello!"]
    },
    {
      type: "div",
      props: {id: "description"},
      children: [
        {
          type: "p",
          props: null,
          children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, delectus. Similique quo ab repudiandae, provident voluptatem odit animi fugit perferendis dolorem soluta dignissimos repellat maxime, magnam alias quos odio nostrum?"]
        }
      ]
    }
  ]
}
```
A function to render to this object might look like the following:

```js
function render(object){
  /* 
  If the object is just a string, return it. 
  If it's an object, we should treat it like a DOM element
  */
  if (typeof (object) !== "string") {

  // Identify type of element it is and create it
    const type = object.type
    const element = document.createElement(type)

    // Add properties to the newly created element
    for(var prop in object.props){
      element[prop] = object.props[prop]
    }

    object.children.forEach(child => {
       // Repeat the process recursively for all of this element's children
      const childElement = render(child)

       // Add that newly create child element to the element that is currently being made
      element.append(childElement)
    })
    return element
  } else {
    return object
  }
}

const root = document.getElementById("root")

root.append(render(virtualDOM))
```

[Dan Abramov: React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)

### Optimization in React

#### key prop

For optimization purposes, DOM elements are only rerendered when elements change. React keeps a copy of the old DOM and compares it with the incoming DOM. Anything that remains the same is NOT rerendered, while anything that has changed will be rerendered.

Lists are tricky, especially when they are reordered (e.g. sorted). When doing the comparison, React will see reordered elements as new/different elements and rerender entirely new components. This is inefficient. This is why React yells at you about adding a `key` prop to components rendered in a list. `key` props in React are used to optimize the rerendering phase - React will look for elements in the old DOM and the new that having matching keys and compare them before deciding to rerender that component or simply reorder it in the parent.

[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

[Why you need the key prop to be unique](https://medium.com/@vraa/why-using-an-index-as-key-in-react-is-probably-a-bad-idea-7543de68b17c)