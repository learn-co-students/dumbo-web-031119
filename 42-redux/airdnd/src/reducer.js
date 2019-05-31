// 1. Create a reducer
function reducer(state=defaultState, action){
  // console.log(action)
  // switch(action.type){
  //   case "ADD_CITIES":
  //     return {...state, cities: action.payload} 
  //   default:
  //     return state
  // }

  const actions = {
    ADD_CITIES: () => {
      return {...state, cities: action.payload} 
    }
  }

  return actions[action.type] ? actions[action.type]() : state
}

//somewhere deep in redux land....
// state = reducer(oldState, action)

// 1.5. define default state
const defaultState = {
  cities: [],
  currentUser: null
}


export default reducer