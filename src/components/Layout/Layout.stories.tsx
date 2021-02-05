import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Layout } from './Layout'

const stories = storiesOf('Layout', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const value = text('Text value', 'Hello from Layout!!')
  return (
      <Layout>{value}</Layout>
  )
})
