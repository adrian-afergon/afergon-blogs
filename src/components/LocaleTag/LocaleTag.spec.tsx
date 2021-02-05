import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { LocaleTag } from './'

describe('LocaleTag', () => {
  it('should display the default message', () => {
    const text = 'irrelevant text'
    const view: RenderResult = render(
      <LocaleTag>{text}</LocaleTag>
    )
    expect(view.queryByText(text)).toBeInTheDocument()
  })
})
