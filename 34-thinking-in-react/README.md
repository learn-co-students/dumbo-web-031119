Thinking in React
=================

## SWBAT

- [ ] Write declarative code using `state` & JSX to reflect the DOM
- [ ] Lift state when appropriate
- [ ] Refactor React code
- [ ] Think in React


### Declarative Programming

**One of the central concepts of React** is that we design our `state` to reflect what we see in the DOM. By doing this, any change in `state` results in a change in the DOM. This results in a _declarative_ style of programming whereby _setting state_ (`setState`) is telling the the application what to change. React then "figures out" what needs to change in the DOM for us.

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

### Thinking in React

There are no notes for this. Read [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) from the official docs. There is no better guide.