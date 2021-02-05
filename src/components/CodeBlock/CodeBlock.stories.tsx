import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { CodeBlock } from './CodeBlock'

const stories = storiesOf('CodeBlock', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const language = text('Language', 'javascript')
  const value = text('Code', `
  const HelloWorld = () => <>Hello World</>
  `)
  return (
      <CodeBlock language={language} value={value} />
  )
})
