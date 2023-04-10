import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ToggleLocale } from './'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('ToggleLocale', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/initial')
  })

  it('should display the default message', () => {
    const firstLocale = 'a locale'
    const secondLocale = 'a different locale'
    const locales = [firstLocale, secondLocale]

    const view: RenderResult = render(
      <ToggleLocale locales={locales} handle="irrelevant handle" />
    )

    locales.forEach((localeResource) => {
      expect(view.queryByText(localeResource)).toBeInTheDocument()
    })
  })
})
