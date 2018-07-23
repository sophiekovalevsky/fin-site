import React from 'react'
import { withTheme } from 'styled-components'
import { Image, Text, Box, Flex, Container } from 'resin-components'

import resinLogo from '../images/resin.svg'
import finLogo from '../images/balenaFin_Final.svg'
import { Link, assets } from 'landr'

const Brand = () => (
	<Box>
		<Image style={{ height: '30px' }} src={finLogo} />
	</Box>
)

const Nav = withTheme(({ repository }) => {
  return (
    <Box
			py={2}
			color="#333"
		>
			<Container>
				<Flex justify="space-between">
					<Brand />

					<Flex>
						<Link p={2} color="#333" to="http://eepurl.com/doIjXX" blank>
							Mailing list
						</Link>
					</Flex>
				</Flex>
			</Container>
    </Box>
  )
})

export default Nav
