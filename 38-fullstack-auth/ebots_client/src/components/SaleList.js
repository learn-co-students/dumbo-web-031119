import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const SaleList = ({ bots, selectBot }) => {

	function renderBots(){
		return bots.map(bot => {
			return (
				<Card key={bot.id}>
					<Card.Content>
						<Image src={bot.image_url} floated='right' size='small'/>
		        <Card.Header>{bot.name}</Card.Header>
		        <Card.Meta>Owner: {bot.owner.username}</Card.Meta>
		        <Card.Description>
							<p>Price: ${bot.price}</p>
							<Button color="green" onClick={()=> selectBot(bot.id)}>Buy {bot.name}!</Button>
		        </Card.Description>
		      </Card.Content>
				</Card>
			)
		})
	}
	return(
		<Card.Group centered>
	      {renderBots()}
	  </Card.Group>
	)
}

export default SaleList