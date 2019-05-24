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
	render() {
		return (
			<Grid>
				<Navbar />
				<Grid.Row centered>
					<Switch>
						<Route path="/users/:id" component={Profile} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" component={LoginForm} />
						<Route path="/signup" component={SignupForm} />
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
