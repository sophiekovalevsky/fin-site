import React from 'react';
import { Heading, Container, Flex, Box, Image, Text } from 'resin-components';
import { assets } from 'landr';

const ImageBox = Flex.extend`
	min-height: 100px;
`;

export default props => {
	return (
		<Flex py={5}>
			<Container>
				<Heading.h2 mb={5} align="center">
					Features
				</Heading.h2>
				<Flex wrap mb={5}>
					{props.settings.features.map(feature => {
						const imageSet = `${assets[`${feature.icon}`]}, ${
							assets[`${feature.icon}@2x`]
						} 2x`;
						return (
							<Box align="center" px={2} width={[1, 1 / 3]}>
								<ImageBox align="center" justify="center">
									<Box>
										<Image
											m="auto"
											mb={2}
											h={['100px', '60px']}
											w={['50px', '60px']}
											src={assets[`${feature.icon}`]}
											srcSet={imageSet}
										/>
									</Box>
								</ImageBox>
								<Heading.h5 mb={2} align="center">
									{feature.title}
								</Heading.h5>
								<Text.p
									px={3}
									align="center"
									dangerouslySetInnerHTML={{ __html: feature.description }}
								/>
							</Box>
						);
					})}
				</Flex>
			</Container>
		</Flex>
	);
};
