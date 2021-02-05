import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { TextFilter } from './TextFilter'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('TextFilter', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  return (
      <TextFilter onChangeFilter={action('Text changes')}/>
  )
})
