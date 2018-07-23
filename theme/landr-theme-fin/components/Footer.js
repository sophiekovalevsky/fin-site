import React from 'react'
import { Flex, Box, Text, Image } from 'resin-components'
import { Link } from 'landr'
import { withTheme } from 'styled-components'
import get from 'lodash/get'
import resinLogo from '../images/resin.svg'
import images from 'images'

const Footer = ({ repository, ...props }) => {
  return (
    <Box py={3} bg={props.theme.colors.gray.dark} color="white">
      <Flex align="center" justify="center" wrap>
        <Text.span>Balena Fin is a hardware project by</Text.span>
        <Link target to="https://resin.io">
          <Image ml={3} style={{ height: '30px' }} src={resinLogo} />
        </Link>
      </Flex>
    </Box>
  )
}

export default withTheme(Footer)
