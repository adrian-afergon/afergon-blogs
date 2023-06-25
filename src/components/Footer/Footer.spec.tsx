import * as React from 'react'
import {render, screen} from '@testing-library/react'
import { Footer } from './index'

describe('Footer', () => {
  it('should display the default message', () => {
    render(
      <Footer/>
    )
    screen.getByRole('link', {name: /github/i})
    screen.getByRole('link', {name: /twitter/i})
    screen.getByRole('link', {name: /linkedin/i})
    screen.getByRole('link', {name: /footer.contact/i})
  })
})
