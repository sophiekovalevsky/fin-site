import React from 'react'
import { withTheme } from 'styled-components'
import get from 'lodash/get'

import { Heading, Text, Banner, Image, Box, Flex } from 'resin-components'
import DownloadButton from 'components/DownloadButton'
import Code from 'components/Code'
import Star from 'components/github-button'
import { Share } from 'react-twitter-widgets'
import { Link, assets } from 'landr'
import heroImg from '../images/balena-render.png'

export default withTheme(props => {
  const getter = key => get(props, key)
  const latestRelease = getter('releases[0]')
  const latestAssets = get(latestRelease, 'assets')
  const version = get(latestRelease, 'tag_name')

  return (
    <Banner
			backgroundImage={heroImg}
			color="white"
			style={{
				minHeight: 'auto',
				height: 640,
				position: 'relative'
			}}
		>
			<Box
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					background: 'rgba(0, 0, 0, 0.5)'
				}}
			/>
      <Heading.h2 align="center" mb={3} style={{zIndex: 1}}>
				Site coming soon...
      </Heading.h2>
    </Banner>
  )
})
