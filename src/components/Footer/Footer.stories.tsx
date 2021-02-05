import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Footer } from './Footer'

const stories = storiesOf('Footer', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const value = text('Text value', 'Hello from Footer!!')
  return (
      <Footer>{value}</Footer>
  )
})
