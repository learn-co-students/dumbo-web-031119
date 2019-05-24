import React, { Fragment } from 'react'
import SaleList from '../components/SaleList'


class ShopPage extends React.Component {
	state = {
		bots: []
	}

	componentDidMount(){
		fetch("http://localhost:3001/api/v1/bots")
		.then(res => res.json())
		.then(response => {
			this.setState({bots: response})
		})
	}

	selectBot = (botID) => {
		// Get ID from localStorage
		const token = localStorage.getItem('token')
		// Add to request in headers or body
		fetch(`http://localhost:3001/api/v1/bots/${botID}/purchase`, {
			method: "POST",
			headers: {
				"Authorization": token
			}
		})
		.then(res => res.json())
		.then(response => {

			const user = response.user
			const editedBot = response.bot

			const editedBots = this.state.bots.map(bot => {
				if (bot.id === editedBot.id){
					return editedBot
				} else {
					return bot
				}
			})

			this.setState({
				bots: editedBots
			})

			this.props.updateUser(user)

			// this.setState(prevState => {
			// 	let newBots = prevState.bots.filter(bot => bot.id !== response.id)
			// 	return {
			// 		bots: newBots
			// 	}
			// })
		})
	}
	render(){

		const { bots } = this.state
		console.log(bots)
		return (
				<Fragment>
					<SaleList bots={bots} selectBot={this.selectBot}/>
				</Fragment>

		)
	}
}

export default ShopPage