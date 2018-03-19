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
  CodePane,
  ComponentPlayground,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import reactLogo from '../assets/react-logo.png'
import nikitos from '../assets/nikitos.jpg'

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

window.wrapperStyle = {
  minHeight: '100%',
  border: '1px dashed green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

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
          <Heading size={2}>Patterns/approaches in react</Heading>
          <List>
            <Appear>
              <ListItem>Smart/Dumb components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mixins</ListItem>
            </Appear>
            <Appear>
              <ListItem>Higher-Order Components (HOC)</ListItem>
            </Appear>
            <Appear>
              <ListItem>render props</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Mixins */}
        <Slide>
          <Heading size={3}>Mixins</Heading>
          <List>
            <ListItem>ES6 classes don’t support them</ListItem>
            <ListItem>Indirection</ListItem>
            <ListItem>Naming collisions</ListItem>
            <ListItem>Static composition</ListItem>
          </List>
        </Slide>
        {/* HOC */}
        <Slide>
          <Heading size={6}>Higher-Order Components (HOC)</Heading>
          <ComponentPlayground
            theme="light"
            code={require('raw-loader!./hoc.1.example')}
          />
        </Slide>
        {/* Recompose */}
        <Slide>
          <Heading size={3}>
            <Link href="https://github.com/acdlite/recompose">Recompose.</Link>{' '}
            Basic
          </Heading>
          <CodePane
            source={require('raw-loader!./recompose.1.example')}
            theme="light"
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Heading size={3}>Recompose. Relay</Heading>
          <CodePane
            source={require('raw-loader!./recompose.2.example')}
            theme="light"
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Heading size={3}>Recompose. We need more examples</Heading>
          <CodePane
            source={require('raw-loader!./recompose.3.example')}
            theme="light"
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Heading size={3}>So...</Heading>
          <List>
            <ListItem>Indirection</ListItem>
            <ListItem>Naming collisions</ListItem>
            <ListItem>Static composition</ListItem>
          </List>
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
              <Link href="https://github.com/acdlite/recompose">Recompose</Link>
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
