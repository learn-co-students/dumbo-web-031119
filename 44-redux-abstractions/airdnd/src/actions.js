import { ADD_CITIES, CREATE_CITY } from "./types"

// export function addCities(cities){
//   // all this function does is return an object which will be used as an action
//   return {type: ADD_CITIES, payload: cities}
// }

export function addCities(){
  return function(dispatch){
    // whatever is returns from the inner function is what will be returns when the function is called in component
    return fetch("http://localhost:3001/api/v1/cities")
    .then(res => res.json())
    .then(response => {
      dispatch({type: ADD_CITIES, payload: response})
    })
  }
}

export function createCity(formData){
  return function(dispatch){
      return fetch("http://localhost:3001/api/v1/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Accepts": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(response => {
        dispatch({type: CREATE_CITY, payload: response})
      })

  }
}

export function createHome(home){
  return {type: "CREATE_HOME", payload: home}
}


// export function whatever(){
//   return function(dispatch){
      
//   }
// }



