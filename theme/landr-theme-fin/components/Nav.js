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
import styled from 'styled-components';
import { Link } from 'landr';

import balenaLogo from '../images/balena.svg';
import finLogo from '../images/balena-fin.svg';

import { navigationLinks } from '../helpers';

const windowGlobal = typeof window !== 'undefined' && window;

const Brand = () => (
	<Box>
		<Image style={{ height: '40px' }} src={finLogo} />
	</Box>
);

const MenuLink = styled(Link)`
	&& {
		position: relative;
		font-size: 14px;
		transition: color .1s ease-in;
		font-weight: bold;

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

const TranparentHeader = styled(Box)`
	&& {
		position: absolute;
		top: 0;
		width: 100%;
		background: transparent;
		z-index: 2;
	}
`;

const SolidHeader = styled(Box)`
	position: sticky;
	top: 0px;
	z-index: 2;
	box-shadow: rgb(239, 239, 239) 0px 0px 2px 1px;
	background: rgb(255, 255, 255);
`;

const MobileNavigation = styled(DropDownButton)`
	display: none;
	@media all and (max-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
	&& > div {
		left: -85px;
		box-shadow: none;
	}
`;

const DesktopNavigation = styled(Flex)`
	display: none;
	@media all and (min-width: ${props => props.theme.breakpoints[2]}em) {
		display: block;
	}
`;

const Nav = withTheme(props => {
	let pathSlug = null;
	if (windowGlobal) {
		pathSlug = windowGlobal.location.pathname;
		pathSlug = _.trim(pathSlug, '/');
	}

	const isIndex = _.isEmpty(pathSlug);

	// If Index, show the transparent Header, that blends with the svg background
	const HeaderElement = isIndex ? TranparentHeader : SolidHeader;

	return (
		<HeaderElement py={2}>
			<Container>
				<Flex justify="space-between" align="center" p={2}>
					<Box>
						<Flex wrap mb={1} align='center'>
							<Text.span fontSize={12}>a hardware project by</Text.span>
							<Link target to="https://balena.io">
								<Image ml={2} style={{ height: '20px' }} src={balenaLogo} />
							</Link>
						</Flex>
						<Link mt={2} to="/">
							<Brand />
						</Link>
					</Box>

					<MobileNavigation joined secondary outline>
						<Flex direction="column">
							{navigationLinks.map((entry, i) => (
								<MenuLink
									color={props.theme.colors.primary.main}
									my={2}
									key={i}
									to={entry.link}
									blank={entry.isBlank}
								>
									{entry.text}
								</MenuLink>
							))}
						</Flex>
					</MobileNavigation>

					<DesktopNavigation align="center">
						{navigationLinks.map((entry, i) => (
							<MenuLink
								color={isIndex ? '#fff' : props.theme.colors.primary.main}
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
		</HeaderElement>
	);
});

export default Nav;
