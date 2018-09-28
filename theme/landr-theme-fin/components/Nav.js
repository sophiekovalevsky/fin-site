import React from 'react';
import { withTheme } from 'styled-components';
import {
	Image,
	Box,
	Flex,
	Container,
	Text,
	DropDownButton,
} from 'resin-components';

import resinLogo from '../images/resin-black.svg';
import finLogo from '../images/balena-fin.svg';

import { Link, assets } from 'landr';
import styled from 'styled-components';

const navigationLinks = [
	{
		text: 'Docs',
		link: '/docs',
	},
	{
		text: 'Getting Started',
		link: '/docs/getting-started',
	},
	{
		text: 'Datasheet',
		link: assets['balenaFin_datasheet'],
		isBlank: true,
	},
	{
		text: 'Forums',
		link: 'https://forums.resin.io/c/balena-fin',
		isBlank: true,
	},
	{
		text: 'Store',
		link: 'https://store.resin.io/',
		isBlank: true,
	},
];

const Brand = () => (
	<Box>
		<Image style={{ height: '40px' }} src={finLogo} />
	</Box>
);

const MenuLink = styled(Link)`
	&& {
		color: ${props => props.theme.colors.text.main};
		position: relative;
		transition: color .1s ease-in;

		&:before {
			content: ${props => (props.underline ? ' ' : 'none')};
			position: absolute;
			left: 0;
			right: 0;
			bottom: -4px;
			opacity: 0;
			transition: opacity .1s ease-in;
			border: 1px solid ${props => props.theme.colors.primary.main};
		}
		&:hover {
			color: ${props => props.theme.colors.primary.main};
			border-color: ${props => props.theme.colors.primary.main}
			&:before {
				opacity: 1;
			}
		}
	}
`;

const StickyHeader = styled(Box)`
	&& {
		position: sticky;
		top: 0;
		background: #fff;
		z-index: 2;
		box-shadow: 0 0 2px 1px #efefef;
	}
`;

const MobileNavigation = styled(DropDownButton)`
	display: none;
	@media all and (max-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
`;

const DesktopNavigation = styled(Flex)`
	display: none;
	@media all and (min-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
`;

const Nav = withTheme(() => {
	return (
		<StickyHeader py={2}>
			<Container>
				<Flex justify="space-between" align="center" p={2}>
					<Box>
						<Flex wrap mb={1}>
							<Text.span fontSize={1}>a hardware project by</Text.span>
							<Link target to="https://resin.io">
								<Image ml={2} style={{ height: '20px' }} src={resinLogo} />
							</Link>
						</Flex>
						<Link to="/">
							<Brand />
						</Link>
					</Box>

					<MobileNavigation joined primary>
						<Flex direction="column">
							{navigationLinks.map((entry, i) => (
								<MenuLink my={2} key={i} to={entry.link} blank={entry.isBlank}>
									{entry.text}
								</MenuLink>
							))}
						</Flex>
					</MobileNavigation>

					<DesktopNavigation align="center">
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
					</DesktopNavigation>
				</Flex>
			</Container>
		</StickyHeader>
	);
});

export default Nav;
