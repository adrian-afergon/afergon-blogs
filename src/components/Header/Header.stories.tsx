import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Header } from './Header'

const stories = storiesOf('Header', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const title = text('Title', 'Adrián Ferrera')
  return <Header title={title} />
})
