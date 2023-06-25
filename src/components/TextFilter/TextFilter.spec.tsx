import * as React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { TextFilter } from './'
import { vi } from "vitest";

describe('TextFilter', () => {
  let view: RenderResult
  let changeFilterMock = vi.fn()
  let input: HTMLInputElement

  beforeEach(() => {
    changeFilterMock = vi.fn()
    view = render(
      <TextFilter onChangeFilter={changeFilterMock}/>
    )
    input = view.getByPlaceholderText('components.search.placeholder') as HTMLInputElement
  })

  const changeValue = (value: string) => {
    fireEvent.change(input, { target: { value } })
  }

  it('changes the value', async () => {
    const value = 'irrelevant value'
    changeValue(value)
    expect(input.value).toBe(value)
  })

  it('cleans the value', async () => {
    const value = 'irrelevant value'
    changeValue(value)
    const buttonClean = await view.findByRole('button')
    fireEvent.click(buttonClean)

    expect(input.value).toBe('')
  })
})
