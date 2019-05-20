import React from 'react';
import './assets/App.css';
// import cities from './data'
import Home from './Home'
import Navbar from './Navbar'
import Cities from './containers/Cities'
import NewCity from './NewCity'
import Loader from './Loader'

class App extends React.Component {
  state = {
    page: "cities",
    cities: [],
    loading: true
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/cities")
    .then(res => res.json())
    .then(response => {
      this.setState({loading: false, cities: response})
    })
  }

  changePage = (newPage) => {
    if (this.state.page !== newPage){
      this.setState({page: newPage})
    }
  }

  updateCities = (cityObj) => {
    this.setState(prevState => {
      return {
        cities: [cityObj, ...prevState.cities],
        page: "cities"
      }
    })
  }

  renderPage(){
    switch(this.state.page){
      case "home":
        return <Home/>
      case "cities":
        return <Cities cities={this.state.cities}/>
      case "form":
        return <NewCity updateCities={this.updateCities} />
      default:
        return <Loader />
    }
  }

  render(){
    return (
      <div className="app">
        <Navbar changePage={this.changePage}/>
        {this.state.loading ? <Loader /> : this.renderPage()}
      </div>
    );
  }
}

export default App
