import React from 'react'

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import * as reactLogo from '../assets/react-logo.png'
import * as nikitos from '../assets/nikitos.jpg'

require('normalize.css')

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#fff',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={reactLogo} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React composition
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Image src={nikitos} height={300} />
            <Text size={2} textColor="secondary">
              Nikita Kirsanov - Senior software engineer EPAM Systems
            </Text>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem>What is composition?</ListItem>
            <ListItem>High order components</ListItem>
            <ListItem>Render props</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              If you need to write more features in a shorter time, write less
              code.
            </Quote>
            <Cite>Some clever guy</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
