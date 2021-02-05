import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { TypeFilter } from './TypeFilter'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('TypeFilter', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  return (
      <TypeFilter
        onChangeSelectedTypes={action('Filters has change')}
        types={['Post', 'Talks']}
      />
  )
})
