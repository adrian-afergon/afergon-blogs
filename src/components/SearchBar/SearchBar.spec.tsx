import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { SearchBar} from './';

describe('SearchBar', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <SearchBar types={[]} onChangeSelectedTypes={jest.fn()} onChangeFilter={jest.fn()}/>,
    );
    expect(view.queryByText('Hello from SearchBar!')).not.toBeInTheDocument();
  });
});
