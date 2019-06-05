const defaultState = {
  beef: "steak",
  items: [],
  currentUser: null
}


function testReducer(state=defaultState, action){
  console.log("TEST REDUCER", action)

  switch(action.type){
    case "INITIALIZE_APP_DATA":
      return {...state, currentUser: action.payload.user}
    default:
      return state
  }
}

export default testReducer;