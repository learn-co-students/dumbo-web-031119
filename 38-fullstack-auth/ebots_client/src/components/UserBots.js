import React from 'react'
import { Table, Icon, Image } from 'semantic-ui-react'

const UserBots = ({ bots, toggleSale }) => {

	function renderBots(){
		return bots.map(bot => {
			return (
				<Table.Row key={bot.id}>
					<Table.Cell>
						<Image src={bot.image_url} avatar />
						{bot.name}
					</Table.Cell>
					<Table.Cell onClick={() => toggleSale(bot.id)}>
						{bot.for_sale ? <Icon name="checkmark" color="green"/> : <Icon name="close" color="red"/>}
					</Table.Cell>
				</Table.Row>
			)
		})
	}
	return(
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Bot</Table.HeaderCell>
					<Table.HeaderCell>For Sale</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{renderBots()}
			</Table.Body>
		</Table>
	)
}

export default UserBots