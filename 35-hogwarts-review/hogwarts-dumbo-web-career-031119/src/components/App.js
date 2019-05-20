import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

  // unsorted, sorted by weight, sorted by name

  state = {
    // sort: null, // null, "weight", "name",
    hogs: hogs
  }

  // handleChange = (event) => {
  //   const newVal = event.target.value === "None" ? null : event.target.value
  //   this.setState({
  //     sort: newVal
  //   })
  // }

  // sortHogs = () => {
  //   switch (this.state.sort){
  //     case 'Weight':
  //       return [...hogs].sort((h1, h2) => {
  //         let comparison = 0

  //         if (h1[weight] > h2[weight]){
  //           comparison = 1
  //         } else if (h1[weight] < h2[weight]){
  //           comparison = -1
  //         }

  //         return comparison
  //       })
  //     case 'Name':
  //       return [...hogs].sort((h1, h2) => {
  //         let comparison = 0

  //         if (h1.name.toLowerCase() > h2.name.toLowerCase()){
  //           comparison = 1
  //         } else if (h1.name.toLowerCase() < h2.name.toLowerCase()){
  //           comparison = -1
  //         }

  //         return comparison
  //       })
  //     case null:
  //       return hogs
  //   }
  // }

  handleChange = (event) => {
    let newHogs;
    switch (event.target.value){
      case 'Weight':
          newHogs = [...this.state.hogs].sort((h1, h2) => {
            let comparison = 0

            if (h1[weight] > h2[weight]){
              comparison = 1
            } else if (h1[weight] < h2[weight]){
              comparison = -1
            }

            return comparison
          })

         this.setState({
          hogs: newHogs
         })
         break;
      case 'Name':
        newHogs = [...this.state.hogs].sort((h1, h2) => {
          let comparison = 0

          if (h1.name.toLowerCase() > h2.name.toLowerCase()){
            comparison = 1
          } else if (h1.name.toLowerCase() < h2.name.toLowerCase()){
            comparison = -1
          }

          return comparison
        })
        this.setState({
          hogs: newHogs
        })
        break;
      case null:
        this.setState({
          hogs: hogs
        })
        break;
    }
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Nav />
          <select onChange={this.handleChange}>
            <option>None</option>
            <option value="Weight">Weight</option>
            <option value="Name">Name</option>
          </select>
          <HogsContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
