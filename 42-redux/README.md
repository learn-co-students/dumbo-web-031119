Intro to Redux
==============

## SWBATs

### Redux
- [x] Install the redux library so it can be used in a project.
- [x] Create a `store` in redux with some default `state`.
- [x] Create a `reducer` to change `state` based on an `action`.
- [x] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [x] Read `state` in the `store`.
- [ ] Make a connection b/w Redux and one other concept learned in Mods 1-4 (message passing).

### React Redux
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Rethinking in React with Redux

## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!

### React Recap

Don't Like:
Passing props to a lot of components and far down in your component tree
Passing information to cousin/sibling component
Using it wrong

The answer to all of this is Redux!


### From lecture

```js
const defaultState = {
  cats: []
}

// purpose: to set state
// how does it do so: return what you want to become state
function reducer(state = defaultState, action){
  // receives the previous state as 1st argument
  // recieves the action from the call to dispatch
      // 1. type -> used to determine which case to run (HOW do I want to change state)
      // 2. payload -> the incoming data that you want to use to change state
  switch(action.type){
    case "ADD_CAT":
      return {...state, cats: [...state.cats, {id: state.cats.length + 1, name: action.payload}]}
    case "REMOVE_CAT":
      // return Object.assign({}, state, {
      //         cats: state.cats.filter(cat => cat.name !== action.payload)
      //       })
      const newCats = state.cats.filter(cat => cat.name !== action.payload) 
      return {...state, cats: newCats}
    case "EDIT_CAT":
      // const editedCats = [...state.cats]

      // editedCats.forEach(cat => {
      //   if(cat.id === action.payload.id)
      //     cat.name = action.payload.newName
      // })

      // return { ...state, cats: editedCats }
      const editedCats = state.cats.map(cat => cat.id === action.payload.id ? action.payload : cat)
      return {...state, cats: editedCats}
    default:
      return state
  }
}

let store = createStore(reducer)
// dispatch -> tells redux to run the reducer with the specified action (a POJO with a "type" attribute)
store.dispatch({type: "ADD_CAT", payload: "Wakanda"})
store.dispatch({type: "ADD_CAT", payload: "Felix"})
store.dispatch({type: "ADD_CAT", payload: "Jumba"})
// store.dispatch({type: "EDIT_CAT", payload: {id: 3, newName: "Fish is actually better than Beef"}})

store.dispatch({type: 'EDIT_CAT', payload: {id: 1, name: "Dario"}})





// given an id, find a cat and change its name to a passed-in value
// {id: 5, name: "Dario"} => 5, "Beefsteak" => {id:5, name: "Beefsteak"}

// getState -> allows you to read from state
console.log("GETTING STATE ", store.getState())
```


### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)


### Vocabulary
- [ ] Redux
- [ ] state
- [ ] store
- [ ] Single Source of Truth
- [ ] Pure Functions
- [ ] Unidirectional Flow
- [ ] getState()
- [ ] dispatch()
- [ ] action
- [ ] plain object
- [ ] type
- [ ] payload
- [ ] reducer
- [ ] pass by reference
- [ ] mutate
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()
- [ ] ALL_THE_CAPS
