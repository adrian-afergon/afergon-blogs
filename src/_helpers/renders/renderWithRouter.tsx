import React from 'react'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router'

export * from '@testing-library/react'

// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
type DefaultParams = Parameters<typeof render>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const mockRouter: NextRouter = {
  isReady: false,
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  isFallback: false
}

export function renderWithRouter (
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
) {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    )
  }

  return render(ui, { wrapper, ...options })
}
