Intro to Redux
==============

## SWBATs

### Redux
- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.
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
