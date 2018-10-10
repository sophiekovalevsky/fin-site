import React from 'react';
import { Box, Flex, Container, Heading, Link } from 'resin-components';
import styled, { withTheme } from 'styled-components';
import Button from './Button';

const StyledLink = styled(Link)`
	&& {
		color: #fff;
		&:hover {
			color: #fff;
		}
	}
`;

const NeedHelp = props => {
	return (
		<Container py={60} mb={60}>
			<Flex justify="center">
				<Flex
					width={5 / 6}
					py={64}
					px={20}
					direction="column"
					justify="center"
					align="center"
					bg={props.theme.colors.secondary.main}
					style={{ borderRadius: '18px' }}
				>
					<Box mb={30}>
						<Heading.h2 fontSize={24} align="center">
							Need help? Check out our community
						</Heading.h2>
					</Box>
					<Button round primary borderless>
						<StyledLink
							mx={3}
							blank
							href="https://forums.resin.io/c/balena-fin"
						>
							See forums
						</StyledLink>
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
};

export default withTheme(NeedHelp);
