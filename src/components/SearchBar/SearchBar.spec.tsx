import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { SearchBar } from './'
import {vi} from "vitest";

describe('SearchBar', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <SearchBar types={[]} onChangeSelectedTypes={vi.fn()} onChangeFilter={vi.fn()}/>
    )
    expect(view.queryByText('Hello from SearchBar!')).not.toBeInTheDocument()
  })
})
