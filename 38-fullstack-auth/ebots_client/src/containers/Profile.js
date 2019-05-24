import React from 'react'
import { Loader, Grid, Segment, Image, Form, Button } from 'semantic-ui-react'
import UserBots from "../components/UserBots"

class Profile extends React.Component {
	state = {
		user: null,
		balance: 0,
	}
	componentDidMount(){
		const userId = this.props.match.params.id
		fetch(`http://localhost:3001/api/v1/users/${userId}`)
		.then(res => res.json())
		.then(response => {
			this.setState({user: response})
		})
	}

	toggleSale = (botID) => {
		fetch(`http://localhost:3001/api/v1/bots/${botID}/toggle_sale`,{
			method: "PATCH"
		})
		.then(res => res.json())
		.then(response => {
			this.setState((prevState) => {
				let target = prevState.user.bots.find(bot => bot.id === response.id)
				let copy = [...prevState.user.bots]

				let index = copy.indexOf(target)

				copy[index] = response

				return {
					user: {...prevState.user, bots: copy}
				}
			})
		})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		fetch(`http://localhost:3001/api/v1/users/${this.state.user.id}/add_balance`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({balance: this.state.balance})
		})
		.then(res => res.json())
		.then(response => {
			this.setState({
				user: response,
				balance: 0,
			})
		})
	}

	getNewBot = () => {
		fetch(`http://localhost:3001/api/v1/users/${this.state.user.id}/get_bot`, {
			method: "POST",
		})
		.then(res => res.json())
		.then(response => {
			this.setState({
				user: response,
			})
		})
	}

	render(){
		const { user } = this.state

		if(user){
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<Image src={user.avatar_url} fluid />
							<strong>{user.username}</strong><br/>
							<strong>{user.name}</strong>
							<p>Balance: ${user.balance}</p>
							<p>{user.bio}</p>
						</Segment>
						<Segment>
							<Form onSubmit={this.handleSubmit}>
								<Form.Field>
						      <label>Add to your balance!</label>
						      <input type="number" onChange={this.handleChange} name="balance" value={this.state.balance} placeholder='Additional Balance' />
						    </Form.Field>
						    <Button type='submit'>Add</Button>
							</Form>
						</Segment>

					</Grid.Column>
					<Grid.Column width={9}>
						<Segment>
							<Button onClick={this.getNewBot}>Roll the dice!</Button>
							<UserBots bots={user.bots} toggleSale={this.toggleSale}/>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
	}
}

export default Profile