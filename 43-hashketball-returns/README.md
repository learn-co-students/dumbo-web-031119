# Hashketball Returns!

We want to see what changes need be made to make a React app into a React-Redux app, and what changes DON'T need to be made. 


## Initial Setup

1. Create and import reducer into `index.js`
2. User reducer to create the store
3. Import and wrap `App` with `Provider` and pass the store as a prop to provider

## Reading from state

1. Import `connect`
2. Write a `mapStateToProps` function that will add bits of redux state to your component's props
3. Pass `mapStateToProps` as the first argument to the first call of `connect`
4. Pass the component as the argument to the second call of `connect`

## Writing to state

1. Import `connect`
2. Write a `mapDispatchToProps` function that will add functions that call `dispatch` to your component's props
  a. `dispatch` should be called with a POJO with an attribute of `type` as its argument, as well as an attribute containing the payload.
3. Pass `mapDispatchToProps` as the second argument to the first call of `connect`
4. Pass the component as the argument to the second call of `connect`
5. Write a new case into your reducer's switch statement to match the `type` attribute of your new action, and make sure to return a modified version of state