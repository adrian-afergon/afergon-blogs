import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { SearchBar } from './SearchBar'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('SearchBar', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => (
      <SearchBar
          types={['Type 1', 'Type 2']}
          onChangeFilter={action('Filtering')}
          onChangeSelectedTypes={action('Types selected')}
      />
))
