Intro to React // JSX & Props
=============================

## SWBATs

- [x] Visualize/Identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Briefly explain Babel's purpose in React
- [x] Explain what a React Component actually is in code
- [x] Use JSX to build custom components and render them in the browser

- [x] Understand how `create-react-app` works and what it offers a developer
- [x] Use props to make components more dynamic and reusable
- [x] See how props are to components as arguments are to functions
- [x] Begin to build modular & reusable components

- [ ] Organize code into files and use the import-export syntax to pass code between files
- [ ] Setup a new React app and play around with building UIs
- [ ] **BONUS** Use the `children` prop 


## Declarative vs Imperative Programming

Chipotle
- Grab the bowl/wrap
- Slam some rice into
- Lay down some protein
- Smack down some cheese
- Maybe add guac
- Wrap it

What they ened to know from customer
- Choose tortilla
- Choose rice
- Choose protein
- CHoose salsa
- Choose cheese


How do we add stuff to the page in vanilla JS?
- Use querySelector to find DOM element that will be the parent (find a place to put your new element)
- Create an element
- Add some attributes to that element (id, className, etc.)
- Append new element to parent

```js
  function createCard(header, text){
    const cardContainer = document.querySelector("#card-container")

    cardContainer.innerHTML += `
      <div class="card">
        <h1>${header}</h1>
        <p>${text}</p>
      </div>
    `
  }

  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
  createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
```


AirBnB for fantasy places



## Slow abstraction to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

```jsx
// A regular ol' JS function with arguments <-- THE PAST
function Greeting(phrase, name){
  return <h1>Hello {phrase}! - {name}</h1>
}

// A JSX component using props <-- THE REACT WAY
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
