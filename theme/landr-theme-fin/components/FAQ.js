import React from 'react';
import { Heading, Container, Flex, Text, Divider } from 'resin-components';
import Accordian from 'components/Accordian';
import { withTheme } from 'styled-components';

const FAQ = props => {
	const items = props.faqs.map(faq => {
		return {
			title: (
				<Heading.h4 mb={1}>
					{faq.title}
					<Divider color={props.theme.colors.gray.light} />
				</Heading.h4>
			),
			render: () => {
				return <Text.p dangerouslySetInnerHTML={{ __html: faq.html }} />;
			},
		};
	});

	return (
		<Flex py={5} px={2}>
			<Container>
				<Heading.h2 mb={5} align="center">
					Frequently Asked Questions
				</Heading.h2>
				<Accordian items={items} />
			</Container>
		</Flex>
	);
};

export default withTheme(FAQ);
