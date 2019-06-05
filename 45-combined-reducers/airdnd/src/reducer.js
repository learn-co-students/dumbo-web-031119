import { ADD_CITIES, CREATE_CITY } from "./types"


const defaultState = {
  cities: [],
}


function reducer(state=defaultState, action){

  console.log("CITY REDUCER", action)

  switch(action.type){
    case ADD_CITIES:
      return {...state, cities: action.payload} 
    case CREATE_CITY:
      return {...state, cities: [...state.cities, action.payload]}
    case "CREATE_HOME":
      return {...state, cities: updateHome(state, action.payload)}
    case "INITIALIZE_APP_DATA":
      return {...state, cities: action.payload.cities}
    default:
      return state
  }
}






function updateHome(state, payload){
  const updatedCity = {...state.cities.find(city => city.id === payload.city_id)}

      const newHomes = updatedCity.homes.map(home => {
        if(home.id === payload.id){
          return payload
        } else {
          return home
        }
      })

      updatedCity.homes = newHomes

      const newCities = state.cities.map(city => {
        if (city.id === updatedCity.id){
          return updatedCity
        } else {
          return city
        }
      })


    return newCities

}



export default reducer