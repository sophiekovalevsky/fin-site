import React from 'react';
import { Container, Flex, Box, Image } from 'resin-components';
import styled from 'styled-components';

import UP_SIDE from '../images/diagrams/Top.png';
import BUTTOM_SIDE from '../images/diagrams/Bottom.png';

const DiagramImage = styled(Image)`
`;

export default () => {
	return (
		<Box bg="#efefef" py={4}>
			<Container>
				<Flex wrap>
					<Box width={[1, 1 / 2]}>
						<DiagramImage mx="auto" src={UP_SIDE} />
					</Box>
					<Box width={[1, 1 / 2]}>
						<DiagramImage mx="auto" src={BUTTOM_SIDE} />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
