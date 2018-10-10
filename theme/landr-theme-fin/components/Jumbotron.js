import React from 'react';
import styled, { withTheme } from 'styled-components';
import get from 'lodash/get';
import {
	Container,
	Heading,
	Banner,
	Image,
	Box,
	Flex,
	Text,
	Link,
} from 'resin-components';
import Button from '../components/Button';

import board1x from '../images/board@1x.png';
import board2x from '../images/board@2x.png';
import board3x from '../images/board@3x.png';
import bg from '../images/hero-bg.svg';

const HeroBanner = styled(Banner)`
	display: block;
	background-image: url(${bg});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: 100% -50%;

	@media all and (max-width: ${props => props.theme.breakpoints[2]}em) {
		background-image: linear-gradient(
			157deg,
			rgba(255, 255, 255, 0.5),
			rgba(210, 174, 225, 0.69) 24%,
			#8a2cb0
		);
		text-align: center;
		padding-bottom: 24px;
	}
`;

export default withTheme(props => {
	const getter = key => get(props, key);

	return (
		<HeroBanner mb={80}>
			<Container pt={140} color="white">
				<Flex justify="center">
					<Box width={[1, 1, 1, 5 / 6]}>
						<Box width={[1, 1, 1, 1 / 2]} mb={[30, 30, 0]}>
							<Heading.h1 fontSize={[30, 35, 45, 52]} mb={25}>
								{getter('settings.lead')}
							</Heading.h1>
						</Box>
						<Flex mx={-10} wrap>
							<Box width={[1, 1, 1, 2 / 5]} px={10} mb={40}>
								<Text
									fontSize={16}
									pr={[0, 0, '25%', '40%']}
									style={{ lineHeight: '1.6' }}
								>
									{getter('settings.description')}
								</Text>
								<Button round primary outline borderless mt={5}>
									<Link as="Button" mx={3} href="https://store.resin.io/" blank>
										Order now
									</Link>
								</Button>
							</Box>
							<Flex
								width={[1, 1, 1, 3 / 5]}
								px={10}
								mt={[0, 0, 0, -40]}
								justify="center"
							>
								<Box width={[1, 2/3, 2/3, 1]}>
									<Image
										alt="Fin Board"
										src={board1x}
										srcSet={`${board1x} 1x,
               ${board2x} 2x,
               ${board3x} 3x,
               `}
									/>
								</Box>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Container>
		</HeroBanner>
	);
});
