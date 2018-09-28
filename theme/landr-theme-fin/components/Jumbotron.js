import React from 'react';
import { withTheme } from 'styled-components';
import get from 'lodash/get';

import {  Button, Heading, Banner, Image, Box, Flex } from 'resin-components';
import {  Link } from 'landr';
import heroImg from '../images/fin-board-hero.png';
import finLogo from '../images/balena-fin-white.svg';

const Brand = () => (
	<Box>
		<Image style={{ height: '100px' }} src={finLogo} />
	</Box>
);

export default withTheme(props => {
	const getter = key => get(props, key);

	return (
		<Banner
			py={3}
			backgroundImage={`.${heroImg}`}
			color="white"
			style={{
				minHeight: 'auto',
				height: 640,
				position: 'relative',
			}}
		>
			<Box
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					background: 'rgba(0, 0, 0, 0.5)',
				}}
			/>
			<Flex direction='column' align='center' style={{ zIndex: 1 }}>
				<Brand />
				<Heading.h2 align="center" my={3}>
					{getter('settings.lead') ||
						getter('repository.description') ||
						getter('repository.name')}
				</Heading.h2>
				<Button primary mt={5}>
					<Link color='white' mx={3} to="https://store.resin.io/" blank>
						Order now
					</Link>
				</Button>
			</Flex>
		</Banner>
	);
});
