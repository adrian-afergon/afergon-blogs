import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { LocaleTag } from './LocaleTag'

const stories = storiesOf('LocaleTag', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const value = text('Text value', 'Hello from LocaleTag!!')
  return (
    <div style={{ backgroundColor: '#EFEFEF' }}>
      <LocaleTag>{value}</LocaleTag>
    </div>
  )
})
