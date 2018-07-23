import React from 'react'
import { Container, Flex, Box, Image, Text } from 'resin-components'

export default () => {
	return (
		<Box bg="#eee" py={4}>
			<Container>
				<Flex>
					<Box flex="1">
						<Image mx="auto" src="http://via.placeholder.com/350x350" />
					</Box>
					<Box flex="1">
						<Image mx="auto" src="http://via.placeholder.com/350x350" />
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}
