import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ToggleLocale } from './'
import { buildLocaleResource } from '@/_helpers/builders/build-locale-resource'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('ToggleLocale', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/initial')
  })

  it('should display the default message', () => {
    const firstLocale = buildLocaleResource({ locale: 'a locale' })
    const secondLocale = buildLocaleResource({ locale: 'a different locale' })
    const locales = [firstLocale, secondLocale]

    const view: RenderResult = render(
      <ToggleLocale locales={locales} />
    )

    locales.forEach((localeResource) => {
      expect(view.queryByText(localeResource.locale)).toBeInTheDocument()
    })
  })
})
