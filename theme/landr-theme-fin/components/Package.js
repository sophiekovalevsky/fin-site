import React from 'react';
import { Box, Flex, Container, Link, Image, Heading } from 'resin-components';
import styled, { withTheme } from 'styled-components';
import Button from './Button';

import finLogo from '../images/balena-fin.svg';
import kit1x from '../images/kit@1x.png';
import kit2x from '../images/kit@2x.png';
import kit3x from '../images/kit@3x.png';

const StyledLink = styled(Link)`
	&& {
		color: #fff;
		&:hover{
			color: #fff;
		}
	}
`

const Package = props => {
	return (
		<Box bg={props.theme.colors.quartenary.main} my={40}>
			<Container py={60}>
				<Flex justify="center">
					<Flex width={5 / 6} align="center" wrap>
						<Flex width={[1, 1, 2 / 5]} mb={16} justify='center'>
							<Image
								alt="Developer kit"
								src={kit1x}
								srcSet={`${kit1x} 1x,
               ${kit2x} 2x,
               ${kit3x} 3x,
               `}
							/>
						</Flex>
						<Flex direction='column' width={[1, 1, 3 / 5]} align='center'>
							<Box mb={40}>
								<Image style={{ height: '40px' }} src={finLogo} />
							</Box>
							<Box mb={40}>
								<Heading.h1 fontSize={34} align='center'>
									Everything you need to get started
								</Heading.h1>
							</Box>
							<Button round primary borderless>
								<StyledLink mx={3} color="white" blank href="https://store.resin.io/">
									Developer Kit
								</StyledLink>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default withTheme(Package);
