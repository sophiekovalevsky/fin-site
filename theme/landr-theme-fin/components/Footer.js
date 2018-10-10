import React from 'react';
import { Flex, Box, Text, Image } from 'resin-components';
import { Link } from 'landr';
import styled, { withTheme } from 'styled-components';

import balenaLogo from '../images/balena.svg';
import finLogo from '../images/balena-fin.svg';

import { navigationLinks } from '../helpers';

const MenuLink = styled(Link)`
	&& {
		color: ${props => props.theme.colors.text.main};
		position: relative;
		font-size: 14px;
		font-weight: bold;
		transition: color .1s ease-in;

		&:hover {
			color: ${props => props.theme.colors.primary.main};
			border-color: ${props => props.theme.colors.primary.main}
			&:before {
				opacity: 1;
			}
		}
	}
`;

const Footer = ({ repository, ...props }) => {
	return (
		<Box py={60} bg={props.theme.colors.quartenary.main}>
			<Flex align="center" direction="column" justify="center" wrap>
				<Box mb={50}>
					{navigationLinks.map((entry, i) => (
						<MenuLink
							underline
							mx={3}
							key={i}
							to={entry.link}
							blank={entry.isBlank}
						>
							{entry.text}
						</MenuLink>
					))}
				</Box>
				<Flex align="center" justify="center" w="100%">
					<Image mr={3} style={{ height: '30px' }} src={finLogo} />
					<Text fontSize={12}>is a hardware project by</Text>
					<Link target to="https://balena.io">
						<Image ml={3} style={{ height: '20px' }} src={balenaLogo} />
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default withTheme(Footer);
