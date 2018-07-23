import React from "react"
import { getSiteProps } from "@resin.io/react-static"
import { Button, Box, Container, Text } from "resin-components"
import styled from "styled-components"
import Jumbotron from "../components/Jumbotron"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import Features from "../components/Features"
import DeviceMap from "../components/DeviceMap"
import get from "lodash/get"

const ListLink = styled.a`
    font-family: inherit;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 400;
    -webkit-appearance: none;
    min-width: auto;
    vertical-align: middle;
    font-size: inherit;
    line-height: 1.1;
    text-align: center;
    cursor: pointer;
    color: rgb(255, 255, 255);
    height: 36px;
    transition-property: color, background, border-color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
    padding: 0px 30px;
    border-radius: 3px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    background: #ab47bc;
    outline: none;

		&:hover {
			background: #8a2cb0
		}
`

export default getSiteProps(props => {
  const getter = key => get(props, key)
  return (
    <div>
      <Jumbotron {...props} />

			<Box py={50}>
				<Container style={{textAlign: 'center'}}>
					<Text mb={3}>Stay up to date with Balena Fin news and releases!</Text>
					<ListLink href="http://eepurl.com/doIjXX" target="_blank">Join mailing list</ListLink>
				</Container>
			</Box>
    </div>
  )
})
