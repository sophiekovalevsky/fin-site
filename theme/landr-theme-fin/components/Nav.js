import React from 'react'
import { withTheme } from 'styled-components'
import { Navbar, Image, Text, Box, Flex, Container } from 'resin-components'

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
    <Box py={2} >
      <Navbar
        align="center"
        brand={<Brand />}
        color="#333"
        bg="white"
      >
        <Link color="#333" to="/docs">
          Docs
        </Link>
        <Link color="#333" to="/getting-started">
          Getting started
        </Link>
        <Link color="#333" to="/datasheet">
          Datasheet
        </Link>
        <Link color="#333" to="https://forums.resin.io/" blank>
          Forums
        </Link>
        <Link color="#333" to="https://store.resin.io/" blank>
          Buy
        </Link>
      </Navbar>
    </Box>
  )
})

export default Nav
