import * as React from 'react'
import styled from 'styled-components'
import { Image } from 'spectacle'
import {Box, Flex} from 'grid-styled'
import epam from '../assets/epam-start.png'
import bg from '../assets/start-bg.png'

let LeftSide = styled.div`
  border-right: 2px solid #4b8ac4;
  text-align: left;
`

let RightSide = styled.div`
  background: #fff;
`

let EventTitle = styled.h1`
  text-transform: uppercase;
`

let EventDate = styled.time`
  display: inline-block;
  padding: 10px;
  border: 2px solid #4b8ac4;
`

export default () => (
  <Flex>
    <Flex
      is={LeftSide}
      flexDirection="column"
      justifyContent="space-around"
      flex={2}>
      <EventTitle>React composition</EventTitle>

      <Box my="15%">
        <div>Никита</div>
        <div>Кирсанов</div>
      </Box>

      <Box>
        <EventDate>Апрель 2018</EventDate>
      </Box>
    </Flex>
    <Flex
      flexDirection="column"
      justifyContent="center"
      flex={1}
      is={RightSide}>
      <Image src={epam} width="60%" />
      <Image src={bg} />
    </Flex>
  </Flex>
)
