import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {

	state = {
		currentUser: null
	}

	updateUser = (user) => {
		this.setState({
			currentUser: user
		})
	}

	logOut = () => {
		localStorage.removeItem('token')
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}

	componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
			fetch(`http://localhost:3001/api/v1/auto_login`, {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then(response => {
				if (response.errors){
					alert(response.errors)
				} else {
					this.setState({
						currentUser: response
					}, () => {
						this.props.history.push(`/users/${response.id}`)
					})
				}
			})
		}
	}


	setCurrentUser = (data) => {
		localStorage.setItem("token", data.token)
		this.setState({
			currentUser: data.user
		})
	}

	render() {
		console.log(this.state)
			return (
				<Grid>
					<Navbar currentUser={this.state.currentUser} logOut={this.logOut}/>
					<Grid.Row centered>
						<Switch>
							<Route path="/users/:id" component={Profile} />
							<Route path="/shop" render={(routerProps) => <ShopPage updateUser={this.updateUser} {...routerProps}/>} />
							<Route 
								path="/login" 
								render={(routerProps) => {
									return <LoginForm setCurrentUser={this.setCurrentUser} {...routerProps}/>
								}} />
							<Route 
								path="/signup" 
								render={(routerProps) => {
									return <SignupForm setCurrentUser={this.setCurrentUser} {...routerProps}/>
								}} />
						</Switch>
					</Grid.Row>
				</Grid>
			);
		
	}
}

export default App;
