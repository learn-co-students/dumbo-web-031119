import React from 'react';
import './App.css';

//https://robohash.org/<NAME>.png?set=set4&size=200x200
const data = [
  {
    name: "Felix",
    image_url: "https://robohash.org/Felix.png?set=set4&size=200x200"
  },
  {
    name: "Simba",
    image_url: "https://robohash.org/Simba.png?set=set4&size=200x200"
  },
  {
    name: "George",
    image_url: "https://robohash.org/George.png?set=set4&size=200x200"
  },
  {
    name: "Puma",
    image_url: "https://robohash.org/Puma.png?set=set4&size=200x200"
  },
  {
    name: "Yara",
    image_url: "https://robohash.org/Yara.png?set=set4&size=200x200"
  },

  {
    name: "Julius",
    image_url: "https://robohash.org/Julius.png?set=set4&size=200x200"
  },

  {
    name: "Sprinkles",
    image_url: "https://robohash.org/Sprinkles.png?set=set4&size=200x200"
  },

  {
    name: "Ingrid",
    image_url: "https://robohash.org/Ingrid.png?set=set4&size=200x200"
  },

  {
    name: "Rachel",
    image_url: "https://robohash.org/Rachel.png?set=set4&size=200x200"
  },
]
class App extends React.Component {

  state = {
    darkMode: false,
    listView: false,
    coolCats: data,
    name: ""
  }

  // Say we only want one function to be responsible for setting state:
  changeState = (type, payload) => {

    const newState = {...this.state}

    switch(type){
      case "add_cat":
        let newCat =  {
          name: this.state.name,
          image_url: `https://robohash.org/${this.state.name}.png?set=set4&size=200x200`
        }

        newState.coolCats = [...this.state.coolCats, newCat]
        break;
      case "toggle_dark":
        newState.darkMode = !this.state.darkMode
        break;
      case "toggle_list":
        newState.listView = !this.state.listView
        break;
      case "name_change":
        newState.name = payload
        break;
      default: 
        break;
    }

    this.setState(newState)

    // Setting state with message passing ingredients:
    // 1. A type
    // 2. A payload (incoming data)
    // 3. The old state

    // Since there's only one function, how could you figure out in what way to setState?
    // Sometimes you need data to setState: how do you get it?
  }

  render(){
    return (
      <div className={this.state.darkMode ? "dark" : ""}>
        <div className="controls">
          <div>
            <input onChange={(event) => this.changeState("name_change", event.target.value)} value={this.state.name}/>
            <button onClick={() => this.changeState("add_cat")}>Add cat</button>
          </div>
          <button onClick={() => this.changeState("toggle_dark")}>Toggle Dark Mode</button>
          <button onClick={() => this.changeState("toggle_list")}>Toggle List View</button>
        </div>
        <div className={this.state.listView ? "list" : "cards"}>
          {this.renderCats()}
        </div>
      </div>
    );
  }

  renderCats = () => {
    return this.state.coolCats.map(cat => {
      return (
        <div key={cat.name} className="card">
          <div className="image-wrapper">
            <img src={cat.image_url} alt={cat.name} />
          </div>
          <h3>{cat.name}</h3>
        </div>
      )
    })
  }
}

export default App;
