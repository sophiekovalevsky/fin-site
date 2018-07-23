import React from 'react'
import { withTheme } from 'styled-components'
import { Flex, Box, Container, Text, Heading } from 'resin-components'

function createMarkup(html) {
  return { __html: html }
}

const Wrapper = Box.extend`
  max-width: 450px;
  color: white;
`

export default withTheme(props => {
  return (
    <Flex bg={props.theme.colors.gray.dark} py={5}>
      <Container>
        <Heading.h2 mb={5} color="white" align="center">
          Why {props.repository.name}?
        </Heading.h2>
        <Flex wrap justify="center">
          <Wrapper>
            <Text.p
              align="left"
              dangerouslySetInnerHTML={createMarkup(props.settings.motivation)}
            />
          </Wrapper>
        </Flex>
      </Container>
    </Flex>
  )
})
