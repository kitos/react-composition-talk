import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import nikitos from '../assets/nikitos.jpg'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'
import webpurple from '../assets/webpurple.svg'

const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  object-fit: cover;
`

const Info = styled.div`
  font-size: 16px;
`

const I = styled.img`
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const ContactList = styled.ul`
  list-style: none;
`

export default () => (
  <React.Fragment>
    <h2>About me</h2>
    <Flex justifyContent="center">
      <Flex flexDirection="column" alignItems="center">
        <Box mb="20px">
          <Avatar src={nikitos} />
        </Box>
        <Box mb="10px">Nikita Kirsanov</Box>
        <Info>Senior Software Engineer</Info>
        <Info>EPAM Systems (Ryazan)</Info>
      </Flex>
      <Flex is={ContactList} flexDirection="column" alignItems="flex-start">
        <Box is="li" mb="10px">
          <Link href="https://twitter.com/kitos_kirsanov">
            <I src={twitter} />kitos_kirsanov
          </Link>
        </Box>
        <Box is="li" mb="10px">
          <Link href="https://github.com/kitos">
            <I src={github} />kitos
          </Link>
        </Box>
        <li>
          <Link href="https://twitter.com/kitos_kirsanov">
            <I src={webpurple} />WebPurple
          </Link>{' '}
          team
        </li>
      </Flex>
    </Flex>
  </React.Fragment>
)
