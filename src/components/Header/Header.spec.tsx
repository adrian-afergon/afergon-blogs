import * as React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { Header } from './index'
import { MediaSizes } from '../../hooks/useMedia/media-sizes'

describe('Header', () => {
  const title = 'irrelevant title'

  beforeEach(() => {
    window.resizeTo = function resizeTo (width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height
      }).dispatchEvent(new this.Event('resize'))
    }
  })

  it('has a title', () => {
    const view: RenderResult = render(<Header title={title}/>)
    expect(view.queryByText(title)).toBeInTheDocument()
  })

  it('display the menu-button when is an small screen', () => {
    window.resizeTo(MediaSizes.maxMedium - 1, MediaSizes.maxMedium)
    const view = render(<Header title={title} />)
    expect(view.queryByLabelText('menu')).toBeInTheDocument()
  })

  it('hides the menu-button when is a large screen', () => {
    window.resizeTo(MediaSizes.maxLarge, MediaSizes.maxMedium)
    const view = render(<Header title={title} />)
    expect(view.queryByLabelText('menu')).not.toBeInTheDocument()
  })

  it('shows the navigation bar when is hided and menu-button is clicked', () => {
    window.resizeTo(MediaSizes.maxMedium - 1, MediaSizes.maxMedium)
    const view = render(<Header title={title} />)
    const menuButton = view.getByLabelText('menu')
    fireEvent.click(menuButton)

    expect(view.queryByRole('navigation')).toBeInTheDocument()
  })

  it('hides the navigation bar when is showed menu-button is clicked', () => {
    window.resizeTo(MediaSizes.maxMedium - 1, MediaSizes.maxMedium)
    const view = render(<Header title={title} />)
    const menuButton = view.getByLabelText('menu')
    fireEvent.click(menuButton) // display
    fireEvent.click(menuButton) // hide

    expect(view.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
