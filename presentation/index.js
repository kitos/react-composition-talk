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
  Link,
  Appear,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import * as reactLogo from '../assets/react-logo.png'
import * as nikitos from '../assets/nikitos.jpg'

require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
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
        <Slide>
          <Image src={reactLogo} />
          <Heading size={1} fit caps lineHeight={1}>
            React composition
          </Heading>
        </Slide>
        {/* nikitos */}
        <Slide>
          <Layout>
            <Image src={nikitos} height={300} />
            <Text size={3} textColor="secondary">
              Nikita Kirsanov - Senior software engineer EPAM Systems
            </Text>
          </Layout>
        </Slide>
        {/* Agenda */}
        <Slide>
          <Heading size={3} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <Appear>
              <ListItem>What is composition?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Patterns in react</ListItem>
            </Appear>
            <Appear>
              <ListItem>Style composition</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* What is composition? */}
        <Slide>
          <Heading size={2}>What is composition?</Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              function composition is an act or mechanism to combine simple
              functions to build more complicated ones.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={3}>Why?</Heading>
          <List>
            <ListItem>write less code</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        {/* Patterns in react */}
        <Slide>
          <Heading size={2}>Patterns in react</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Smart/Dumb components</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Mixins</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Higher-Order Components (HOC)</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Recompose</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>render props</Heading>
        </Slide>
        {/* Who is using render props? */}
        <Slide>
          <Heading size={3}>Who is using render props?</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ReactTraining/react-router">
                react-router 4
              </Link>
            </ListItem>
            <ListItem>
              <Link href="">lots of component libraries</Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b">
                react! new context API
              </Link>
            </ListItem>
          </List>
        </Slide>
        {/* Style composition */}
        <Slide>
          <Heading size={2}>Style composition</Heading>
        </Slide>
        {/* further reading */}
        <Slide>
          <Heading size={3}>Further reading</Heading>
          <List>
            <ListItem>
              <Link href="https://reactjs.org/docs/higher-order-components.html">
                Higher-Order Components
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">
                Use a Render Prop!
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b">
                reacts new context API
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
