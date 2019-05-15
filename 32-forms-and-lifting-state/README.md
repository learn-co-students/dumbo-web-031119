Controlled Forms and Lifting State
======================

## SWBATs

- [x] Write fully controlled forms
- [x] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [x] Pass data up and down the component hierarchy with our callbacks
- [x] Draw a component hierarchy and describe the Flow of Information

## Lecture Notes

### Forms
Vanilla JS
- Event Listener (submit) on the form
- Write a callback for the event listener

```js
form.addEventListener("submit", (event) => {
  // find information from the form
  // involves finding the inputs for that form and ask it for its value
  // take data, do what you needd
})
```

React
- Coordinate our state with the form using an `onChange`
- Coordinate the form with our state using the `value` attribute on our inputs
- Use `onSubmit` to finally send our state data to wherever it needs to go

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
