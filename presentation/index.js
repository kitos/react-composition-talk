import React from 'react'
import createReactClass from 'create-react-class'
import { Box, Flex } from 'grid-styled'
import { compose } from 'recompose'

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import Start from './1.start'
import AboutMe from './about-me'

import mixinError from '../assets/mixin-error.jpg'
import michaelJackson from '../assets/michael-jackson.jpg'
import trueMichaelJackson from '../assets/true-michael-jackson.jpg'
import ryanflorence from '../assets/ryanflorence.jpg'

require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#03A9FC',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
)

const codeTheme = 'light'

const withCounter = initialState => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: initialState }
    }

    inc(event) {
      this.setState(({ value: prev }) => ({ value: prev + 1 }))
    }

    render() {
      return (
        <Component
          {...this.props}
          value={this.state.value}
          inc={this.inc.bind(this)}
        />
      )
    }
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  inc(event) {
    this.setState(({ value: prev }) => ({ value: prev + 1 }))
  }

  render() {
    return this.props.children(this.state.value, this.inc.bind(this))
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentHeight={900}
        contentWidth={1366}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        progress="number"
        theme={theme}>
        <Slide bgColor="#97cad4">
          <Start />
        </Slide>
        {/* nikitos */}
        <Slide>
          <AboutMe />
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
              <ListItem>mixins</ListItem>
            </Appear>
            <Appear>
              <ListItem>HOC</ListItem>
            </Appear>
            <Appear>
              <ListItem>render props</ListItem>
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
            {['write less code', 'declarative', 'testable', '...'].map(
              point => (
                <Appear>
                  <ListItem>{point}</ListItem>
                </Appear>
              ),
            )}
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              If you need to write more features in a shorter time, write less
              code.
            </Quote>
            <Cite>Some clever guy</Cite>
          </BlockQuote>
        </Slide>
        {/* Patterns in react */}
        <Slide>
          <Heading size={2}>Patterns/approaches in react</Heading>
          <List>
            <Appear>
              <ListItem>Smart 🧐 / Dumb 🤪 components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mixins 👫</ListItem>
            </Appear>
            <Appear>
              <ListItem>Higher-Order Components (HOC) 🙆‍</ListItem>
            </Appear>
            <Appear>
              <ListItem>render props 🤷‍</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Mixins */}
        <Slide>
          <Heading size={3}>Mixins</Heading>
          <ComponentPlayground
            theme={codeTheme}
            scope={{ Box, createReactClass }}
            code={require('raw-loader!./mixins.1.example')}
          />
        </Slide>
        <Slide>
          <Heading size={3}>Mixins 😔</Heading>
          <CodePane
            textSize="26px"
            source={require('raw-loader!./mixins.2.example')}
            theme={codeTheme}
            lang="jsx"
          />
          <Image src={mixinError} />
        </Slide>
        <Slide>
          <Heading size={3}>Mixins cons</Heading>
          <List>
            <ListItem>ES6 classes don’t support them</ListItem>
            <ListItem>Indirection</ListItem>
            <ListItem>Naming collisions</ListItem>
            <ListItem>Static composition</ListItem>
          </List>
        </Slide>

        {/* HOC */}

        <Slide>
          <Heading size={3}>Higher-Order Components (HOC) 🤔</Heading>
          <ComponentPlayground
            theme={codeTheme}
            scope={{ Box, compose }}
            code={require('raw-loader!./hoc.1.example')}
          />
        </Slide>

        {/* Recompose */}

        <Slide>
          <Heading size={3}>
            <Link href="https://github.com/acdlite/recompose">Recompose.</Link>{' '}
            Basic 😮
          </Heading>
          <CodePane
            textSize="26px"
            source={require('raw-loader!./recompose.1.example')}
            theme={codeTheme}
            lang="jsx"
          />
        </Slide>

        <Slide>
          <Heading size={3}>Recompose. Relay 😯</Heading>
          <Flex alignContent="center">
            <Box flex={3}>
              <CodePane
                textSize="24px"
                source={require('raw-loader!./recompose.2.1.example')}
                theme={codeTheme}
                lang="jsx"
              />
            </Box>
            <Box flex={4}>
              <CodePane
                textSize="24px"
                source={require('raw-loader!./recompose.2.2.example')}
                theme={codeTheme}
                lang="jsx"
              />
            </Box>
          </Flex>
        </Slide>

        <Slide>
          <Heading size={3}>Recompose. We need more examples 😲</Heading>
          <CodePane
            textSize="24px"
            source={require('raw-loader!./recompose.3.example')}
            theme={codeTheme}
            lang="jsx"
          />
        </Slide>

        <Slide>
          <Heading size={3}>HOC 😫</Heading>
          <ComponentPlayground
            theme={codeTheme}
            scope={{ Box, compose, withCounter }}
            code={require('raw-loader!./hoc.2.example')}
          />
        </Slide>

        <Slide>
          <Heading size={3}>So...</Heading>
          <List>
            <ListItem>Indirection</ListItem>
            <ListItem>Naming collisions</ListItem>
            <ListItem>Static composition</ListItem>
            <ListItem>No help from react</ListItem>
          </List>
        </Slide>

        {/* render props */}

        <Slide>
          <Heading size={3}>render props 🤨</Heading>
          <ComponentPlayground
            theme={codeTheme}
            scope={{ Box }}
            lang="jsx"
            code={require('raw-loader!./render-props.1.example')}
          />
        </Slide>

        <Slide>
          <Heading size={3}>render props 🤤</Heading>
          <ComponentPlayground
            theme={codeTheme}
            scope={{ Box, Counter }}
            lang="jsx"
            code={require('raw-loader!./render-props.1.1.example')}
          />
        </Slide>

        <Slide>
          <Heading size={3}>render props. apollo 😌</Heading>
          <CodePane
            textSize="24px"
            theme={codeTheme}
            lang="jsx"
            source={require('raw-loader!./render-props.4.example')}
          />
        </Slide>

        <Slide>
          <Heading size={3}>render props evangelist</Heading>
          <Image src={michaelJackson} />
        </Slide>

        <Slide>
          <Heading size={3}>
            <a href="https://twitter.com/mjackson">@mjackson</a> and{' '}
            <a href="https://twitter.com/ryanflorence">@ryanflorence</a>
          </Heading>
          <Flex mt="100px">
            <Image src={trueMichaelJackson} height="300px" />
            <Image src={ryanflorence} height="300px" />
          </Flex>
        </Slide>

        {/* Who is using render props? */}
        <Slide>
          <Heading size={3}>Who else is using render props?</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ReactTraining/react-router">
                react-router 4
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/paypal/downshift">
                downshift 🏎️
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b">
                react! new context API
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>render props. context 🤪</Heading>
          <CodePane
            textSize="20px"
            theme={codeTheme}
            lang="jsx"
            source={require('raw-loader!./render-props.3.example')}
          />
        </Slide>
        <Slide>
          <Heading size={3}>render props</Heading>
          <List>
            <Appear>
              <ListItem>Clear flow! 🙈</ListItem>
            </Appear>
            <Appear>
              <ListItem>No naming collisions! 🙉</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dynamic composition! 🙊</ListItem>
            </Appear>
          </List>
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
        <Slide>
          <Heading size={2} style={{ marginBottom: '40px' }}>
            That's it!
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
