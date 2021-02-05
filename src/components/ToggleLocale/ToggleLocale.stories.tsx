import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ToggleLocale } from './ToggleLocale'
import { buildLocaleResource } from '../../_helpers/builders/build-locale-resource'

const stories = storiesOf('ToggleLocale', module)
stories.addDecorator(withKnobs)

stories.add('with message', () => {
  const firstLocale = buildLocaleResource({ locale: 'a locale' })
  const secondLocale = buildLocaleResource({ locale: 'a different locale' })
  const locales = [firstLocale, secondLocale]
  return (
      <ToggleLocale locales={locales} />
  )
})
